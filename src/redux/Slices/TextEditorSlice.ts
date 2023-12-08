import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TextBox } from "../../../types";
import TextBoxData from "@/test/testData";
import { RootState } from "../store";
import { downItemInArray, upItemInArray } from "@/utils";

// export interface TextEditorState

export const initialTextBox: TextBox = {
	type: "p",
	text: "",
};

const initialState: TextBox[] = TextBoxData;

export const textBoxEditorSlice = createSlice({
	name: "textBoxEditor",
	initialState,
	reducers: {
		setClassData: (state, action: PayloadAction<TextBox[]>) => {
			state = action.payload;
		},
		insertTextBoxEditor: (state, action: PayloadAction<number>) => {
			const l = action.payload + 1;

			const before = state.slice(0, l);

			const after = state.slice(l);

			state = [...before, initialTextBox, ...after];
		},
		upTextBox: (state, action: PayloadAction<number>) => {
			state = upItemInArray(state, action.payload);
		},
		downTextBox: (state, action: PayloadAction<number>) => {
			state = downItemInArray(state, action.payload);
		},
	},
});

// Action creators are generated for each case reducer function
export const { setClassData, insertTextBoxEditor, upTextBox, downTextBox } =
	textBoxEditorSlice.actions;

export default textBoxEditorSlice.reducer;
