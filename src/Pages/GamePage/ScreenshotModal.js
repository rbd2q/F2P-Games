import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./GamePage.module.scss";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  height: 500,
  padding: 0,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ScreenshotModal({s}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className={styles.screenshotButton} onClick={handleOpen}>
        <img
          key={s.id}
          src={s.image}
          className={styles.screenshotImage}
          alt={`There should be a screenshot, but this API sucks :(`}
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
              alt={`There should be a screenshot, but this API sucks :(`}
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}