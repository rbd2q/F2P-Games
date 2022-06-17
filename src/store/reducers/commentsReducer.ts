import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

import { getLocalStorage } from "../../utils/localStorage";

const initialState = getLocalStorage("storeComment");

const commentSlice = createSlice({
  name: "Comment Slice",
  initialState,
  reducers: {
    addComment(state, action) {
      const creationDate = dayjs().format("DD MMMM YYYY HH:mm");
      const newCommentID =
        state.length > 0 ? state[state.length - 1].id + 1 : 1;
      state.push({
        ...action.payload,
        creationDate,
        id: newCommentID,
      });
    },
    deleteComment(state, action) {
      state.splice(
        state.findIndex((comment) => comment.id === action.payload.id),
        1
      );
    },
  },
});

export default commentSlice.reducer;
export const { addComment, deleteComment } = commentSlice.actions;
