import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ClassOfSection } from "../../../types";

interface IClassesForSection {
	sectionId: string;
	classes: ClassOfSection[];
}
const initialState: IClassesForSection = {
	sectionId: "sdasdsa",

	classes: [
		{
			_id: "3",
			title: "literatura",
			order: 3,
			content: [],
			created: "dasda",
		},
	],
};

export const classForSectionSlice = createSlice({
	name: "classForSection",
	initialState,
	reducers: {
		setSectionId: (state, action: PayloadAction<string>) => {
			return { ...state, sectionId: action.payload };
		},

		setClassesOfSection: (state, action: PayloadAction<ClassOfSection[]>) => {
			return { ...state, classes: action.payload };
		},
	},
});

// Action creators are generated for each case reducer function
export const { setSectionId, setClassesOfSection } =
	classForSectionSlice.actions;

export default classForSectionSlice.reducer;
