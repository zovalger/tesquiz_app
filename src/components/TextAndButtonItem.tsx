import React from "react";
import { SectionOfClass } from "../../types";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useAppDispatch, useAppSelector } from "@/redux/store";

interface props {
	onClick?(): void;
	text: string;
	buttons: React.ReactNode;
}

const TextAndButtonItem = ({ onClick, text, buttons }: props) => {
	const UI_Settings = useAppSelector((state) => state.UI_Settings);
	const dispatch = useAppDispatch();

	// dispatch(chageTextInBox({ index, text }));

	return (
		<Box
			onClick={(e) => {
				if (!onClick) return;
				e.stopPropagation();
				onClick();
			}}
			sx={{
				display: "flex",
				borderRadius: 3,
				bgcolor: UI_Settings.colors.primary,
				p: 2,
				mb: 1,
				alignItems: "center",
			}}
		>
			<Typography color={"#fff"} sx={{ flexGrow: 1 }}>
				{text}
			</Typography>

			<Box>{buttons}</Box>
		</Box>
	);
};

export default TextAndButtonItem;
