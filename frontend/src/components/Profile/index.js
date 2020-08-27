import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Divider, List, ListItem, Button, Typography, Grid, Card } from '@material-ui/core/';
import { CardActionArea, CardContent, CardMedia, Hidden, ListItemText , Avatar} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import bg from './../../assets/img/bg.png';
import profilePicture from './../../assets/img/profile-photo.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        margin: 50,
        height: 500,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(12, 12, 12, 12),
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
        width: 50,
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
    large: {
        width: theme.spacing(40),
        height: theme.spacing(40),
    },

}));

const ColorButton = withStyles((theme) => ({
    root: {
        margin: 0,
        backgroundColor: '#B5C76F',
        '&:hover': {
            backgroundColor: '#9CB14E',
        },
    },
}))(Button);

export default function Profile(props) {
    const classes = useStyles();
    const { post } = props;

    return (
        <div className={classes.heroContent} style={{ backgroundColor: '#fcfdf4' }}>
            <Container maxWidth="md">
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Typography style={{ color: '#42443e' }} align="center" component="h2" variant="inherit"
                            color="initial" paragraph>
                            David Tenente
                        </Typography>
                        <Typography style={{ fontSize: '20px' }} variant="inherit" align="left" color="initial" paragraph>
                            <i><b></b></i>
                        </Typography>
                        <Typography variant="inherit" align="center" color="initial" paragraph>
                            “If a building looks better under construction than when it is finished, then it is a failure."
                        </Typography>
                        <Divider />
                        <List variant="inherit" align="left" >
                            <ListItemText primary="Age" secondary="50"/>
                            <ListItemText primary="Location" secondary="Boston, Massachusetts"/>
                            <ListItemText primary="Education" secondary="Material Science"/>
                            <ListItemText primary="Job" secondary="Construction Project Manager"/>
                            <Divider />
                        </List>
                    </Grid>
                    <Grid item xs={6}>
                        <Avatar className={classes.large} src={profilePicture} />
                    </Grid>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMediaBg} image={bg} />
                    </Hidden>
                </Grid>
            </Container>
        </div>
    );
}

Profile.propTypes = {
    post: PropTypes.object,
};