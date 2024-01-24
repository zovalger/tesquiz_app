import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { useAppSelector } from "@/redux/store";

// import { asideMultiToolsWidth, asidePanelDashboardWidth } from "@/config";
// import { useGlobalContext } from "@/contexts/Global.context";

interface AppBarModule {
	left?: React.ReactNode;
	name: string;
	right?: React.ReactNode;
}

export default function AppBarModule({ left, name, right }: AppBarModule) {
	// const { handleAsidePanelToggle, asideMultiToolsOpen } = useGlobalContext();
	const UI_Settings = useAppSelector((state) => state.UI_Settings);

	return (
		<AppBar
			position="fixed"
			sx={{
				width: {
					sm: `calc(100% - ${
						UI_Settings.asidePanelWitdh +
						(UI_Settings.rightPanelOpen ? UI_Settings.asideMultiToolsWidth : 0)
					}px)`,
				},
				ml: { sm: `${UI_Settings.asidePanelWitdh}px` },
				mr: UI_Settings.rightPanelOpen
					? { sm: `${UI_Settings.asideMultiToolsWidth}px` }
					: null,
			}}
		>
			<Toolbar>
				{left || (
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						// onClick={handleAsidePanelToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
				)}
				<Typography variant="h6" noWrap component="div">
					{name}
				</Typography>

				<Box sx={{ ml: "auto" }}> {right}</Box>
			</Toolbar>
		</AppBar>
	);
}
