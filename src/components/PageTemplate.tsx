"use client";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { useAppSelector } from "@/redux/store";

import AppBarModule from "./AppBarModule";

interface props {
	leftIcons?: React.ReactNode;
	nameNavBar: React.ReactNode;
	rightIcons?: React.ReactNode;
	children?: React.ReactNode;
}

export default function PageTemplate({
	leftIcons,
	nameNavBar,
	rightIcons,
	children,
}: props) {
	const UI_Settings = useAppSelector((state) => state.UI_Settings);

	return (
		<>
			<AppBarModule left={leftIcons} name={nameNavBar} right={rightIcons} />

			<Box
				sx={{
					ml: { xs: 0, sm: `${UI_Settings.asidePanelWitdh}px` },
					// mr: { xs: 0, sm: taskEditing ? `${TaskPanelWidth}px` : "" },
					px: 2,
					pt: 10,
					pb: 10,
					// position: "relative",
					flexGrow: 1,
					// maxHeight: "99vh",

					overflowY: "auto",
				}}
			>
				{children}
			</Box>
		</>
	);
}
