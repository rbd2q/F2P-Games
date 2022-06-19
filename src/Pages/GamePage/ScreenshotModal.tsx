import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/system";
import * as React from "react";

import styles from "./GamePage.module.css";

const style: SxProps = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: 0,
  p: 4,
};

export const ScreenshotModal = ({ s }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button className={styles.screenshotButton} onClick={handleOpen}>
        <img
          key={s.id}
          src={s.image}
          className={styles.screenshotImage}
          alt="There should be a screenshot, but this API sucks :("
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={styles.modalBlock}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <img
              key={s.id}
              src={s.image}
              className={styles.screenshotImageFull}
              alt="There should be a screenshot, but this API sucks :("
            />
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
