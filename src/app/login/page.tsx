import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Image from "next/image";

import logo from "../../assets/TesQuiz_logo_20231023.png";

const page = () => {
	return (
		<>
			<Box
				sx={{
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
          width:"100%",
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
						<Image src={logo} width={250} alt="Logo TesQuiz" />
					</Box>

					<form>
						<TextField
							label="Email"
							variant="outlined"
							name="email"
							type="email"
							fullWidth
							sx={{
								mb: 5,
							}}
						/>

						<TextField
							label="password"
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
				</Box>
			</Box>
		</>
	);
};

export default page;
