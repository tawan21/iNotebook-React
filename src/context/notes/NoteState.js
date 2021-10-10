import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    // Get all Notes
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1NmY0MjNkODRkNmFiMmY3NGFjZjVkIn0sImlhdCI6MTYzMzM0NTIyMX0.l5m2Z_5rxlJQGDaeyTkwwdtpoHwX0ncEuZZ-RZ05WJY'
            }
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1NmY0MjNkODRkNmFiMmY3NGFjZjVkIn0sImlhdCI6MTYzMzM0NTIyMX0.l5m2Z_5rxlJQGDaeyTkwwdtpoHwX0ncEuZZ-RZ05WJY'
            },
            body: JSON.stringify({title, description, tag})
        });
        console.log("Adding a new note");
        const note = {
            "_id": "615aecf085bbcb4960684646",
            "user": "6156f423d84d6ab2f74acf5d",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-10-04T12:00:48.711Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1NmY0MjNkODRkNmFiMmY3NGFjZjVkIn0sImlhdCI6MTYzMzM0NTIyMX0.l5m2Z_5rxlJQGDaeyTkwwdtpoHwX0ncEuZZ-RZ05WJY'
            }
        });
        const json = response.json();
        console.log(json)
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note => { return note._id !== id }))
        setNotes(newNotes);
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1NmY0MjNkODRkNmFiMmY3NGFjZjVkIn0sImlhdCI6MTYzMzM0NTIyMX0.l5m2Z_5rxlJQGDaeyTkwwdtpoHwX0ncEuZZ-RZ05WJY'
            },
            body: JSON.stringify({title, description, tag})
        });
        const json = response.json();
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;