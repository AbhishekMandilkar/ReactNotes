import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      console.log("action.payload", action.payload);
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    updateNote: (state, action) => {
      console.log("action.payload", action.payload);
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          note.content = action.payload.newContent;
        }
        return note;
      });
    },
  },
});
export const { addNote, deleteNote, updateNote } = noteSlice.actions;
export const getAllNotes = (state) => state.notes.notes;
export default noteSlice.reducer;
