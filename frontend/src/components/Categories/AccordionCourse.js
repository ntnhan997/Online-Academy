import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ModalVideo from './ModalVideo';

import { useSelector } from 'react-redux';
import parseJwt from '../../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    float: "left"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '50%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    flexBasis: '50%'
  },
  baHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));


export default function Accordions(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const user = useSelector((state) => state.loginUser);
  const { users } = user;

  const check = useSelector(state => state.getBuyCourse);
  const {getBuy} = check;
  const {data} = props;
  return (
    
    <div className={classes.root}>
        <Accordion expanded={expanded === data.LectureID} onChange={handleChange(data.LectureID)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{props.data.title}</Typography>
          <Typography className={classes.secondaryHeading}>{data.LectureName}</Typography>
        </AccordionSummary>
        <ModalVideo data={data.LectureContent} LecturePreview={(users !== null && getBuy.bought === true) || (users !== null ? parseJwt(users.accessToken).Role === 2 : "") ? 1 :data.LecturePreview} CourseID= {data.CourseID} LectureID= {data.LectureID}/>
        {/* {
          props.data.lesson.map(item => {
            return <ModalVideo data={item}/>
          })

        } */}
      </Accordion>
    
    </div>
  );
}
