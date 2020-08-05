import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, Typography, Grid, Card, CardActionArea, CardContent, CardMedia, Hidden } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import bg from "./../../assets/img/bg.png";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        height: 500,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(12, 0, 6),
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'round',
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        width: 160,
        padding: 200,
    },
    cardMediaBg: {
        width: 300,
    },
    media: {
        height: 0,
    },
    cardContent: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(6),
        marginLeft: theme.spacing(6),
        color: "#fff",
        margin: '0 !important',
    },

}));

const ColorButton = withStyles((theme) => ({
    root: {
        margin: 0,
        backgroundColor: '#47688e',
        '&:hover': {
            backgroundColor: '#506e91',
        },
    },
}))(Button);

export default function Dashboard(props) {
    const classes = useStyles();
    const { post } = props;

    return (
        <div className={classes.heroContent} style={{ backgroundColor: '#fcfdf4' }}>
            <Container maxWidth="lg">
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Typography style={{ color: '#47688e' }} component="h2" variant="inherit" align="center"
                            color="initial" gutterBottom>
                            My Construction
                        </Typography>
                        <Typography style={{ fontSize: '20px' }} variant="inherit" align="left" color="initial" paragraph>
                            <i><b>“If a building looks better under construction than when it is finished, then it is a failure.”</b></i>
                        </Typography>
                        <Typography variant="inherit" align="left" color="initial" paragraph>
                            David Tennant
                        </Typography>
                        <div className={classes.menuButton}>
                            <ColorButton variant="contained" color="primary" href="/DroneMonitoring">
                                Drone Monitoring
                            </ColorButton>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        {/* <CardMedia className={classes.cardMedia} image={} /> */}
                    </Grid>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMediaBg} image={bg} />
                    </Hidden>
                </Grid>
            </Container>
        </div>
    );
}

Dashboard.propTypes = {
    post: PropTypes.object,
};