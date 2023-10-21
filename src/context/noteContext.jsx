import { createContext, useContext, useState } from 'react';
import { getNotesRequest , addNotesRequest, updateNotesRequest, deleteNotesReques } from '../api/note';


const NoteContext = createContext();

export const useNotes = () => {
    const context = useContext(NoteContext);
    if (!context) {
        throw new Error('useNotes must be used within a ProductoProvider');
    }
    return context;
};

export function NoteProvier({ children }) {
    const [notes, setNotes] = useState([]);

    const getNotes = async () => {
        try {
            const res = await getNotesRequest();
            setNotes(res.data);
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    const addNotes = async (notes)=>{
        try {
            const res = await addNotesRequest(notes);
            setNotes([...notes,res.data]),
            console.log(res);

        } catch (error) {
            console.log(error)
        }
    }


    const updateNotes = async (noteId , updateData)=>{
        try {
            const res = await updateNotesRequest (noteId , updateData);
            setNotes(notes.map(note => (note._id === noteId ? res.data : note)));
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteNotes  = async (noteId) =>{
        try {
            const res = await deleteNotesReques (noteId);
            setNotes(notes.filter(note => note._id !== noteId));
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <NoteContext.Provider value={{
            notes,
            getNotes,
            addNotes,
            updateNotes,
            deleteNotes
        }}>
            {children}
        </NoteContext.Provider>
    )

}