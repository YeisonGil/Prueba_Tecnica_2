import express from 'express';
import cors from 'cors';
import notesRoute from './routes/notes_route.js'
import userRoute from './routes/user_note.js'
const app = express();

app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.use("/api",notesRoute)
app.use("/api",userRoute)

export default app;
