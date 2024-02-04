"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import { v4 as uuid } from "uuid";

import AppBarModule from "@/components/AppBarModule";
import SectionItem from "@/components/SectionItem";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import PageTemplate from "@/components/PageTemplate";
import TitleModalForm from "@/components/TitleModalForm";
import useGetSections from "@/hooks/useGetSections";
import { Skeleton } from "@mui/material";
import { setSetionsList } from "@/redux/Slices/SectionsSlice";

const Page = () => {
	const dispatch = useAppDispatch();

	const sections = useAppSelector((state) => state.sections);

	const [error, loanding, data] = useGetSections();
	const theme = useTheme();

	const [openTitleModal, setOpenTitleModal] = useState(false);

	const s = (a: boolean) => {
		setOpenTitleModal(a);
	};

	const transitionDuration = {
		enter: theme.transitions.duration.enteringScreen,
		exit: theme.transitions.duration.leavingScreen,
	};

	useEffect(() => {
		if (data.length) dispatch(setSetionsList(data));
	}, [data]);

	return (
		<>
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
						sections.map((s) => <SectionItem key={uuid()} data={s} />)
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
					{openTitleModal && <TitleModalForm onClose={() => s(false)} />}
				</PageTemplate>
			</>
		</>
	);
};

export default Page;
