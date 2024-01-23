import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Typography } from "@mui/material";
import Link from "next/link";
import LogoTesQuiz from "@/components/LogoTesQuiz";
import colors from "@/config/colors";

const page = () => {
	return (
		<>
			<Box
				sx={{
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
					height: "96vh",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						// width: "90vw",
						p: 2,
					}}
				>
					<Box sx={{ pb: 10 }}>
						<Box>
							<LogoTesQuiz width={250} />
						</Box>

						<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
							<Typography sx={{ color: colors.primary, fontWeight: 600 }}>
								.Admin
							</Typography>
						</Box>
					</Box>

					<form>
						<TextField
							label="Correo"
							variant="outlined"
							name="email"
							type="email"
							fullWidth
							sx={{
								mb: 5,
							}}
						/>

						<TextField
							label="Contraseña"
							variant="outlined"
							name="password"
							type="password"
							fullWidth
						/>

						<Button
							variant="contained"
							fullWidth
							sx={{
								mt: 6,
								p: 1.5,
							}}
						>
							Iniciar sesión
						</Button>
					</form>

					<Box
						sx={{
							mt: 2,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Typography variant="body2">
							<Link href={"/login"}>Estudiante</Link>
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default page;
