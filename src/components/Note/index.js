import React, { useEffect, useRef, useState } from "react";
import Button from "../../molecules/Button";
import { useDispatch } from "react-redux";
import { deleteNote, updateNote } from "../../features/notes/noteSlice";
import clipText from "../../helper/clipText";
function Note({ content, id }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [newContent, setNewContent] = useState(content);
  const inputRef = useRef();
  const handleDelete = () => {
    dispatch(deleteNote(id));
  };
  const handleUpdate = () => {
    dispatch(updateNote({ id, newContent }));
    setEditMode(!editMode);
  };
  useEffect(() => {
    if (editMode === true) {
      inputRef.current.focus();
    }
  }, [editMode]);
  return (
    <div className="my-4 bg-white rounded-md p-4 flex drop-shadow-md dark:bg-neutral-600">
      {editMode ? (
        <>
          <input
            ref={inputRef}
            className="flex-1 focus:outline-none bg-slate-200 dark:bg-neutral-500 dark:text-white rounded p-1"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <Button updateNote handleClick={() => handleUpdate()} />
          <Button deleteNote handleClick={() => handleDelete()} />
        </>
      ) : (
        <>
          <p className="flex-1 p-1 dark:text-white">{clipText(content)}</p>
          <Button editNote handleClick={() => setEditMode(!editMode)} />
          <Button deleteNote handleClick={() => handleDelete()} />
        </>
      )}
    </div>
  );
}

export default Note;
