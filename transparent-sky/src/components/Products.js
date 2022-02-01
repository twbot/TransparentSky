
import React, { Component, useEffect, useState, Suspense } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import {Canvas, useLoader} from "react-three-fiber";
import {BufferGeometry} from 'three'
import {STLLoader} from 'three/examples/jsm/loaders/STLLoader'
import Ball from '../assets/15inchball.STL'

import '../styling/Products.css';


const Products = () => {

    const stl = useLoader(STLLoader, '../assets/15inchball.STL')

  return (
    <div className="products">
        {/* <div className="products-header">
            <div className="products-header-text-div">
                <p className="products-header-text"><span>WIDE-AREA MOTION IMAGERY INTELLIGENCE </span></p>
            </div>
        </div> */}
        <div className="products-header">
            {/* <video autoPlay muted loop className="about-video-header">
            <source src="WAMI.mp4" type="video/mp4"/>
            </video> */}
            <p className="clip-text-product clip-text-product--cover clip-text-products">PRODUCTS</p>
        </div>
        <div className="products-mid">
            {/* <hr/> */}
            {/* <div className="products-mid-content">
                <div className="products-mid-text">
                    <p className="headline"><span>Persistent Surveillance at a fraction of the cost</span></p>
                    <p>Our WAMI combine low-cost systems and components with cutting-edge engineering. This results in a cheaper product with better quality imagery and greater uptime than other WAMI systems.Additionally, Transparent Sky is specializing in UAV based WAMI, which are significantly cheaper to design, produce and maintain than fixed wing.</p>
                    <p>&nbsp;</p>
                    <p className="headline"><span>3D Viewing of a live environment</span></p>
                    <p>Our WAMI is pioneering the industry by using AI and machine learning to create live 3D maps of the targeted area while in-flight. This feature is industry changing for two reasons. First, it creates a more immersive viewing experience – which could prove groundbreaking in military operations by enabling soldiers to quickly familiarize themselves with the environment they’re about to step into. Second, it uses Dynamic homography (dynamic stitching of images regardless of camera position) to create the 3D map, meaning that multiple WAMI systems (more than one aircraft) operating simultaneously can create a seamless image of a potentially limitless area. When combining the live 3D and dynamic homography features to our drone-mounted WAMI systems, it becomes possible to combine the video stream of essentially countless WAMI. This means that several drone equipped with our WAMI can be used in conjunction to survey a whole metropolitan area simultaneously: it would only take 76 drones to cover all of Manhattan!</p>
                    <p>&nbsp;</p>
                    <p className="headline"><span>Constant surveillance</span></p>
                    <p>Drones are effectively weather resistant, as flying at an elevation of 2000 feet, conditions would be visible even in coastal climates, 90% of the time, resulting in a much greater uptime than other systems.</p>
                </div>
            </div> */}
        </div>
        <div className="products-list-hardware">
            {/* <hr/> */}
            <div className="products-list-content-header">
                <p className="products-list-header">Hardware</p>
            </div>
            <div className="products-list-content">
                <div className="circle">
                    <div className="innercircle"></div>
                </div>
                <div className="products-info">
                    <p className="product-title"><span>WAMICam-III</span></p>
                    <p className="product-desc">Transparent Sky's primary product is the first convenient, affordable, and easily usable Wide Area Motion Imaging (WAMI) system for use by state/local governments as well as private entities. WAMICam™ III is unique in its simplicity, greatly reducing the cost and preparation required to provide WAMI information. It can often be installed in a temporary manner an aircraft in less than a day without complex certification, and it can be operated by an aircrew with only a few hours of training.</p>
                    <Button variant="outlined">Learn More</Button>
                </div>

                <div className="circle">
                    <div className="innercircleDrone"></div>
                </div>
                <div className="products-info">
                    <p className="product-title"><span>WAMICam-II</span></p>
                    <p className="product-desc">Transparent Sky is has created a new generation of revolutionary WAMI sensors. Our recent prototype weighs only 2 lbs and has demonstrated the same real-time WAMI and fast 3D capabilities of our other systems. These systems cost considerably less than larger aircraft WAMI systems. Our current WAMICam-II system for small drone is the lightest and smallest in the industry by a factor of 17! In addition to the reduction in size, weight, power, and cost, the WAMICam-II will provide an unprecedented level of geo-registration accuracy in a package that can be easily fielded by crews with minimal training. If you are constrained by budget, people, and schedule, Transparent Sky's small Drone WAMI system may be exactly what you need. The first model, available in 1Q 2017 flies on an Octorotor drone and comes complete with all necessary hardware to put it into immediate use and generate/distribute the necessary ground-based imagery. Using a system like the WAMICam-D, organizers could quickly and easily secure and manage a stadium event, a worksite, or a VIP visit.</p>
                    <Button variant="outlined">Learn More</Button>
                </div>
            </div>
        </div>
        <div className="products-list-software">
            {/* <hr/> */}
            <div className="products-list-content-header">
                <p className="products-list-header">Software</p>
            </div>
            <div className="products-list-content">
                <div className="circle">
                    <div className="innercircleIntelliflow"></div>
                </div>
                <div className="products-info">
                    <p className="product-title"><span>Intelliflow</span></p>
                    <p className="product-desc">Transparent Sky's Intelliflow platform is an all encompassing software unit that includes functions for any needs in an advanced airborne optical system, including imaging, processing, dissemination, viewing, control of trackers, gimbals and trackers, pilot guidance, and many, many more.</p>
                    <Button variant="outlined">Learn More</Button>
                </div>
            </div>
        </div>
    </div>
    );
};
    
export default Products;