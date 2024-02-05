"use client";

import * as Yup from "yup";
import { FormikHelpers, useFormik } from "formik";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { ClassOfSection, SectionOfClass } from "../../types";
import axios from "axios";
import { SERVER_URL } from "@/config";
import Button from "@mui/material/Button";
import API_SERVER_Endpoints from "@/config/API_SERVER_Endpoints";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
	addSetionsToList,
	updateSetionInList,
} from "@/redux/Slices/SectionsSlice";
import {
	addClasssToList,
	updateClassInList,
} from "@/redux/Slices/ClassForSectionSlice";

// *****************************************************************************
// 											form de referencias
// *****************************************************************************

interface creationClass extends Omit<ClassOfSection, "_id" | "created"> {}

interface Props {
	data?: creationClass;
	onClose(): void;
}

export default function TitleModalFormClasses({ data, onClose }: Props) {
	const dispatch = useAppDispatch();
	const { token } = useAppSelector((state) => state.user);
	const { section_id } = useAppSelector((state) => state.classForSection);

	const formik = useFormik<creationClass>({
		initialValues: data || { title: "", content: [], section_id, order: 1 },

		validationSchema: Yup.object({
			title: Yup.string().trim().required().min(3),
		}),

		onSubmit: async (formData) => {
			try {
				const options = { headers: { "x-access-token": token } };

				const res = data
					? await axios.post(
							API_SERVER_Endpoints.admin.classes.update,
							formData,
							options
					  )
					: await axios.post(
							API_SERVER_Endpoints.admin.classes.create,
							formData,
							options
					  );

				console.log(res.data.data);

				if (data) dispatch(updateClassInList(res.data));
				else dispatch(addClasssToList(res.data));
			} catch (error) {
				console.log(error);
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
					<Grid maxWidth={"800px"} container spacing={1}>
						<Grid xs={12}>
							<TextField
								label="Título de la clase"
								variant="outlined"
								name="title"
								type="text"
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
									mt: 2,
								}}
								type="submit"
							>
								{data? "Actualizar":"Crear"}
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</>
	);
}
