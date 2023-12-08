"use client";

import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";

import { TextBox } from "../../types";
import MoreOptionButtonVariantText from "./MoreOptionButtonVariantText";
import { insertTextBoxEditor, upTextBox } from "@/redux/Slices/TextEditorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

interface props {
	index: number;
	data: TextBox;
}

const TextEditorInput = ({ index, data }: props) => {
	const textBoxEditor = useAppSelector((state) => state.textBoxEditor);
	const dispatch = useAppDispatch();

	console.log(data);
	
	return (
		<>
			{/* text-indent */}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-end",
					mt: 2,
				}}
			>
				<InputBase
					placeholder="text here"
					multiline
					inputProps={{ "aria-label": "search google maps" }}
					fullWidth
					value={data.text}
				/>
				<Paper
					sx={{
						p: "2px 4px",
						display: "inline-flex",
					}}
				>
					<IconButton
						sx={{ borderRadius: 0 }}
						size="small"
						aria-label="menu"
						onClick={() => dispatch(insertTextBoxEditor(index))}
					>
						<AddIcon />
					</IconButton>

					<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

					<IconButton
						sx={{ borderRadius: 0 }}
						size="small"
						aria-label="menu"
						onClick={() => dispatch(upTextBox(index))}
						disabled={index == 0}
					>
						<ArrowDropUpIcon />
					</IconButton>

					<IconButton
						sx={{ borderRadius: 0 }}
						size="small"
						type="button"
						aria-label="search"
						onClick={() => dispatch(upTextBox(index))}
						disabled={index == textBoxEditor.length - 1}
					>
						<ArrowDropDownIcon />
					</IconButton>

					<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

					<MoreOptionButtonVariantText />
				</Paper>
			</Box>
		</>
	);
};

export default TextEditorInput;
