import React, { useState } from "react";
import Button from "../../molecules/Button";
import { useDispatch } from "react-redux";
import { addNote } from "../../features/notes/noteSlice";
import uuid from "react-uuid";

function NewNote() {

  const dispatch = useDispatch();

  const [note, setNote] = useState("");

  const addNewNote = () => {
    if (note != ""){
      let newNote = {content:note,id:uuid(),date:new Date(), isImportant:false, author:""};
      dispatch(addNote(newNote));setNote("");}
    else{
      alert("Cant add empty note");
    }
  };

  const handleInputChange = (e) => {
    setNote(e.target.value)
  };

  return (
    <div
      className="my-4 drop-shadow-xl bg-white rounded-md p-4 flex dark:bg-neutral-600"
      style={{ border: "2px solid green", fontFamily: "Comic Sans MS" }}
    >
      <input
        placeholder="Start Typing Here..."
        className="flex-1 focus:outline-none dark:bg-neutral-600 dark:text-white p-2"
        value={note || ""}
        onChange={handleInputChange}
        style={{ backgroundColor: "yellow" }}
      />
      {note !== "" ? (
        <Button
          addNote
          handleClick={addNewNote}
          noteText={note}
          style={{ fontSize: "18px", fontWeight: "bold" }}
        />
      ) : (
        <span style={{ fontSize: "12px", color: "red", padding: "8px" }}>
          No note yet
        </span>
      )}
    </div>
  );
}

export default NewNote;
