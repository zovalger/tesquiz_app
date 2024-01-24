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
import useGetClassOfSection from "@/hooks/useGetClassOfSection";
import { Skeleton } from "@mui/material";
import ClassItem from "@/components/ClassItem";

const Page = () => {
	const [loanding, data] = useGetClassOfSection();
	const theme = useTheme();

	const transitionDuration = {
		enter: theme.transitions.duration.enteringScreen,
		exit: theme.transitions.duration.leavingScreen,
	};

	return (
		<>
			<PageTemplate
				nameNavBar={
					loanding ? (
						<Skeleton
							variant="text"
							sx={{ fontSize: "2rem" }}
							width={"300px"}
						/>
					) : (
						"clases de algo"
					)
				}
			>
				{loanding ? (
					<Skeleton variant="rounded" height={60} />
				) : data !== null ? (
					data.map((s) => <ClassItem key={uuid()} data={s} />)
				) : (
					"error"
				)}

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
