import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SectionOfClass } from "../../../types";

const initialState: SectionOfClass[] = [];

export const sectionsSlice = createSlice({
	name: "sections",
	initialState,
	reducers: {
		setSetionsList: (_state, action: PayloadAction<SectionOfClass[]>) => {
			return action.payload;
		},
		addSetionsToList: (state, action: PayloadAction<SectionOfClass>) => {
			return [...state, action.payload];
		},
		updateSetionInList: (state, action: PayloadAction<SectionOfClass>) => {
			return state.map((v) => {
				return v._id === action.payload._id ? action.payload : v;
			});
		},
	},
});

// Action creators are generated for each case reducer function
export const { setSetionsList, addSetionsToList, updateSetionInList } =
	sectionsSlice.actions;

export default sectionsSlice.reducer;
