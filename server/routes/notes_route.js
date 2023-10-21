import { Router } from "express";
import { createNote, deleteNote, getNote, updateNote } from "../controllers/notes_controller.js";

const router = Router();


router.get('/notes',getNote);
router.post('/notes',createNote);
router.put('/notes/:id',updateNote);
router.delete('/notes/:id',deleteNote);

export default router;