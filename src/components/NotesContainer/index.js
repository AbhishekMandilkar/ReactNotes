import React from "react";
import { useSelector } from "react-redux";
import { getAllNotes } from "../../features/notes/noteSlice";
import NoNotes from "../NoNotes";
import Note from "../Note";
import { AnimatePresence } from "framer-motion";
function NotesContainer() {
  const notes = useSelector(getAllNotes);
  return (
    <div className="mt-10 ">
      {notes.length > 0 ? (
        <>
          <AnimatePresence>
            {notes.map(({ id, content }) => (
              <Note key={id} id={id} content={content} />
            ))}
          </AnimatePresence>
        </>
      ) : (
        <NoNotes />
      )}
    </div>
  );
}

export default NotesContainer;
