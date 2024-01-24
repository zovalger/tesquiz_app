"use client";

import * as Yup from "yup";
import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import Link from "next/link";
import { FormikHelpers, useFormik } from "formik";
import { useRouter } from "next/navigation";
import axios from "axios";

import LogoTesQuiz from "@/components/LogoTesQuiz";
import RouterLinks from "@/config/RouterLinks";
import API_SERVER_Endpoints from "@/config/API_SERVER_Endpoints";
import { RegisterStudentData } from "../../../types";

const initialValues: RegisterStudentData = {
	firstName: "",
	lastName: "",
	username: "",
	email: "",
	password: "",
	repeatPassword: "",
};

const Page = () => {
	const router = useRouter();

	const onSubmit = async (
		values: RegisterStudentData,
		{ setSubmitting }: FormikHelpers<RegisterStudentData>
	) => {
		try {
			setSubmitting(true);
			const res = await axios.post(
				API_SERVER_Endpoints.student.register,
				values
			);

			router.push(RouterLinks.student.login);
		} catch (error) {
			console.log(error);
			setSubmitting(false);
		}
	};

	const formik = useFormik({
		initialValues,
		validationSchema: Yup.object({
			firstName: Yup.string()
				.trim()
				.required("E; nombre es requerido")
				.min(3, "El nombre debe ser mínimo 3 caracteres"),

			lastName: Yup.string()
				.trim()
				.required("El apellido es requerido")
				.min(3, "El apellido debe ser mínimo 3 caracteres"),

			username: Yup.string()
				.required("El nombre de usuario es requerido")
				.min(3, "El nombre de usuario  debe ser mínimo 3 caracteres "),
			// Este nombre de usuario no está disponible

			email: Yup.string()
				.required("El correo es requerido")
				.email("No es posible asignar este correo"),

			password: Yup.string()
				.min(8, "La contraseña debe ser mínimo 8 caracteres ")
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\.\,\<\>\'\"\;\:\[\{\]\}\-\=])[A-Za-z\d@$!%*?&\.\,\<\>\'\"\;\:\[\{\]\}\-\=]{8,}$/,
					"La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial"
				),
			repeatPassword: Yup.string()
				.oneOf([Yup.ref("password")], "Las contraseñas deben coincidir")
				.required("Debes confirmar la contraseña"),
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
						<LogoTesQuiz width={250} />
					</Box>

					<form
						onSubmit={(e) => {
							e.preventDefault();
							formik.submitForm();
						}}
					>
						<Grid maxWidth={"800px"} container spacing={2}>
							<Grid xs={12} md={6}>
								<TextField
									label="Nombre"
									variant="outlined"
									name="firstName"
									type="text"
									fullWidth
									value={formik.values.firstName}
									onChange={formik.handleChange}
									error={!!formik.errors.firstName}
									helperText={formik.errors.firstName}
								/>
							</Grid>
							<Grid xs={12} md={6}>
								<TextField
									label="Apellido"
									variant="outlined"
									name="lastName"
									type="text"
									fullWidth
									value={formik.values.lastName}
									onChange={formik.handleChange}
									error={!!formik.errors.lastName}
									helperText={formik.errors.lastName}
								/>
							</Grid>

							<Grid xs={12}>
								<TextField
									label="Nombre de usuario"
									variant="outlined"
									name="username"
									type="text"
									fullWidth
									value={formik.values.username}
									onChange={formik.handleChange}
									error={!!formik.errors.username}
									helperText={formik.errors.username}
								/>
							</Grid>

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

							<Grid xs={12} md={6}>
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
							<Grid xs={12} md={6}>
								<TextField
									label="Repetir contraseña"
									variant="outlined"
									name="repeatPassword"
									type="password"
									fullWidth
									value={formik.values.repeatPassword}
									onChange={formik.handleChange}
									error={!!formik.errors.repeatPassword}
									helperText={formik.errors.repeatPassword}
								/>
							</Grid>

							<Grid xs={12}>
								{/* {loginError && (
									<Alert severity="error">Correo o contraseña incorrecta</Alert>
								)} */}
								<Button
									variant="contained"
									fullWidth
									sx={{
										p: 1.5,
									}}
									type="submit"
									onClick={() => formik.submitForm()}
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

export default Page;
