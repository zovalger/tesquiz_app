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
	textEditorSelected: number | null;
	data: ClassOfSection;
}

const initialState: s = {
	textEditorSelected: null,
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
		insertNewTextBoxEditor: (
			state,
			action: PayloadAction<number | undefined>
		) => {
			const { data } = state;
			const { content } = data;

			if (!action.payload)
				return {
					...state,
					data: { ...data, content: [...content, initialTextBox] },
				};

			const l = action.payload + 1;

			const before = content.slice(0, l);

			const after = content.slice(l);

			const c = [...before, initialTextBox, ...after];

			return { ...state, data: { ...data, content: c } };
		},
		deleteTextBoxEditor: (state, action: PayloadAction<number>) => {
			const { data } = state;
			const { content } = data;

			const c = content.filter((v, i) => i !== action.payload);

			return { ...state, data: { ...data, content: c } };
		},
		upTextBox: (state, action: PayloadAction<number>) => {
			const { data } = state;
			const { content } = data;
			const c = upItemInArray(content, action.payload);

			return { ...state, data: { ...data, content: c } };
		},
		downTextBox: (state, action: PayloadAction<number>) => {
			const { data } = state;
			const { content } = data;

			const c = downItemInArray(content, action.payload);

			return { ...state, data: { ...data, content: c } };
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

			return { ...state, data: { ...data, content: c } };
		},

		chageTypeTextBox: (
			state,
			action: PayloadAction<{ index: number; type: TypeText }>
		) => {
			const { index, type } = action.payload;
			const { data } = state;
			const { content } = data;

			const c = content.map((v, i) => (i === index ? { ...v, type } : v));

			return { ...state, data: { ...data, content: c } };
		},
		setTextEditorSelected: (state, action: PayloadAction<number | null>) => {
			const {
				data: { content },
			} = state;
			const index = action.payload;

			if (index === null) return { ...state, textEditorSelected: index };

			const a =
				index < 0 && !content.length
					? null
					: content.length && index > content.length - 1
					? content.length - 1
					: index;

			return { ...state, textEditorSelected: index };
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	setClassData,
	insertNewTextBoxEditor,
	deleteTextBoxEditor,
	setTextEditorSelected,
	upTextBox,
	downTextBox,
	chageTextInBox,
	chageTypeTextBox,
} = classEditorSlice.actions;

export default classEditorSlice.reducer;
