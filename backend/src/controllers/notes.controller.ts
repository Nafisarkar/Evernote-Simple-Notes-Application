import type { NextFunction, Request, Response } from "express";
import { NoteModel } from "../models/notes";
import { isValidObjectId } from "mongoose";

export const getAllNotes = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const allnotes = await NoteModel.find({}).sort({ updatedAt: -1 });

    return res.json({
      notes: allnotes,
    });
  } catch (error) {
    next(error);
  }
};

export const getANote = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    let id = req.params.id;
    if (!isValidObjectId(id)) {
      return res.json({
        Error: "Not a Valid Id",
      });
    }
    const foundNoteWithId = await NoteModel.findById(id);
    if (foundNoteWithId) {
      return res.json({
        notes: foundNoteWithId,
      });
    } else {
      return res.json({
        notes: "Not Found",
      });
    }
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

export const updateNote = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    if (!isValidObjectId(id)) {
      return res.json({
        Error: "Not a Valid Id",
      });
    }
    const foundNoteWithId = await NoteModel.findByIdAndUpdate(
      id,
      {
        title,
        description,
      },
      {
        returnDocument: "after",
      },
    );
    if (foundNoteWithId) {
      return res.json({
        notes: foundNoteWithId,
      });
    } else {
      return res.json({
        notes: "Not Found",
      });
    }
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;

    if (!isValidObjectId(id)) {
      return res.json({
        Error: "Not a Valid Id",
      });
    }

    const foundNoteWithId = await NoteModel.findByIdAndDelete(id);

    if (foundNoteWithId) {
      return res.json({
        notes: "Removed successfully",
      });
    } else {
      return res.json({
        notes: "Not Found",
      });
    }
  } catch (error) {
    next(error);
  }
};
