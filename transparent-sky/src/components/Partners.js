
import React, { Component, useEffect, useState, Suspense } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import '../styling/Partners.css';


const Partners = () => {

  return (
      <div className="partners">
        <div className="content-headers-partners">
            <p>Partners</p>
        </div>
        <div className="grid-container-partners">
            <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={{ width: 250 }} sm={{ width: 250 }} md={{ width: 250 }} lg={{ width: 250 }} xl={{ width: 250 }}>
                    <Card className="teamCard">
                        <CardMedia
                            component="img"
                            alt="Air Force"
                            height="250"
                            image="/partners/AirForce.png"
                        />
                    </Card>
                </Grid>
                <Grid item xs={{ width: 250 }} sm={{ width: 250 }} md={{ width: 250 }} lg={{ width: 250 }} xl={{ width: 250 }}>
                    <Card className="teamCard">
                        <CardMedia
                            component="img"
                            alt="Army"
                            height="250"
                            image="/partners/Army.png"
                        />
                    </Card>
                </Grid>
                <Grid item xs={{ width: 250 }} sm={{ width: 250 }} md={{ width: 250 }} lg={{ width: 250 }} xl={{ width: 250 }}>
                    <Card className="teamCard">
                        <CardMedia
                            component="img"
                            alt="DARPA"
                            height="250"
                            image="/partners/Darpa.png"
                        />
                    </Card>
                </Grid>
                <Grid item xs={{ width: 250 }} sm={{ width: 250 }} md={{ width: 250 }} lg={{ width: 250 }} xl={{ width: 250 }}>
                    <Card className="teamCard">
                        <CardMedia
                            component="img"
                            alt="Aerial Pixels"
                            height="250"
                            image="/partners/AerialPixels.png"
                        />
                    </Card>
                </Grid>
                <Grid item xs={{ width: 250 }} sm={{ width: 250 }} md={{ width: 250 }} lg={{ width: 250 }} xl={{ width: 250 }}>
                    <Card className="teamCard">
                        <CardMedia
                            component="img"
                            alt="Air Force Research Lab"
                            height="250"
                            image="/partners/AFRL.png"
                        />
                    </Card>
                </Grid>
                <Grid item xs={{ width: 250 }} sm={{ width: 250 }} md={{ width: 250 }} lg={{ width: 250 }} xl={{ width: 250 }}>
                    <Card className="teamCard">
                        <CardMedia
                            component="img"
                            alt="Collins Aerospace"
                            height="250"
                            image="/partners/CollinsAerospace.png"
                        />
                    </Card>
                </Grid>
                <Grid item xs={{ width: 250 }} sm={{ width: 250 }} md={{ width: 250 }} lg={{ width: 250 }} xl={{ width: 250 }}>
                    <Card className="teamCard">
                        <CardMedia
                            component="img"
                            alt="DZYNE Technologies"
                            height="250"
                            image="/partners/DZYNETechnologies.jpeg"
                        />
                    </Card>
                </Grid>
                <Grid item xs={{ width: 250 }} sm={{ width: 250 }} md={{ width: 250 }} lg={{ width: 250 }} xl={{ width: 250 }}>
                    <Card className="teamCard">
                        <CardMedia
                            component="img"
                            alt="EOIR Technologies"
                            height="250"
                            image="/partners/EOIR_Technologies.png"
                        />
                    </Card>
                </Grid>
                <Grid item xs={{ width: 250 }} sm={{ width: 250 }} md={{ width: 250 }} lg={{ width: 250 }} xl={{ width: 250 }}>
                    <Card className="teamCard">
                        <CardMedia
                            component="img"
                            alt="Intelligent Software Solutions"
                            height="250"
                            image="/partners/IntelligentSoftwareSolutions.png"
                        />
                    </Card>
                </Grid>
                <Grid item xs={{ width: 250 }} sm={{ width: 250 }} md={{ width: 250 }} lg={{ width: 250 }} xl={{ width: 250 }}>
                    <Card className="teamCard">
                        <CardMedia
                            component="img"
                            alt="Kitware"
                            height="250"
                            image="/partners/Kitware.png"
                        />
                    </Card>
                </Grid>
                <Grid item xs={{ width: 250 }} sm={{ width: 250 }} md={{ width: 250 }} lg={{ width: 250 }} xl={{ width: 250 }}>
                    <Card className="teamCard">
                        <CardMedia
                            component="img"
                            alt="NGA"
                            height="250"
                            image="/partners/NGA.png"
                        />
                    </Card>
                </Grid>
                <Grid item xs={{ width: 250 }} sm={{ width: 250 }} md={{ width: 250 }} lg={{ width: 250 }} xl={{ width: 250 }}>
                    <Card className="teamCard">
                        <CardMedia
                            component="img"
                            alt="ONR"
                            height="250"
                            image="/partners/ONR.png"
                        />
                    </Card>
                </Grid>
                <Grid item xs={{ width: 250 }} sm={{ width: 250 }} md={{ width: 250 }} lg={{ width: 250 }} xl={{ width: 250 }}>
                    <Card className="teamCard">
                        <CardMedia
                            component="img"
                            alt="Pacific Defense"
                            height="250"
                            image="/partners/PacificDefense.png"
                        />
                    </Card>
                </Grid>
                <Grid item xs={{ width: 250 }} sm={{ width: 250 }} md={{ width: 250 }} lg={{ width: 250 }} xl={{ width: 250 }}>
                    <Card className="teamCard">
                        <CardMedia
                            component="img"
                            alt="Perceptronics Solutions"
                            height="250"
                            image="/partners/PerceptronicsSolutions.png"
                        />
                    </Card>
                </Grid>
                <Grid item xs={{ width: 250 }} sm={{ width: 250 }} md={{ width: 250 }} lg={{ width: 250 }} xl={{ width: 250 }}>
                    <Card className="teamCard">
                        <CardMedia
                            component="img"
                            alt="Primal Innovation"
                            height="250"
                            image="/partners/PrimalInnovation.jpeg"
                        />
                    </Card>
                </Grid>
                <Grid item xs={{ width: 250 }} sm={{ width: 250 }} md={{ width: 250 }} lg={{ width: 250 }} xl={{ width: 250 }}>
                    <Card className="teamCard">
                        <CardMedia
                            component="img"
                            alt="Raytheon"
                            height="250"
                            image="/partners/Raytheon.png"
                        />
                    </Card>
                </Grid>
                <Grid item xs={{ width: 250 }} sm={{ width: 250 }} md={{ width: 250 }} lg={{ width: 250 }} xl={{ width: 250 }}>
                    <Card className="teamCard">
                        <CardMedia
                            component="img"
                            alt="University Of Florida"
                            height="250"
                            image="/partners/UniversityOfFlorida.png"
                        />
                    </Card>
                </Grid>
                <Grid item xs={{ width: 250 }} sm={{ width: 250 }} md={{ width: 250 }} lg={{ width: 250 }} xl={{ width: 250 }}>
                    <Card className="teamCard">
                        <CardMedia
                            component="img"
                            alt="University Of Missouri"
                            height="250"
                            image="/partners/UniversityOfMissouri.png"
                        />
                    </Card>
                </Grid>
            </Grid>
        </div>
      </div>
    
    );
};
    
export default Partners;