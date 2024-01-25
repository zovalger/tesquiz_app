"use client";

import React from "react";
import { useTheme } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import { v4 as uuid } from "uuid";

import AppBarModule from "@/components/AppBarModule";
import SectionItem from "@/components/SectionItem";
import { useAppSelector } from "@/redux/store";
import PageTemplate from "@/components/PageTemplate";

const Page = () => {
	const sections = useAppSelector((state) => state.sections);
	const theme = useTheme();

	const transitionDuration = {
		enter: theme.transitions.duration.enteringScreen,
		exit: theme.transitions.duration.leavingScreen,
	};

	return (
		<>
			<PageTemplate nameNavBar="Secciones">
				{sections.map((s) => (
					<SectionItem key={uuid()} data={s} />
				))}

				<Box sx={{ position: "fixed", right: 10, bottom: 10 }}>
					<Zoom
						// key={"1"}
						in={true}
						timeout={transitionDuration}
						unmountOnExit
					>
						<Fab color="primary">
							<AddIcon />
						</Fab>
					</Zoom>
				</Box>
			</PageTemplate>
		</>
	);
};

export default Page;
