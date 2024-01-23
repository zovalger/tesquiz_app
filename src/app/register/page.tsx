import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import Link from "next/link";

import LogoTesQuiz from "@/components/LogoTesQuiz";
import RouterLinks from "@/config/RouterLinks";

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
						<LogoTesQuiz width={250} />
					</Box>

					<form>
						<Grid maxWidth={"800px"} container spacing={2}>
							<Grid xs={12} md={6}>
								<TextField
									label="Nombre"
									variant="outlined"
									name="firstName"
									type="text"
									fullWidth
									error={false}
									helperText="Incorrect entry."
								/>
							</Grid>
							<Grid xs={12} md={6}>
								<TextField
									label="Apellido"
									variant="outlined"
									name="lastName"
									type="text"
									fullWidth
									error={false}
									helperText="Incorrect entry."
								/>
							</Grid>

							<Grid xs={12}>
								<TextField
									label="Nombre de usuario"
									variant="outlined"
									name="username"
									type="text"
									fullWidth
									error={false}
									helperText="Incorrect entry."
								/>
							</Grid>

							<Grid xs={12}>
								<TextField
									label="Correo"
									variant="outlined"
									name="email"
									type="email"
									fullWidth
									// error
									helperText="Incorrect entry."
								/>
							</Grid>

							<Grid xs={12} md={6}>
								<TextField
									label="Contraseña"
									variant="outlined"
									name="password"
									type="password"
									fullWidth
								/>
							</Grid>
							<Grid xs={12} md={6}>
								<TextField
									label="Repetir contraseña"
									variant="outlined"
									name="repeatPassword"
									type="password"
									fullWidth
								/>
							</Grid>

							<Grid xs={12}>
								<Button
									variant="contained"
									fullWidth
									sx={{
										p: 1.5,
									}}
								>
									Registrarse
								</Button>
							</Grid>
						</Grid>
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
							<Link href={RouterLinks.student.login}>
								¿Ya tienes cuenta? Inicia sesión
							</Link>
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default page;
