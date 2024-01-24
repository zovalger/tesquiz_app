import { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import { TextBox } from "../../types";
import TextBoxData from "@/test/testData";
import Link from "next/link";
import RouterLinks from "@/config/RouterLinks";

export default function Home() {
	return (
		<>
			<h1>landing</h1>

			<Link href={RouterLinks.student.dashboard}>
				<Button>dashboard</Button>
			</Link>
			<Link href={RouterLinks.student.login}>
				<Button>login</Button>
			</Link>

			<Link href={RouterLinks.admin.sections}>
				<Button>secciones de clase (admin)</Button>
			</Link>
		</>
	);
}
