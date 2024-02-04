"use client";

import * as Yup from "yup";
import { FormikHelpers, useFormik } from "formik";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { SectionOfClass } from "../../types";
import axios from "axios";
import { SERVER_URL } from "@/config";
import Button from "@mui/material/Button";

// *****************************************************************************
// 											form de referencias
// *****************************************************************************

interface creationSection extends Omit<SectionOfClass, "_id" | "order"> {}

interface Props {
	data?: creationSection;
	onClose(): void;

	// onSubmit(formData: ProductReference): void;
	// onDelete(formData: ProductReference): void;
}

export default function TitleModalForm({ data, onClose }: Props) {
	const formik = useFormik<creationSection>({
		initialValues: data || { title: "" },

		validationSchema: Yup.object({
			title: Yup.string().trim().required().min(3),
		}),

		onSubmit: async (
			formData,
			{ setSubmitting }: FormikHelpers<creationSection>
		) => {
			try {
				setSubmitting(true);
				const res = await axios.post(`${SERVER_URL}/sections`, formData);

				// dispatch(setUserData(res.data));

				// router.push(RouterLinks.student.dashboard);

				setSubmitting(false);
			} catch (error) {
				console.log(error);

				// setLoginError(true);

				setSubmitting(false);
			}

			onClose();
		},
	});

	return (
		<>
			{/* <Button onClick={handleOpen}>Nueva referencia</Button> */}
			<Modal
				open
				onClose={onClose}
				aria-labelledby="child-modal-title"
				aria-describedby="child-modal-description"
			>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						maxWidth: "90%",
						maxHeight: "90%",
						overflowY: "auto",
						bgcolor: "background.paper",
						// border: "2px solid #000",
						boxShadow: 24,
						p: 4,
				
				
						
					}}
					component={"form"}
					onSubmit={(e) => {
						e.preventDefault();

						formik.handleSubmit();
					}}
				>
					<Grid component={"form"} maxWidth={"800px"} container spacing={1}>
						<Grid xs={12}>
							<TextField
								label="Título de sección"
								variant="outlined"
								name="text"
								type="title"
								fullWidth
								value={formik.values.title}
								onChange={formik.handleChange}
								error={!!formik.errors.title}
								helperText={formik.errors.title}
							/>
						</Grid>
						<Grid xs={12}>
							<Button
								variant="contained"
								fullWidth
								sx={{
									p: 1.5,
									mt:2
								}}
								type="submit"
								onClick={() => formik.submitForm()}
							>
								Crear
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</>
	);
}
