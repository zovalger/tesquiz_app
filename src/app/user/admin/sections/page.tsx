"use client";

import React, { useEffect, useState } from "react";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import { v4 as uuid } from "uuid";

import AppBarModule from "@/components/AppBarModule";
import SectionItem from "@/components/SectionItem";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import PageTemplate from "@/components/PageTemplate";
import TitleModalFormSection from "@/components/TitleModalFormSection";
import useGetSections from "@/hooks/useGetSections";
import { Skeleton } from "@mui/material";
import { setSetionsList } from "@/redux/Slices/SectionsSlice";
import RouterLinks from "@/config/RouterLinks";
import ButtonAddLeftBotton from "@/components/ButtonAddLeftBotton";

const Page = () => {
	const dispatch = useAppDispatch();

	const sections = useAppSelector((state) => state.sections);

	const [error, loanding, data] = useGetSections();

	const [openTitleModal, setOpenTitleModal] = useState(false);

	const changeOpenTitleModal = (a: boolean) => {
		setOpenTitleModal(a);
	};

	useEffect(() => {
		if (data.length) dispatch(setSetionsList(data));
	}, [data]);

	return (
		<>
			<>
				<PageTemplate
					ToBackPage={RouterLinks.admin.dashboard}
					nameNavBar={
						loanding ? (
							<Skeleton
								variant="text"
								sx={{ fontSize: "2rem" }}
								width={"300px"}
							/>
						) : (
							"Secciones"
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

					<ButtonAddLeftBotton onClick={() => changeOpenTitleModal(true)} />

					{openTitleModal && (
						<TitleModalFormSection
							onClose={() => changeOpenTitleModal(false)}
						/>
					)}
				</PageTemplate>
			</>
		</>
	);
};

export default Page;
