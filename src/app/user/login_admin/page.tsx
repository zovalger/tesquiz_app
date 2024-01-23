"use client";

import * as Yup from "yup";
import { useFormik, FormikHelpers } from "formik";
import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import Link from "next/link";

import LogoTesQuiz from "@/components/LogoTesQuiz";
import axios from "axios";
import { SERVER_URL } from "@/config";

import colors from "@/config/colors";
import RouterLinks from "@/config/RouterLinks";

interface Values {
	email: string;
	password: string;
}
const Page = () => {
	const onSubmit = async (
		values: Values,
		{ setSubmitting }: FormikHelpers<Values>
	) => {
		try {
			setSubmitting(true);
			const res = await axios.post(`${SERVER_URL}/loginAdmin`, values);

			console.log(res.data);

			setSubmitting(false);
		} catch (error) {
			console.log(error);
			setSubmitting(false);

		}
	};

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().email("No es un correo valido"),
			password: Yup.string(),
		}),
		onSubmit,
	});

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
						<Grid maxWidth={"800px"} container spacing={5}>
							<Grid xs={12}>
								<TextField
									label="Correo"
									variant="outlined"
									name="email"
									type="email"
									fullWidth
									value={formik.values.email}
									onChange={formik.handleChange}
									error={!!formik.errors.email}
									helperText={formik.errors.email}
								/>
							</Grid>

							<Grid xs={12}>
								<TextField
									label="Contraseña"
									variant="outlined"
									name="password"
									type="password"
									fullWidth
									value={formik.values.password}
									onChange={formik.handleChange}
									error={!!formik.errors.password}
									helperText={formik.errors.password}
								/>
							</Grid>

							<Grid xs={12}>
								<Button
									variant="contained"
									fullWidth
									sx={{
										p: 1.5,
									}}
									onClick={() => formik.submitForm()}
								>
									Iniciar sesión
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
							<Link href={RouterLinks.student.login}>Estudiante</Link>
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Page;
