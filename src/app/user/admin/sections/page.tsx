"use client";

import React from "react";
import { useTheme } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";

import AppBarModule from "@/components/AppBarModule";

const Page = () => {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const transitionDuration = {
		enter: theme.transitions.duration.enteringScreen,
		exit: theme.transitions.duration.leavingScreen,
	};

	return (
		<>
			<AppBarModule name="Secciones" />

			<Box sx={{ position: "absolute", right: 10, bottom: 10 }}>
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
		</>
	);
};

export default Page;
