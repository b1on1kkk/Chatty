import express, { Express, Request, Response } from "express";
import path from "path";

const app: Express = express();

const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const mysql = require("mysql");
const MySQLStore = require("express-mysql-session")(session);

const { instrument } = require("@socket.io/admin-ui");
const { Server } = require("socket.io");
const http = require("http");
const server = http.createServer(app);

////////////////////////////////////////SOCKET IO////////////////////////////////////////

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "https://admin.socket.io"],
    methods: ["GET", "POST"],
    credentials: true
  }
});

let onlineUsers: { user_id: number; socket_id: string }[] = [];

io.on("connection", (socket: any) => {
  // check if user is online
  socket.on("userConnected", (data: { new_connected_user_id: number }) => {
    if (
      !onlineUsers.some((user) => user.user_id === data.new_connected_user_id)
    ) {
      onlineUsers.push({
        user_id: data.new_connected_user_id,
        socket_id: socket.id
      });
    }

    io.emit("getOnlineUsersId", onlineUsers);
  });

  socket.on("disconnect", () => {
    onlineUsers = [
      ...onlineUsers.filter((user) => user.socket_id !== socket.id)
    ];

    io.emit("getOnlineUsersId", onlineUsers);
  });
  //

  // chat
  socket.on("clientMessage", (data: { msg: string; room: string }) => {
    io.emit("serverMessage", { ...data });
  });
  //
});

instrument(io, {
  auth: false
});

//////////////////////////////////////DATABASE CONNECTION//////////////////////////////////////

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "chatty"
});

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

//////////////////////////////////////////MIDDLEWARE////////////////////////////////////////////

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

//////////////////////////////////////////REQUESTS////////////////////////////////////////////

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

app.get("/session_status", (req: Request, res: Response) => {
  if (req.session?.user_key) {
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

app.get("/avatars", (req: Request, res: Response) => {
  const { avatar_name } = req.query;

  try {
    res.sendFile(path.join(__dirname, "avatars", `${avatar_name}`));
  } catch (error) {
    res.send(error);
  }
});

server.listen(2000, () => {
  console.log(`Server is running at http://localhost:${2000}`);
});
