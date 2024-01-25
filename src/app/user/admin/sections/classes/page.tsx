"use client";

import React, { useEffect } from "react";
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
import { useRouter } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";

const Page = () => {
	const router = useRouter();

	const classForSection = useAppSelector((state) => state.classForSection);
	const [error, loanding, data] = useGetClassOfSection();
	const theme = useTheme();

	const transitionDuration = {
		enter: theme.transitions.duration.enteringScreen,
		exit: theme.transitions.duration.leavingScreen,
	};

	useEffect(() => {
		if (!classForSection.sectionId) router.replace(RouterLinks.admin.sections);
	}, []);

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
				) : error ? (
					"Error al optener datos"
				) : (
					data.map((s) => <ClassItem key={uuid()} data={s} />)
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
