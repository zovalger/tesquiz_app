import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable({ id, children }: { id: string; children: any }) {
	const { isOver, setNodeRef } = useDroppable({
		id: id,
	});
	const style = {
		color: isOver ? "green" : undefined,
	};

	return (
		<div ref={setNodeRef} style={style}>
			{children}
		</div>
	);
}
