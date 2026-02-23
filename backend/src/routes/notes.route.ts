import express from "express";
import {
  addNote,
  deleteNote,
  getAllNotes,
  getANote,
  updateNote,
} from "../controllers/notes.controller";

const noteRouter = express.Router();

noteRouter.get("/all", getAllNotes);
noteRouter.get("/:id", getANote);
noteRouter.post("/add", addNote);
noteRouter.post("/:id", updateNote);
noteRouter.delete("/:id", deleteNote);

export default noteRouter;
