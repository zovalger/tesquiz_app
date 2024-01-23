"use client";

import * as Yup from "yup";
import { useFormik, FormikHelpers } from "formik";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { Alert, Typography } from "@mui/material";
import Link from "next/link";

import LogoTesQuiz from "@/components/LogoTesQuiz";
import axios from "axios";
import { SERVER_URL } from "@/config";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setUserData } from "@/redux/Slices/UserSlice";
import RouterLinks from "@/config/RouterLinks";

interface Values {
	email: string;
	password: string;
}
const Page = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const [loginError, setLoginError] = useState(false);

	const onSubmit = async (
		values: Values,
		{ setSubmitting }: FormikHelpers<Values>
	) => {
		try {
			setSubmitting(true);
			const res = await axios.post(`${SERVER_URL}/loginStudent`, values);

			dispatch(setUserData(res.data));

			router.push(RouterLinks.student.dashboard);

			setSubmitting(false);
		} catch (error) {
			console.log(error);

			setLoginError(true);

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
						<LogoTesQuiz width={250} />
					</Box>

					<form
						onSubmit={(e) => {
							e.preventDefault();
							formik.submitForm();
						}}
					>
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
								{loginError && (
									<Alert severity="error">Correo o contraseña incorrecta</Alert>
								)}
								<Button
									variant="contained"
									fullWidth
									sx={{
										p: 1.5,
									}}
									type="submit"
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
							<Link href={RouterLinks.student.register}>
								¿No tienes cuenta? Regístrate
							</Link>
						</Typography>

						<Typography variant="body2" sx={{ mt: 2 }}>
							<Link href={RouterLinks.admin.login_admin}> Admin</Link>
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default Page;
