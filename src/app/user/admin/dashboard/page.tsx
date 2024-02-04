"use client";

import { v4 as uuid } from "uuid";
import TextEditorInput from "@/components/TextEditorInput";
import { Button, Container, Typography } from "@mui/material";
import { useAppSelector } from "@/redux/store";
import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";

import { Droppable } from "./Droppable";
import { Draggable } from "./Draggable";
import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";

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
		

			<h1>admin</h1>

	

			<Link href={RouterLinks.admin.sections}>
				<Button>secciones de clase (admin)</Button>
			</Link>
			{textBoxEditor.map((t, i) => (
				<TextEditorInput key={uuid()} index={i} data={t} />
			))}
		</>
	);
}
