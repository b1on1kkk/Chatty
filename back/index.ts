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

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(2000, () => {
  console.log(`Server is running at http://localhost:${2000}`);
});
