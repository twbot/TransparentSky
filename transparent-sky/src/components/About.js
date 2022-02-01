
import React, { Component, useState } from "react";
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Partners from './Partners';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styling/About.css';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
            <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
            >
            <CloseIcon />
            </IconButton>
        ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    bgcolor: 'background.paper',
    boxShadow: 25,
    p: 4,
};
  

const About = () => {
    const [open, setOpen] = useState(false);
    const [poi, setPoi] = React.useState(null);

    const [leadership, setLeadership] = useState(
        [
            {
                "id": 1,
                "name": "Steve Suddarth",
                "text": "Steve is a retired Air Force Colonel with a 24-year military R&D career involving a wide variety of R&D, management, teaching, and executive functions, as well as research in machine learning, autonomous vehicles and image processing. Notably, Steve started the Angel Fire project, forming its team and leading it through all of its development and initial fielding, figure 11. Steve also performed consulting for Logos Corporation, Rockwell-Collins International, Los Alamos National Laboratory, and Raytheon Company. Steve also built and tested several airborne optical sensing systems, unmanned aerial robotics systems, and software systems for large military space programs. He founded Transparent Sky in 2007 to further develop the image processing technology which we are using today in our product line.",
                "education": "Ph.D., Electrical Engineering, Univ. of Washington, 1988; M.S. Electrical Engineering, Univ. of Washington, 1983, B.S. Electrical Engineering, US Air Force Academy 1982.",
                "title": "Co-Founder & Director",
                "img" : "./leadership/SteveSuddarth.jpeg"
              },
              {
                "id": 2,
                "name": "Deborah Suddarth",
                "text": "Deborah is our business manager.  She worked in construction management and process design as an engineer and senior engineer for various environmental engineering consulting firms, including Brown & Caldwell, James Montgomery Engineering, and Degrémont (France), figure 15.  She brings her management skills to PreVision to handle our administrative aspects, from budgets to personnel, and generally ensuring the team has what they need to flourish in this business.",
                "education": "M.S. Civil/Environmental Engineering, Univ. of California, Davis, 1980; B.S. Civil Engineering, Univ. of California, 1978; PE License, 1982, California (C 32950).",
                "title": "Co-Founder",
                "img" : "./leadership/DeborahSuddarth.jpeg"
              },
              {
                "id": 3,
                "name": "David Eichhorn",
                "text": "David (Maj. Gen., USAF Ret.) brings 35 years of experience in aircraft systems, avionics, test, project management and flight operations.  As an Air Force officer, he led the Air Force Operational Test and Evaluation Command (AFOTEC) with over 650 staff and test oversight of $650 billion in programs at over 12 locations.  David also served as Commander of the Air Force Flight Test Center at Edwards AFB, as well as the Commander of Arnold Engineering and Development Center (AEDC), figure 14.  He has over 6,100 hours in more than 47 types of aircraft.  His expertise in system design and test guide our path toward both development and test of our products.",
                "education": "M.S. Nat. Resource Strategy, Industrial College of the Armed Forces (Dist. Grad 1999), M.S. Electrical Engineering, Cal State Univ. (1988), AF Test Pilot School (Dist. Grad 1985), B.S. E.E., Univ. of Illinois (1976). Sec. Mgt. Course (2002), Air War College (1994), Joint Force Air Component Commander Course (2000).",
                "title": "Co-Founder",
                "img" : "./leadership/DavidEichhorn.jpeg"
              }
        ]
    )

    const handleClickOpen = async (id) => {
        setOpen(true);
        let poi = leadership.filter(leadership => leadership.id === id)[0];
        setPoi(poi);
        console.log(poi);
    };
    
    const handleClose = () => {
        setOpen(false);
        setPoi(null);
    };

    return (
        <div className="about">
            <div className="about-header">
                {/* <video autoPlay muted loop className="about-video-header">
                <source src="WAMI.mp4" type="video/mp4"/>
                </video> */}
                <p className="clip-text clip-text--cover clip-text-one">ABOUT US</p>
            </div>
            <div className="about-mid">
                <div className="about-mid-content">
                    <p className="about-mid-header">WHO WE ARE</p>
                    <div className="about-mid-text">
                        <p>Transparent Sky is a team of engineers, researchers, and scientists working towards the realization of one goal: to make a more transparent world.</p>
                    </div>
                </div>
            </div>
            <div className="about-leadership">
                <div className="leadership-content-header">
                    <p className="leadership-header">Leadership</p>
                    <p className="leadership-content-intro">
                    The individual personal accomplishments of the Transparent Sky leadership 
                    team are world-class in their respective fields. 
                    When combined and working together this team can succeed in anything they are challenged with.
                    Transparent Sky has five co-founders. All have engineering backgrounds, with three Ph.D.'s and combined 
                    experience of over 160 years in leadership of design, construction, testing, and operation of image processing technology, 
                    unmanned aircraft systems and engineering management.
                    </p>
                </div>
                <div className="content-headers">
                    <p><span>Management & Advisors</span></p>
                </div>
                <div className="leadership-content">
                    <div className="leadership-image-div">
                        <img src='./leadership/SteveSuddarth.jpeg' className="leadership-images"></img>
                        <div className='leadership-name'>Steve Suddarth</div>
                        <div className='leadership-title'>Co-Founder & Director</div>
                        <div className='leadership-info'><AddCircleIcon fontSize="large" className="infoIcon" onClick={() => {handleClickOpen(1);}}></AddCircleIcon></div>
                    </div>
                    <div className="leadership-image-div">
                        <img src='./leadership/DeborahSuddarth.jpeg' className="leadership-images"></img>
                        <div className='leadership-name'>Deborah Suddarth</div>
                        <div className='leadership-title'>Co-Founder</div>
                        <div className='leadership-info'><AddCircleIcon fontSize="large" className="infoIcon" onClick={() => {handleClickOpen(2);}}></AddCircleIcon></div>
                    </div>
                    <div className="leadership-image-div">
                        <img src='./leadership/DavidEichhorn.jpeg' className="leadership-images"></img>
                        <div className='leadership-name'>David Eichhorn</div>
                        <div className='leadership-title'>Co-Founder</div>
                        <div className='leadership-info'><AddCircleIcon fontSize="large" className="infoIcon" onClick={() => {handleClickOpen(3);}}></AddCircleIcon></div>
                    </div>
                </div>
                <div className="content-headers">
                    <p><span>Team Leads</span></p>
                </div>
                <div className="leadership-content-teams">
                    <div className="team-leadership-image-div">
                        <img src='./leadership/NicSchafer.jpeg' className="team-leadership-images"></img>
                        <div className='team-leadership-name'>Nicholas Schafer</div>
                        <div className='team-leadership-title-small'>Lead Mechatronics Engineer</div>
                        <div className='team-leadership-info'><LinkedInIcon fontSize="large" className="infoIcon" onClick={(event =>  window.open('https://www.linkedin.com/in/nhschafer/'))}></LinkedInIcon></div>
                    </div>
                    <div className="team-leadership-image-div">
                        <img src='./leadership/FrancescoMoneta.jpeg' className="team-leadership-images"></img>
                        <div className='team-leadership-name-small'>Francesco Maria Moneta</div>
                        <div className='team-leadership-title'>Lead Software Engineer</div>
                        <div className='team-leadership-info'><LinkedInIcon fontSize="large" className="infoIcon" onClick={(event =>  window.open('https://www.linkedin.com/in/francesco-maria-moneta/'))}></LinkedInIcon></div>
                    </div>
                    <div className="team-leadership-image-div">
                        <img src='./leadership/FrancescoMoneta.jpeg' className="team-leadership-images"></img>
                        <div className='team-leadership-name'>Matthew Zemlick</div>
                        <div className='team-leadership-title'>Lead Drone Engineer</div>
                        <div className='team-leadership-info'><LinkedInIcon fontSize="large" className="infoIcon" onClick={(event =>  window.open('https://www.linkedin.com/in/matthew-zemlick-85569a21a/'))}></LinkedInIcon></div>
                    </div>
                    <div className="team-leadership-image-div">
                        <img src='./leadership/TristanBrodeur.jpeg' className="team-leadership-images"></img>
                        <div className='team-leadership-name'>Tristan Brodeur</div>
                        <div className='team-leadership-title'>Lead Research Engineer</div>
                        <div className='team-leadership-info'><LinkedInIcon fontSize="large" className="infoIcon" onClick={(event =>  window.open('https://www.linkedin.com/in/tristan-brodeur-a7987896/'))}></LinkedInIcon></div>
                    </div>
                    <div className="team-leadership-image-div">
                        <img src='./leadership/KailaConleyConversi.jpeg' className="team-leadership-images"></img>
                        <div className='team-leadership-name'>Philip Vilensky</div>
                        <div className='team-leadership-title'>Lead Mechanical Engineer</div>
                        <div className='team-leadership-info'><LinkedInIcon fontSize="large" className="infoIcon" onClick={(event =>  window.open('https://www.linkedin.com/in/phillip-vilensky-206bb4201/'))}></LinkedInIcon></div>
                    </div>
                    <div className="team-leadership-image-div">
                        <img src='./leadership/KailaConleyConversi.jpeg' className="team-leadership-images"></img>
                        <div className='team-leadership-name'>Kaila Conley-Conversi</div>
                        <div className='team-leadership-title'>Lead Operations</div>
                        <div className='team-leadership-info'><LinkedInIcon fontSize="large" className="infoIcon" onClick={(event =>  window.open('https://www.linkedin.com/in/kaila-conley-conversi-297a7621b/'))}></LinkedInIcon></div>
                    </div>
                </div>
            </div>
            <div className="about-teams">
                <div className="team-content-header">
                    <p className="team-header">Teams</p>
                </div>
                <div className="team-content">
                    <p className="team-content-intro">Our success depends on many teams joining together for a shared goal. No single discipline has 
                    all the answers needed to build WAMI systems, and we've found that many exciting new ideas come from dedicated collaboration between 
                    different fields. Learn more about our dedicated teams and people below.
                    </p>
                    <div className="teamGrid">
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
                    <Card className="teamCard">
                        <CardMedia
                            component="img"
                            alt="Mechatronics Team"
                            height="200"
                            image="/fixedwing.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="#607D80">
                                Mechatronics
                            </Typography>
                            <Typography variant="body1" color="#607D80">
                                Mechatronics is at the core of Transparent Sky engineering – ranging from board interface design to interactions with capture cards, to cabling, camera set up, and maintenance.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                            <Button size="small">Jobs</Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
                    <Card className="teamCard">
                        <CardMedia
                            component="img"
                            alt="Drone Team"
                            height="200"
                            image="/teams/MattZemlick.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="#607D80">
                                Drones
                            </Typography>
                            <Typography variant="body1" color="#607D80">
                                The Drone team designs, perfects, produces, and integrates our small UAV-compatible WAMI which is light, competitively affordable, and weatherproof.
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                            <Button size="small">Jobs</Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="Software Team"
                            height="200"
                            image="/fixedwing.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="#607D80">
                                Software
                            </Typography>
                            <Typography variant="body1" color="#607D80">
                                The Software team develop and refine the Intelliflow suite of features and live online viewer, which makes Transparent Sky’s WAMI world-leader in the field.
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                            <Button size="small">Jobs</Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
                    <Card >
                        <CardMedia
                            component="img"
                            alt="Research Team"
                            height="200"
                            image="/teams/researchteam.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="#607D80">
                                Research
                            </Typography>
                            <Typography variant="body1" color="#607D80">
                                The Research team uses AI and Machine Learning to develop features unique to Transparent Sky WAMI, such as Live 3D and superresolution, which are cutting-edge technology.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                            <Button size="small">Jobs</Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
                    <Card >
                        <CardMedia
                            component="img"
                            alt="Mechanical Team"
                            height="200"
                            image="/teams/mechanicalteam.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="#607D80">
                                Mechanical Design
                            </Typography>
                            <Typography variant="body1" color="#607D80">
                                The Mechanical Design team are in charge of designing, producing, assembling and refining all physical components of fixed-wing WAMI, such as our 15” ball. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                            <Button size="small">Jobs</Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
                    <Card >
                        <CardMedia
                            component="img"
                            alt="Operations Team"
                            height="200"
                            image="/fixedwing.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="#607D80">
                                Operations
                            </Typography>
                            <Typography variant="body1" color="#607D80">
                                Specializing in accounting, PR, content-creation, management and recruitment, the Operations team oversees the smooth execution of all day-to-day functions of the company.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                            <Button size="small">Jobs</Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    </Grid>
                    </div>
                </div>
            </div>
            <Partners />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modal-poi">
                    <div className="picModal"> 
                        <img src={poi ? poi.img : ''}></img>
                    </div>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {poi ? poi.name : ''}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {poi ? poi.title : ''}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {poi ? poi.text : ''}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {poi ? poi.education : ''}
                    </Typography>
                </div>
            </Modal>
        </div>
    );
};

export default About;