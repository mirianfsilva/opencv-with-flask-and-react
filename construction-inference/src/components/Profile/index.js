import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Divider, List, ListItem, Button, Typography, Grid, Card, CardActionArea, CardContent, CardMedia, Hidden, ListItemText } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import bg from './../../assets/img/construction.jpg';
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
        height: 400,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(12, 12, 12, 12),
        // backgroundImage: `url(${bg})`,
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
                        <Typography style={{ color: '#42443e' }} align="right" component="h2" variant="inherit"
                            color="initial" paragraph>
                            David Tenente
                        </Typography>
                        <Typography style={{ fontSize: '20px' }} variant="inherit" align="left" color="initial" paragraph>
                            <i><b></b></i>
                        </Typography>
                        <Typography variant="inherit" align="right" color="initial" paragraph>
                            “If a building looks better under construction than when it is finished, then it is a failure."
                        </Typography>
                        <Divider />
                        <List variant="inherit" align="left" >
                            <ListItemText primary="DEMOGRAPHICS"/>
                            <ListItemText primary="Age: 50"/>
                            <ListItemText primary="Location: Boston, Massachusetts Education: Material Science"/>
                            <ListItemText primary="Job: Construction Project Manager Family: Wife and three kids"/>
                            <Divider />
                            <ListItemText primary="GOALS" />
                            <ListItemText primary="Keep construction on time" /> 
                            <ListItemText primary="Keep construction quality high" /> 
                            <ListItemText primary="Wants new technology he can take onsite to help with construction time and quality estimates" /> 
                        </List>
                    </Grid>
                    <Grid item xs={6}>
                        <CardMedia className={classes.cardMedia} image={profilePicture} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

Profile.propTypes = {
    post: PropTypes.object,
};