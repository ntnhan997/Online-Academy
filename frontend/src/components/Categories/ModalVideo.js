import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import { Player } from 'video-react';

import { useHistory } from "react-router-dom";


import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     top: 50,
//     left: 50,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "800px",
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   }
// }));

export default function ModalVideo(props) {
  // const classes = useStyles();

    const history = useHistory();
    // const [dataVideo] = useState([
    //     {
    //         idLesson: 0,
    //         src : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    //         status: true
    //     },
    //     {
    //         idLesson: 1,
    //         src: "http://media.w3.org/2010/05/bunny/movie.mp4",
    //         status: true
    //     },
    //     {
    //         idLesson: 2,
    //         src : "http://media.w3.org/2010/05/sintel/trailer.mp4",
    //         status: true
    //     },
    //     {
    //         idLesson: 3,
    //         src : "http://media.w3.org/2010/05/video/movie_300.webm",
    //         status: false
    //     },
    //     {
    //         idLesson: 4,
    //         src : "http://media.w3.org/2010/05/video/movie_300.webm",
    //         status: false
    //     }
    // ])

    const handleVideo = (LecturePreview, CourseID) => {
      if(LecturePreview === 0){
        alert("Da khoa");
      }else{
        history.push({
          pathname: '/learning/javascript/' + CourseID+"/" + LectureID,
      });
      }
    }
    const {data, LecturePreview, CourseID, LectureID} = props;
  return (
    <div>
      <AccordionDetails onClick={() => handleVideo(LecturePreview,CourseID, LectureID)}>
        <Typography className="lesson">
          {/* <span>{props.data.titleLesson}</span>
          <span>{props.data.timeLesson}</span> */}
          <span className="subLesson">
            {LecturePreview === 1 ? "Học ngay" : "Đang khóa"}
          </span>
        </Typography>
      </AccordionDetails>
      {/* <Modal
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
      </Modal> */}
    </div>
  );
}
