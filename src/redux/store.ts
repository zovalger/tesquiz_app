import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import classEditorReducer from "./Slices/ClassEditorSlice";
import userReducer from "./Slices/UserSlice";
import UIReducer from "./Slices/UISlice";
import sectionsReducer from "./Slices/SectionsSlice";
import classOfSectionReducer from "./Slices/ClassForSectionSlice";

export const store = configureStore({
	reducer: {
		classEditor: classEditorReducer,
		user: userReducer,
		UI_Settings: UIReducer,
		sections: sectionsReducer,
		classForSection: classOfSectionReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
