import React from "react";

import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";

import { ListItemIcon, Menu, MenuItem } from "@mui/material";

const variants = ["None", "Atria", "Callisto", "Dione"];

const MoreOptionButtonVariantText = () => {
	// **************************** menu desplegable ****************************
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const openMoreButton = Boolean(anchorEl);

	const handleClickMoreButton = (event: React.MouseEvent<HTMLButtonElement>) =>
		setAnchorEl(event.currentTarget);

	const handleCloseMoreButton = () => setAnchorEl(null);

	// **************************** menu eliminar ****************************

	const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

	const handleClickOpenConfirmDelete = () => {
		setOpenConfirmDelete(true);
	};

	const handleCloseConfirmDelete = () => {
		setOpenConfirmDelete(false);
	};

	const handleDelete = async () => {
		// if (!listSelected) return;

		// const newLists = await deleteList(lists, listSelected);

		// setLists(newLists);

		// const newTasks = await deleteTaskByListId(tasks, listSelected);

		// setTasks(newTasks);

		handleCloseConfirmDelete();
	};

	// **************************** render ****************************

	return (
		<>
			<IconButton onClick={handleClickMoreButton} sx={{ borderRadius: 0 }}>
				<MoreVertIcon />
			</IconButton>

			<Menu
				id="More-option-list"
				anchorEl={anchorEl}
				open={openMoreButton}
				onClose={handleCloseMoreButton}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				{variants.map((a) => (
					<MenuItem
						key={a}
						onClick={() => {
							// handleCloseMoreButton();
							// handleClickOpenConfirmDelete();
						}}
					>
						{/* <ListItemIcon>
						<DriveFileRenameOutlineOutlinedIcon fontSize="small" />
					</ListItemIcon> */}
						{a}
					</MenuItem>
				))}

				<Divider></Divider>
				<MenuItem
					onClick={() => {
						handleCloseMoreButton();
						handleClickOpenConfirmDelete();
					}}
				>
					{/* <ListItemIcon>
						<DeleteOutlineOutlinedIcon fontSize="small" />
					</ListItemIcon> */}
					Eliminar lista
				</MenuItem>
			</Menu>

			<Dialog
				open={openConfirmDelete}
				onClose={handleCloseConfirmDelete}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				{/* <DialogTitle id="alert-dialog-title" >
					Seguro que quiere eliminar {title}
				</DialogTitle> */}
				<DialogContent>
					{/* <DialogContentText id="alert-dialog-description">
					Seguro que quiere eliminar {title}
					</DialogContentText> */}
					{`Seguro que quiere eliminar`}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseConfirmDelete} autoFocus>
						Cancelar
					</Button>
					<Button onClick={handleDelete} color="error">
						Eliminar
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default MoreOptionButtonVariantText;
