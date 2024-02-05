import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ClassOfSection } from "../../../types";

interface IClassesForSection {
	section_id: string;
	classes: ClassOfSection[];
}
const initialState: IClassesForSection = {
	section_id: "",
	classes: [],
};

export const classForSectionSlice = createSlice({
	name: "classForSection",
	initialState,
	reducers: {
		setSectionId: (state, action: PayloadAction<string>) => {
			return { ...state, section_id: action.payload };
		},

		setClassesOfSection: (state, action: PayloadAction<ClassOfSection[]>) => {
			return { ...state, classes: action.payload };
		},

		addClasssToList: (state, action: PayloadAction<ClassOfSection>) => {
			return { ...state, classes: [...state.classes, action.payload] };
		},
		updateClassInList: (state, action: PayloadAction<ClassOfSection>) => {
			const classes = state.classes.map((v) => {
				return v._id === action.payload._id ? action.payload : v;
			});

			return { ...state, classes };
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	setSectionId,
	setClassesOfSection,
	addClasssToList,
	updateClassInList,
} = classForSectionSlice.actions;

export default classForSectionSlice.reducer;
