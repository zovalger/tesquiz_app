import React, { useState } from "react";
import { ClassOfSection } from "../../types";
import { Box, IconButton } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useAppDispatch } from "@/redux/store";
import TextAndButtonItem from "./TextAndButtonItem";
import { useRouter } from "next/navigation";
import EditIcon from "@mui/icons-material/Edit";

import RouterLinks from "@/config/RouterLinks";
import TitleModalFormClasses from "./TitleModalFormClasses";
import { setClassData } from "@/redux/Slices/ClassEditorSlice";

interface props {
	data: ClassOfSection;
}

const ClassItem = ({ data }: props) => {
	const dispatch = useAppDispatch();

	const router = useRouter();
	// dispatch(chageTextInBox({ index, text }));

	const onClick = () => {
		dispatch(setClassData(data));
		router.push(RouterLinks.admin.contentOfclass);
	};

	const [openTitleModal, setOpenTitleModal] = useState(false);

	const changeOpenTitleModal = (a: boolean) => {
		setOpenTitleModal(a);
	};

	return (
		<>
			<TextAndButtonItem
				onClick={onClick}
				text={data.title}
				buttons={
					<>
						<IconButton
							// sx={{ borderRadius: 0 }}
							sx={{ color: "#fff", mr: 2 }}
							aria-label="menu"
							onClick={(e) => {
								e.stopPropagation();
								changeOpenTitleModal(true);
							}}
						>
							<EditIcon />
						</IconButton>
						<IconButton
							// sx={{ borderRadius: 0 }}
							sx={{ color: "#fff", mr: 2 }}
							aria-label="menu"
							// onClick={() => dispatch(insertTextBoxEditor(index))}
						>
							<ArrowDropDownIcon />
						</IconButton>

						<IconButton
							sx={{ color: "#fff" }}
							// sx={{ borderRadius: 0 }}
							aria-label="menu"
							// onClick={() => dispatch(insertTextBoxEditor(index))}
						>
							<ArrowDropUpIcon />
						</IconButton>
					</>
				}
			/>
			{openTitleModal && (
				<TitleModalFormClasses
					data={data}
					onClose={() => changeOpenTitleModal(false)}
				/>
			)}
		</>
	);
};

export default ClassItem;
