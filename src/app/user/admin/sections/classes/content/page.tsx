"use client";

import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import PageTemplate from "@/components/PageTemplate";
import { useRouter } from "next/navigation";
import RouterLinks from "@/config/RouterLinks";
import TextEditor from "@/components/TextEditor";

const Page = () => {
	const router = useRouter();
	const classEditor = useAppSelector((state) => state.classEditor);

	useEffect(() => {
		if (!classEditor._id) router.replace(RouterLinks.admin.sections);
	}, []);

	return (
		<>
			<PageTemplate
				ToBackPage={RouterLinks.admin.classOfSection}
				nameNavBar={classEditor.title}
			>
				{classEditor.content.map((s, i) => (
					<TextEditor key={uuid()} data={s} index={i} />
				))}

				{/* <ButtonAddLeftBotton onClick={() => changeOpenTitleModal(true)} /> */}
			</PageTemplate>
		</>
	);
};

export default Page;
