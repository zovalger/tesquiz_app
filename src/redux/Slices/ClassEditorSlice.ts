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
interface s {
	textEditorSelected: number;
	data: ClassOfSection;
}

const initialState: s = {
	textEditorSelected: 0,
	data: {
		_id: "",
		title: "",
		order: 0,
		content: [],
		created: "",
		section_id: "",
	},
};

export const classEditorSlice = createSlice({
	name: "classEditor",
	initialState,
	reducers: {
		setClassData: (state, action: PayloadAction<ClassOfSection>) => {
			return { ...state, data: action.payload };
		},
		insertNewTextBoxEditor: (state, action: PayloadAction<number>) => {
			const { data } = state;
			const { content } = data;

			const l = action.payload + 1;

			const before = content.slice(0, l);

			const after = content.slice(l);

			const c = [...before, initialTextBox, ...after];

			return { ...state, content: c };
		},
		deleteTextBoxEditor: (state, action: PayloadAction<number>) => {
			const { data } = state;
			const { content } = data;

			const c = content.filter((v, i) => i !== action.payload);

			return { ...state, content: c };
		},
		upTextBox: (state, action: PayloadAction<number>) => {
			const { data } = state;
			const { content } = data;
			const c = upItemInArray(content, action.payload);

			return { ...state, content: c };
		},
		downTextBox: (state, action: PayloadAction<number>) => {
			const { data } = state;
			const { content } = data;

			const c = downItemInArray(content, action.payload);

			return { ...state, content: c };
		},
		chageTextInBox: (
			state,
			action: PayloadAction<{ index: number; text: string }>
		) => {
			const { index, text } = action.payload;
			const { data } = state;
			const { content } = data;

			const c = content.map((v, i) =>
				i === index ? { ...v, text: text.trim() } : v
			);

			return { ...state, content: c };
		},

		chageTypeTextBox: (
			state,
			action: PayloadAction<{ index: number; type: TypeText }>
		) => {
			const { index, type } = action.payload;
			const { content } = state;

			const c = content.map((v, i) => (i === index ? { ...v, type } : v));

			return { ...state, content: c };
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	setClassData,
	insertNewTextBoxEditor,
	upTextBox,
	downTextBox,
	chageTextInBox,
	chageTypeTextBox,
} = classEditorSlice.actions;

export default classEditorSlice.reducer;
