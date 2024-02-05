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
import useGetClassOfSection from "@/hooks/useGetClassOfSection";
import { Skeleton } from "@mui/material";
import ClassItem from "@/components/ClassItem";
import { useRouter } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import TitleModalFormClasses from "@/components/TitleModalFormClasses";
import ButtonAddLeftBotton from "@/components/ButtonAddLeftBotton";
import { setClassesOfSection } from "@/redux/Slices/ClassForSectionSlice";

const Page = () => {
	const router = useRouter();

	const dispatch = useAppDispatch();
	const classForSection = useAppSelector((state) => state.classForSection);
	const sections = useAppSelector((state) => state.sections);

	const [error, loanding, data] = useGetClassOfSection();

	const [openTitleModal, setOpenTitleModal] = useState(false);
	const changeOpenTitleModal = (a: boolean) => {
		setOpenTitleModal(a);
	};

	const [sectiontitle, setSectiontitle] = useState("");

	useEffect(() => {
		if (!classForSection.section_id) router.replace(RouterLinks.admin.sections);

		const a = sections.find((v) => v._id === classForSection.section_id);

		if (a) setSectiontitle(a.title);
	}, [classForSection.section_id]);

	useEffect(() => {
		if (data.length) dispatch(setClassesOfSection(data));
	}, [data]);

	return (
		<>
			<PageTemplate
				ToBackPage={RouterLinks.admin.sections}
				nameNavBar={
					loanding ? (
						<Skeleton
							variant="text"
							sx={{ fontSize: "2rem" }}
							width={"300px"}
						/>
					) : (
						sectiontitle
					)
				}
			>
				{loanding ? (
					<Skeleton variant="rounded" height={60} />
				) : error ? (
					"Error al optener datos"
				) : (
					classForSection.classes.map((s) => (
						<ClassItem key={uuid()} data={s} />
					))
				)}

				<ButtonAddLeftBotton onClick={() => changeOpenTitleModal(true)} />

				{openTitleModal && (
					<TitleModalFormClasses onClose={() => changeOpenTitleModal(false)} />
				)}
			</PageTemplate>
		</>
	);
};

export default Page;
