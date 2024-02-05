import { Box, Fab, Zoom } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";

import React from "react";

interface props {
	onClick(): void;
}

const ButtonAddLeftBotton = ({ onClick }: props) => {
	const theme = useTheme();

	const transitionDuration = {
		enter: theme.transitions.duration.enteringScreen,
		exit: theme.transitions.duration.leavingScreen,
	};

	return (
		<Box sx={{ position: "fixed", right: 10, bottom: 10 }}>
			<Zoom
				// key={"1"}
				in={true}
				timeout={transitionDuration}
				unmountOnExit
			>
				<Fab
					color="primary"
					onClick={(e) => {
						e.preventDefault();
						onClick();
					}}
				>
					<AddIcon />
				</Fab>
			</Zoom>
		</Box>
	);
};

export default ButtonAddLeftBotton;
