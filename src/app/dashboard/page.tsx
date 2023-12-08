"use client";

import { v4 as uuid } from "uuid";
import TextEditorInput from "@/components/TextEditorInput";
import { Container, Typography } from "@mui/material";
import { useAppSelector } from "@/redux/store";

export default function Home() {
	const textBoxEditor = useAppSelector((state) => state.textBoxEditor);

	return (
		<>
			<Container sx={{ textAlign: "center", bgcolor: "#090c22ff" }}>
				<Typography variant="h1" component="span" sx={{ color: "#fff" }}>
					TES
				</Typography>
				<Typography variant={"h1"} component="span" sx={{ color: "#1d61b0ff" }}>
					QUIZ
				</Typography>
			</Container>

			{textBoxEditor.map((t, i) => (
				<TextEditorInput key={uuid()} index={i} data={t} />
			))}
		</>
	);
}
