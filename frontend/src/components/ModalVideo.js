import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Player } from 'video-react';

import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    top: 50,
    left: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "800px",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));

export default function ModalVideo(props) {
  const classes = useStyles();

    const [dataVideo] = useState([
        {
            idLesson: 0,
            src : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
            status: true
        },
        {
            idLesson: 1,
            src: "http://media.w3.org/2010/05/bunny/movie.mp4",
            status: false
        },
        {
            idLesson: 2,
            src : "http://media.w3.org/2010/05/sintel/trailer.mp4",
            status: false
        },
        {
            idLesson: 3,
            src : "http://media.w3.org/2010/05/video/movie_300.webm",
            status: false
        },
        {
            idLesson: 4,
            src : "http://media.w3.org/2010/05/video/movie_300.webm",
            status: false
        }
    ])

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AccordionDetails onClick={dataVideo[props.data.idLesson].status ?  handleOpen : () => {}}>
        <Typography className="lesson">
          <span>{props.data.titleLesson}</span>
          <span>{props.data.timeLesson}</span>
          <span className="subLesson">
            {dataVideo[props.data.idLesson].status ? "Học ngay" : "Đang khóa"}
          </span>
        </Typography>
      </AccordionDetails>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
           
          <Player
            playsInline
            poster="/assets/poster.png"
            src={dataVideo[props.data.idLesson].src}
            
          />
        </div>
      </Modal>
    </div>
  );
}
