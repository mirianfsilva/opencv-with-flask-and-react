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
        flexGrow: 1,
        margin: 30,
        padding: theme.spacing(0, 0, 0, 0),
        backgroundRepeat: 'round',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        margin: `${theme.spacing(1)}px auto`
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
        const response = await fetch('/employees/all');
        const data = await response.json();
        setState(data);
    }

    console.log(state);

    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.heroContent} >
            <Container maxWidth="lg" style={{ backgroundColor: '#47688e' }}>
                <Grid container spacing={1}>
                    { Object.keys(state).map((key, index) => (
                        <Grid item xs={3}>
                            <Paper className={classes.paper}>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item>
                                        <Avatar>TM</Avatar>
                                    </Grid>
                                    <Grid item xs>
                                    <Typography>{key}</Typography>
                                    <Typography>{state[key]}</Typography>
                                </Grid>
                                </Grid>
                            </Paper>    
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default TeamMembers;
