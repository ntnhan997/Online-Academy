import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import { Player } from 'video-react';

import { useHistory } from "react-router-dom";


import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';


export default function ModalVideo(props) {

    const history = useHistory();
    

    const handleVideo = (LecturePreview, CourseID) => {
      if(LecturePreview === 0){
        alert("Da khoa");
      }else{
        history.push({
          pathname: '/learning/javascript/' + CourseID+"/" + LectureID,
      });
      }
    }
    const { LecturePreview, CourseID, LectureID} = props;
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
