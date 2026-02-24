import express, {
  type Request,
  type Response,
  type NextFunction,
  type ErrorRequestHandler,
} from "express";
import cors from "cors";
import { ENV_PORT } from "../constants/envconstants";
import noteRouter from "./routes/notes.route";
import { connecttodb } from "../services/db";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  return res.json({
    health: "Ok",
  });
});

app.use("/api", noteRouter);

app.use(
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    console.error(err);
    res.status(500).json({
      error: "Something broke!",
    });
  },
);

app.listen(ENV_PORT, () => {
  connecttodb();
  console.log(`Server running at http://localhost:${ENV_PORT}`);
});
