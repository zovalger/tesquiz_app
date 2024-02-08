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

				{/* <Divider></Divider> */}
			</Menu>
		</>
	);
};

export default MoreOptionButtonVariantText;
