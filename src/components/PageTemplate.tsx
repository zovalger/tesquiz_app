"use client";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { useAppSelector } from "@/redux/store";

import AppBarModule from "./AppBarModule";

interface props {
	nameNavBar: string;
	rightIcons?: React.ReactNode;
	children: React.ReactNode;
}

export default function PageTemplate({
	nameNavBar,
	rightIcons,
	children,
}: props) {
	const UI_Settings = useAppSelector((state) => state.UI_Settings);

	return (
		<>
			<AppBarModule name={nameNavBar} right={rightIcons} />

			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: {
						sm: `calc(100% - ${UI_Settings.asidePanelWitdh}px)`,
					},
					mr: {
						sm: UI_Settings.rightPanelOpen
							? `${UI_Settings.asideMultiToolsWidth}px`
							: 0,
					},
					height: "100vh",
					overflow: "hidden",
					overflowY: "scroll",
				}}
			>
				<Toolbar />
				{children}
			</Box>
		</>
	);
}
