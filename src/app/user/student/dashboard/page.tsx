"use client";

import { Typography } from "@mui/material";
import { useAppSelector } from "@/redux/store";

export default function Home() {
	const user = useAppSelector((state) => state.user.data);

	return (
		<>
			<Typography variant="h1">Estudiante</Typography>
			<Typography>{user.firstName}</Typography>
			<Typography>{user.lastName}</Typography>
		</>
	);
}
