import React, { useState } from "react";
import Button from "../../molecules/Button";
import { useDispatch } from "react-redux";
import { addNote } from "../../features/notes/noteSlice";
import uuid from "react-uuid";
function NewNote() {
  const dispatch = useDispatch();

  const [note, setNote] = useState("");

  const addNewNote = () => {
    let newNote = { content: note, id: uuid() };
    dispatch(addNote(newNote));
    setNote("");
  };
  return (
    <div className="my-4 drop-shadow-xl bg-white rounded-md p-4 flex dark:bg-neutral-600">
      <input
        placeholder="Start Typing Here..."
        className="flex-1 focus:outline-none dark:bg-neutral-600 dark:text-white p-2"
        value={note || ""}
        onChange={(e) => setNote(e.target.value)}
      />
      {note !== "" && (
        <Button addNote handleClick={addNewNote} noteText={note} />
      )}
    </div>
  );
}

export default NewNote;
