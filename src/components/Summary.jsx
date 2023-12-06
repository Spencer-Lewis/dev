import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { TypeAnimation } from 'react-type-animation';
import avatar from "../assets/portrait.jpg";
import Skills from "./Skills"

const Summary = () => (
    <section id="about" className="container mx-auto my-8 px-4">
        <Box className="">
            <Grid container justify="center">
                <Avatar className="" src={avatar} alt="Spencer Lewis" />
            </Grid>
            <Typography className="" variant="h4">
                <TypeAnimation sequence={["Spencer Lewis"]} typeSpeed={30} />
            </Typography>

            <Typography className="" variant="h5">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "Frontend Developer",
                        1000,
                        "Backend Developer",
                        1000,
                        "Problem Solver",
                        1000
                    ]}
                    wrapper="span"
                    speed={30}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </Typography>
        </Box>
        <div className="ml-7 bg-white rounded-md p-4">
            <p className="text-lg">
                Full-Stack Software Engineer with 7 years of experience in front-end, back-end
                development, and project management.
                Proficient in a diverse range of technologies and methodologies, committed to
                driving innovative solutions and ensuring a seamless user experience.
                Demonstrated expertise in spearheading architecture, cross-functional collaboration,
                and agile methodologies.
            </p>
        </div>

        <Skills />
    </section>
);

export default Summary;
