import express, { Express, Request, Response } from "express";

const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app: Express = express();

const mysql = require("mysql");
const MySQLStore = require("express-mysql-session")(session);

// database connection
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "chatty"
});
//

export const sessionStore = new MySQLStore(
  {
    expiration: 10800000,
    createDatabaseTable: true,
    schema: {
      tableName: "sessiontbl",
      columnNames: {
        session_id: "session_id",
        expires: "expires",
        data: "data"
      }
    }
  },
  db
);

// middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "user_id",
    secret: "thiskeyissecretdonotshowitanyone",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 10800000
    }
  })
);
//

app.post("/sign_up", (req: Request, res: Response) => {
  // if this is a new user, insert its inf to database
  db.query("INSERT INTO users SET ?", [req.body], (error: Error) => {
    if (error) return res.status(500).send("Server error occur :(");
  });

  // set its hash_key
  req.session!.user_key = req.body.hash_key;

  // and show text
  return res.status(200).send("Successfully!");
});

app.post("/log_in", (req: Request, res: Response) => {
  // gettings name and password from frontend
  const { email, password } = req.body;

  // then get all users
  db.query(
    "SELECT id, name, lastname, email, role, avatar, hash_key FROM users WHERE email = ? AND password = ?",
    [email, password],
    (error: Error, result: any) => {
      if (error) return res.status(500).send("Server error occur :(");

      if (result.length > 0) {
        req.session!.user_key = result[0].hash_key;
        return res.status(200).send("Logged in!");
      }

      return res.status(500).send("User is not found!");
    }
  );
});

app.post("/add_to_friend", (req: Request, res: Response) => {
  const { user_id, friend_id } = req.body;

  db.query(
    "INSERT INTO `friends` (`user_id`, `friend_id`) VALUES (?, ?)",
    [user_id, friend_id],
    (error: Error) => {
      if (error) return res.status(500).send("Server error occur :(");

      db.query(
        "INSERT INTO `friends` (`user_id`, `friend_id`) VALUES (?, ?)",
        [friend_id, user_id],
        (error: Error) => {
          if (error) return res.status(500).send("Server error occur :(");
        }
      );

      return res.status(200).send("User added!");
    }
  );
});

// check if user is logged in and has a session
app.get("/session_status", (req: Request, res: Response) => {
  console.log(req.session);

  if (req.session?.user_key) {
    // if has show status code and message
    return res.json({
      status: 200,
      message: "Logged!"
    });
  } else {
    return res.json({ status: 401, message: "Log in first!" });
  }
});

app.get("/users", (req: Request, res: Response) => {
  // get all users except logged in user
  db.query(
    "SELECT id, name, lastname, email, avatar, role FROM users WHERE hash_key NOT IN (SELECT hash_key FROM users WHERE hash_key = ?)",
    [req.session?.user_key],
    (error: Error, result: any) => {
      if (error) return res.status(500).send("Server error occur :(");
      return res.status(200).json(result);
    }
  );
});

app.get("/user", (req: Request, res: Response) => {
  // get all users except logged in user
  db.query(
    "SELECT id, name, lastname, email, avatar, role FROM users WHERE hash_key = ?",
    [req.session?.user_key],
    (error: Error, result: any) => {
      if (error) return res.status(500).send("Server error occur :(");
      return res.status(200).json(result);
    }
  );
});

app.get("/friends", (req: Request, res: Response) => {
  const { user_id } = req.query;

  db.query(
    "SELECT `name`, `lastname`, `email`, `role`, `avatar`, `friend_id` FROM users JOIN friends ON users.id = friends.friend_id WHERE friends.user_id = ?",
    [user_id],
    (error: Error, result: any) => {
      if (error) return res.status(500).send(error);
      return res.status(200).json(result);
    }
  );
});

app.listen(2000, () => {
  console.log(`Server is running at http://localhost:${2000}`);
});
