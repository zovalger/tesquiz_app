import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ClassOfSection, TextBox } from "../../../types";
import TextBoxData from "@/test/testData";
import { downItemInArray, upItemInArray } from "@/utils";
import { TypeText } from "../../../enums";

// export interface TextEditorState

export const initialTextBox: TextBox = {
	type: TypeText.p,
	text: "",
};

const initialState: ClassOfSection = {
	_id: "",
	title: "",
	order: 0,
	content: [],
	created: "",
	section_id: "",
};

export const classEditorSlice = createSlice({
	name: "classEditor",
	initialState,
	reducers: {
		setClassData: (state, action: PayloadAction<ClassOfSection>) => {
			return action.payload;
		},
		// insertTextBoxEditor: (state, action: PayloadAction<number>) => {
		// 	const l = action.payload + 1;

		// 	const before = state.slice(0, l);

		// 	const after = state.slice(l);
		// 	return [...before, initialTextBox, ...after];
		// },
		// upTextBox: (state, action: PayloadAction<number>) => {
		// 	return upItemInArray(state, action.payload);
		// },
		// downTextBox: (state, action: PayloadAction<number>) => {
		// 	return downItemInArray(state, action.payload);
		// },
		// chageTextInBox: (
		// 	state,
		// 	action: PayloadAction<{ index: number; text: string }>
		// ) => {
		// 	const { index, text } = action.payload;

		// 	state[index] = { ...state[index], text: text.trim() };
		// 	return state;
		// },
	},
});

// Action creators are generated for each case reducer function
export const {
	setClassData,
	// insertTextBoxEditor,
	// upTextBox,
	// downTextBox,
	// chageTextInBox,
} = classEditorSlice.actions;

export default classEditorSlice.reducer;
