import { useState } from "react";
import { Container, Typography } from "@mui/material";
import { TextBox } from "../../types";
import TextBoxData from "@/test/testData";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<h1>landing</h1>
			<Link href={"/dashboard"}>dashboard</Link>
		</>
	);
}
