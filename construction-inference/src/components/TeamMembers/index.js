import React, { useState, useEffect, setRecipes } from 'react';
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
        margin: 30,
        height: 500,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6, 0, 6, 0),
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

function TeamMembers(props) {
    const [state, setState] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch('https://5f2b1b226ae5cc0016423455.mockapi.io/api/opencv/members');
        const data = await response.json();
        setState(data);
    }

    console.log(state);

    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.heroContent} style={{ backgroundColor: '#47688e' }}>
            <Container maxWidth="lg">
                <Grid container spacing={1}>
                    {state.map(item => (
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item xs>
                                        <Avatar src={item.avatar} />
                                    </Grid>
                                    <Grid item xs>
                                    <Typography>{item.name}</Typography>
                                </Grid>
                                </Grid>
                            </Paper>    
                        </Grid>
                    ))}

                    {/* <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item xs>
                                    <Typography>{profile_two}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>W</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography>{profile_two}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>W</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography>{profile_two}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>W</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography>{profile_two}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>W</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography>{profile_two}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid> */}

                    {/* <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item xs>
                                    <Typography>{profile_three}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>W</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography>{profile_three}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>W</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography>{profile_three}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>W</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography>{profile_three}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>W</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography>{profile_three}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid> */}

                </Grid>
            </Container>
        </div>
    );
}

export default TeamMembers;
