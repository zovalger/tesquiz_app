import React from "react";
import { SectionOfClass } from "../../types";
import { Box, IconButton } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useAppDispatch } from "@/redux/store";
import TextAndButtonItem from "./TextAndButtonItem";
import { useRouter } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import { setSectionId } from "@/redux/Slices/ClassForSectionSlice";

interface props {
	data: SectionOfClass;
}

const SectionItem = ({ data }: props) => {
	const dispatch = useAppDispatch();

	const router = useRouter();
	// dispatch(chageTextInBox({ index, text }));

	const onClick = () => {
		dispatch(setSectionId(data._id));
		router.push(RouterLinks.admin.classOfSection);
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
		</>
	);
};

export default SectionItem;
