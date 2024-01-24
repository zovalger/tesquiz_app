import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import textBoxEditorReducer from "./Slices/TextEditorSlice";
import userReducer from "./Slices/UserSlice";
import UIReducer from "./Slices/UISlice";

export const store = configureStore({
	reducer: {
		textBoxEditor: textBoxEditorReducer,
		user: userReducer,
		UI_Settings: UIReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
