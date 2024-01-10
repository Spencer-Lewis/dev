import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { TypeAnimation } from 'react-type-animation';
import avatar from "../assets/portrait.jpg";

const AvatarTyper = () => (
    <Box className="text-center text-gray-300 mt-10 mb-10">
        <Grid container justifyContent="center">
            <Avatar className="" src={avatar} alt="Spencer Lewis" sx={{ width: 170, height: 190 }}/>
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
)

export default AvatarTyper
