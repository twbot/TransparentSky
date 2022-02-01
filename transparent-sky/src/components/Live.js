import React from "react";
import { Cartesian3 } from "cesium";
import { Viewer, Entity } from "resium";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CircleIcon from '@mui/icons-material/Circle';

import '../styling/Live.css';

const Live = () => {
    return (
        <div className="live">
            <div className="live-header">
              <p className="clip-text clip-text--cover clip-text-one">INTELLIFLOW VIEWING</p>
            </div>
            <div className="live-view">
              <div className="liveIcon">
                <div className="liveCircleIconDiv"><CircleIcon style={{fontSize: '22px'}} className="liveCircleIcon"/></div>
                <div><p>LIVE</p></div>
              </div>
              <Viewer
              style={{
                  position: "relative",
              }}
              >
                <Entity
                  name="tokyo"
                  position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
                  point={{ pixelSize: 10 }}>
                  {/* test */}
                </Entity>
              </Viewer>
            </div>

            <div className="datasetDiv">
              <p className="dataset-header">Datasets</p>
            </div>
            <div className="datasetCollection row" style={{ "white-space": "nowrap" }}>
              <Card className="dataCard" sx={{ maxWidth: 275 }}>
                <CardMedia
                  component="img"
                  alt="Albuquerque, New Mexico"
                  height="200"
                  image="./fixedWing.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="#607D80">
                    Albuquerque, New Mexico
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Play</Button>
                </CardActions>
              </Card>
              <Card className="dataCard" sx={{ maxWidth: 275 }}>
                <CardMedia
                  component="img"
                  alt="Los Angeles, California"
                  height="200"
                  image="./losAngeles.jpeg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="#607D80">
                    Los Angeles, California
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Play</Button>
                </CardActions>
              </Card>
              <Card className="dataCard" sx={{ maxWidth: 275 }}>
                <CardMedia
                  component="img"
                  alt="Las Vegas, Nevada"
                  height="200"
                  image="./lasVegas.jpeg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="#607D80">
                    Las Vegas, Nevada&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Play</Button>
                </CardActions>
              </Card>
              <Card className="dataCard" sx={{ maxWidth: 275 }}>
                <CardMedia
                  component="img"
                  alt="Bozeman, Montana"
                  height="200"
                  image="./bozeman.jpeg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="#607D80">
                    Bozeman, Montana&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Play</Button>
                </CardActions>
              </Card>
              <Card className="dataCard" sx={{ maxWidth: 275 }}>
                <CardMedia
                  component="img"
                  alt="Sedona, Arizona"
                  height="200"
                  image="./sedona.jpeg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="#607D80">
                    Sedona, Arizona&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Play</Button>
                </CardActions>
              </Card>
            </div>
            <div className="spaceBottom">
            </div>
        </div>
        
      );
}
export default Live;