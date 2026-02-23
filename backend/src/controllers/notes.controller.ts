import type { NextFunction, Request, Response } from "express";
import { NoteModel } from "../models/notes";

export const getAllNotes = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.json({
      notes: "Return all notes",
    });
  } catch (error) {
    next(error);
  }
};

export const getANote = (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json({
      notes: "Get a note",
    });
  } catch (error) {
    next(error);
  }
};

export const addNote = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { title, description } = req.body;

    const newNote = new NoteModel({
      title,
      description,
    });
    newNote.save();

    return res.status(201).json({
      notes: newNote,
    });
  } catch (error) {
    next(error);
  }
};

export const updateNote = (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json({
      notes: "Update a note",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteNote = (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json({
      notes: "Update a note",
    });
  } catch (error) {
    next(error);
  }
};
