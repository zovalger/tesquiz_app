import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AdminUserData, StudentUserData, TextBox } from "../../../types";
import TextBoxData from "@/test/testData";
import { RootState } from "../store";
import { downItemInArray, upItemInArray } from "@/utils";
import { Roles } from "../../../enums";

const nullUser: AdminUserData | StudentUserData = {
	_id: "",
	firstName: "",
	lastName: "",
	username: "",
	email: "",
	password: "",
	role: Roles.null,
	token: "",
};

const initialState: AdminUserData | StudentUserData = nullUser;

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserData: (
			_state,
			action: PayloadAction<AdminUserData | StudentUserData>
		) => {
			return action.payload;
		},
		closeSesion: () => nullUser,
	},
});

// Action creators are generated for each case reducer function
export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
