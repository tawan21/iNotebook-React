import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "615aecf085bbcb4960684643",
            "user": "6156f423d84d6ab2f74acf5d",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-10-04T12:00:48.090Z",
            "__v": 0
        },
        {
            "_id": "615aecf085bbcb4960684645",
            "user": "6156f423d84d6ab2f74acf5d",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-10-04T12:00:48.711Z",
            "__v": 0
        },
        {
            "_id": "615aecf085bbcb4960684648",
            "user": "6156f423d84d6ab2f74acf5d",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-10-04T12:00:48.711Z",
            "__v": 0
        },
        {
            "_id": "615aecf085bbcb4960684649",
            "user": "6156f423d84d6ab2f74acf5d",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-10-04T12:00:48.711Z",
            "__v": 0
        },
        {
            "_id": "615aecf085bbcb4960684650",
            "user": "6156f423d84d6ab2f74acf5d",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-10-04T12:00:48.711Z",
            "__v": 0
        },
        {
            "_id": "615aecf085bbcb4960684651",
            "user": "6156f423d84d6ab2f74acf5d",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-10-04T12:00:48.711Z",
            "__v": 0
        },
        {
            "_id": "615aecf085bbcb4960684652",
            "user": "6156f423d84d6ab2f74acf5d",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-10-04T12:00:48.711Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)
    
    // Add a Note
    const addNote = (title, description, tag) => {
        // TODO: API Call
        console.log("Adding a new note");
        const note = {
            "_id": "615aecf085bbcb4960684653",
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
    const deleteNote = () => {

    }
    
    // Edit a Note
    const editNote = () => {
        
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;