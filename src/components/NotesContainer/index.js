import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllNotes } from "../../features/notes/noteSlice";
import NoNotes from "../NoNotes";
import Note from "../Note";

function NotesContainer() {
  const notes = useSelector(getAllNotes);
  useEffect(() => {
    console.log("notes", notes);
  }, []);

  return (
    <div className="mt-10">
      {notes.length > 0 ? (
        <>
          {notes.map(({ id, content }) => (
            <Note key={id} id={id} content={content} />
          ))}
        </>
      ) : (
        <NoNotes />
      )}
    </div>
  );
}

export default NotesContainer;
