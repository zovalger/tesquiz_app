"use client";

import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import PageTemplate from "@/components/PageTemplate";
import { useRouter } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import TextEditor from "@/components/TextEditor";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import { insertNewTextBoxEditor } from "@/redux/Slices/ClassEditorSlice";

const Page = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const classEditor = useAppSelector((state) => state.classEditor);

	const saveClassData = () => {};

	useEffect(() => {
		if (!classEditor.data._id) router.replace(RouterLinks.admin.sections);
	}, []);

	return (
		<>
			<PageTemplate
				ToBackPage={RouterLinks.admin.classOfSection}
				nameNavBar={classEditor.data.title}
				rightIcons={
					<>
						<IconButton
							sx={{ borderRadius: 0 }}
							size="small"
							aria-label="menu"
							onClick={() => saveClassData()}
						>
							<SaveIcon />
						</IconButton>

						<IconButton
							sx={{ borderRadius: 0 }}
							size="small"
							aria-label="menu"
							onClick={() => dispatch(insertNewTextBoxEditor())}
						>
							<AddIcon />
						</IconButton>
					</>
				}
			>
				{classEditor.data.content.map((s, i) => (
					<TextEditor key={uuid()} data={s} index={i} />
				))}

				{/* <ButtonAddLeftBotton onClick={() => changeOpenTitleModal(true)} /> */}
			</PageTemplate>
		</>
	);
};

export default Page;
