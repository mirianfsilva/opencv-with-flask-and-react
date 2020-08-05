import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, CssBaseline, Hidden } from '@material-ui/core/';
import { Divider, Container, Drawer, Grid, Paper, Avatar } from '@material-ui/core/';
import { List, ListItemText, ListItem, Typography } from '@material-ui/core/';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    heroContent: {
        margin: 50,
        height: 600,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(12, 12, 12, 12),
        backgroundRepeat: 'round',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
}));

const message = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`;


function DroneMonitoring(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {['Identified Defects', 'Identified Defects', 'Identified Defects', 'Identified Defects'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    return (
        <div className={classes.heroContent} style={{ backgroundColor: '#47688e' }}>
            <Container maxWidth="md">
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item xs>
                                    <Typography>{message}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>W</Avatar>
                                </Grid>
                                <Grid item>
                                    <Avatar>W</Avatar>
                                </Grid>
                                <Grid item>
                                    <Avatar>W</Avatar>
                                </Grid>
                                <Grid item>
                                    <Avatar>W</Avatar>
                                </Grid><Grid item>
                                    <Avatar>W</Avatar>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>W</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography>{message}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>W</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography>{message}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>W</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography>{message}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>W</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography>{message}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={8}>
                        <Paper className={classes.paper}>footage here</Paper>
                    </Grid>                
                </Grid>
            </Container>
        </div>
    );
}

export default DroneMonitoring;
