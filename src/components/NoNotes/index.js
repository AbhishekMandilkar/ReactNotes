import React from "react";
import no_notes from "../../assets/no_notes.png";
function NoNotes() {
  return (
    <div className="flex flex-col justify-center items-center text-center dark:text-neutral-400">
      <h1>Start Adding notes from above</h1>
      <img src={no_notes} alt="no notes" className="w-64" />
    </div>
  );
}

export default NoNotes;
