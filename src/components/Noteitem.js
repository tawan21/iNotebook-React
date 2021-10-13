import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

export const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { note, updateNote } = props;
    const { deleteNote } = context;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <small>
                            {note.tag && <span className="card-text bg-secondary text-light ms-3 p-2 rounded-pill">{note.tag}</span>}
                        </small>
                        <i className="far fa-trash-alt ms-3" onClick={() => { deleteNote(note._id); props.showAlert("Deleted Successfully", "success"); }}></i>
                        <i className="far fa-edit ms-2" onClick={() => { updateNote(note); }}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}
