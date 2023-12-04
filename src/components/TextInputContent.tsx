"use client";

import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";
import MoreOptionButtonVariantText from "./MoreOptionButtonVariantText";
import AddIcon from "@mui/icons-material/Add";

const TextInputContent = () => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-end",
					mt:2
				}}
			>
				<InputBase
				
					placeholder="Search Google Maps"
					multiline
					inputProps={{ "aria-label": "search google maps" }}
					fullWidth
				/>
				<Paper
					sx={{
						p: "2px 4px",
						display: "inline-flex",
					}}
				>
					<IconButton sx={{ borderRadius: 0 }} size="small" aria-label="menu">
						<AddIcon />
					</IconButton>

					<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

					<IconButton sx={{ borderRadius: 0 }} size="small" aria-label="menu">
						<ArrowDropUpIcon />
					</IconButton>

					<IconButton
						sx={{ borderRadius: 0 }}
						size="small"
						type="button"
						aria-label="search"
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

export default TextInputContent;
