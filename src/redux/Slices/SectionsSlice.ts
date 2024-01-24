import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SectionOfClass } from "../../../types";

const initialState: SectionOfClass[] = [
	{ _id: "s", title: "caracteres", order: 2 },
	{ _id: "2", title: "caracteres", order: 2 },
	{ _id: "2", title: "caracteres", order: 2 },
	{ _id: "2", title: "caracteres", order: 2 },
	{ _id: "2", title: "caracteres", order: 2 },
	{ _id: "2", title: "caracteres", order: 2 },
	{ _id: "2", title: "caracteres", order: 2 },
	{ _id: "2", title: "caracteres", order: 2 },
	{ _id: "2", title: "caracteres", order: 2 },
	{ _id: "2", title: "caracteres", order: 2 },
	{ _id: "2", title: "caracteres", order: 2 },
	{ _id: "2", title: "caracteres", order: 2 },
	{ _id: "2", title: "caracteres", order: 2 },
	{ _id: "2", title: "caracteres", order: 2 },
	{ _id: "2", title: "caracteres", order: 2 },
	{ _id: "2", title: "caracteres", order: 2 },
	{ _id: "2", title: "caracteres", order: 2 },
	{ _id: "2", title: "caracteres", order: 2 },
];

export const sectionsSlice = createSlice({
	name: "sections",
	initialState,
	reducers: {
		setSetionsList: (_state, action: PayloadAction<SectionOfClass[]>) => {
			return action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setSetionsList } = sectionsSlice.actions;

export default sectionsSlice.reducer;
