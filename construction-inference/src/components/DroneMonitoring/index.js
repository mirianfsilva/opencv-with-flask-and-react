import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AppBar, CssBaseline, Hidden } from '@material-ui/core/';
import { Divider, Container, Drawer, Grid, Paper, Avatar } from '@material-ui/core/';
import { List, ListItemText, ListItem, Typography, Button, Popover } from '@material-ui/core/';
import { makeStyles, WithStyles, useTheme } from '@material-ui/core/styles';

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
        height: 600,
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

function DroneMonitoring(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    
    const [state, setState] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch('https://5f2b1b226ae5cc0016423455.mockapi.io/api/opencv/footage');
        const data = await response.json();
        setState(data);
    }

    console.log(state);

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
            <Container maxWidth="lg">
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item xs>
                                    <Typography>allala</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar></Avatar>
                                </Grid>
                                <Grid item>
                                    <Avatar></Avatar>
                                </Grid>
                                <Grid item>
                                    <Avatar></Avatar>
                                </Grid>
                                <Grid item>
                                    <Avatar></Avatar>
                                </Grid><Grid item>
                                    <Avatar></Avatar>
                                </Grid>
                            </Grid>
                        </Paper>
                        {state.map(item => (
                            <Grid item xs={12}>
                                <Paper className={classes.paper} onClick={ () => 
                                    <Popover anchorReference="anchorPosition" anchorPosition={{ top: 200, left: 1200 }}
                                    anchorOrigin={{ vertical: 'center', horizontal: 'right', }}
                                    transformOrigin={{ vertical: 'center', horizontal: 'center', }}>
                                    </Popover>
                                }>
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item xs>
                                            <Avatar src={item.avatar} />
                                        </Grid>
                                        <Grid item xs>
                                            <Typography>
                                                {item.defects}
                                                {item.subtitle}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography>{item.risk}</Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>

                    <Grid item xs={9}>
                        <Paper className={classes.paper}>footage here</Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default DroneMonitoring;
