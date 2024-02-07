"use client";

import { useEffect, useRef, useState } from "react";
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

import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
	chageTextInBox,
	deleteTextBoxEditor,
	downTextBox,
	insertNewTextBoxEditor,
	setTextEditorSelected,
	upTextBox,
} from "@/redux/Slices/ClassEditorSlice";

interface props {
	index: number;
	data: TextBox;
}

const TextEditor = ({ index, data }: props) => {
	const classEditor = useAppSelector((state) => state.classEditor);
	const dispatch = useAppDispatch();

	const [text, setText] = useState(data.text);

	const inp = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (classEditor.textEditorSelected === index)
			if (inp.current) {inp.current.focus();
				inp.current.selectionStart = text.length;
				inp.current.selectionEnd = text.length;
			}
	}, [classEditor.textEditorSelected]);

	const onChange = (value: string) => {
		setText(value);
	};

	const onBlur = () => {
		if (inp.current) inp.current.blur();

		if (!text) {
			dispatch(setTextEditorSelected(null));
			dispatch(setTextEditorSelected(index -1));

			return dispatch(deleteTextBoxEditor(index));
		}

		dispatch(chageTextInBox({ index, text }));
	};

	const onEnter = () => {
		onBlur();

		if (!text) return;

		dispatch(insertNewTextBoxEditor(index));
		dispatch(setTextEditorSelected(index + 1));
	};

	return (
		<>
			{/* text-indent */}
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "flex-start",
					mt: 2,
				}}
			>
				<Box sx={{ flexGrow: 1 }}>
					<InputBase
						placeholder="text here"
						id={`${index}`}
						multiline
						fullWidth
						inputProps={{ style: { height: "100%" } }}
						sx={{ height: "100%" }}
						value={text}
						inputRef={inp}
						onBlur={() => {
							onBlur();
						}}
						onChange={({ target: { value } }) => onChange(value)}
						onKeyDown={(e) => {
							if (e.key == "Enter") {
								e.preventDefault();
								onEnter();
							}
							if (e.key == "Backspace") {
								if (!text) {
									e.preventDefault();
									onBlur();
								}
							}
						}}
					/>
				</Box>

				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<MoreOptionButtonVariantText />

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
						onClick={() => dispatch(downTextBox(index))}
						disabled={index == classEditor.data.content.length - 1}
					>
						<ArrowDropDownIcon />
					</IconButton>

					<IconButton
						sx={{ borderRadius: 0 }}
						size="small"
						aria-label="menu"
						onClick={() => dispatch(insertNewTextBoxEditor(index))}
					>
						<AddIcon />
					</IconButton>
				</Box>

				{/* // ToDo: enter crear otro texbox si es el ultimo si es uno entremedio solo guardar */}
			</Box>
		</>
	);
};

export default TextEditor;
