"use client";

import { v4 as uuid } from "uuid";
import TextEditorInput from "@/components/TextEditorInput";
import { Container, Typography } from "@mui/material";
import { useAppSelector } from "@/redux/store";
import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";

import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";

export default function Home() {
	const textBoxEditor = useAppSelector((state) => state.textBoxEditor);

	const containers = ["A", "B", "C"];
	const [parent, setParent] = useState(null);
	const draggableMarkup = <Draggable id="draggable">Drag me</Draggable>;

	function handleDragEnd(event: any) {
		const { over } = event;

		// If the item is dropped over a container, set it as the parent
		// otherwise reset the parent to `null`
		setParent(over ? over.id : null);
	}

	return (
		<>
			<DndContext onDragEnd={handleDragEnd}>
				{parent === null ? draggableMarkup : null}

				{containers.map((id) => (
					// We updated the Droppable component so it would accept an `id`
					// prop and pass it to `useDroppable`
					<Droppable key={id} id={id}>
						{parent === id ? draggableMarkup : "Drop here"}
					</Droppable>
				))}
			</DndContext>

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
