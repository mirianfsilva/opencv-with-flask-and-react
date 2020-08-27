import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Divider, Container, Drawer, Grid, Paper, Avatar, Badge, Tooltip, LinearProgress} from '@material-ui/core/';
import { List, ListItemText, ListItem, Typography, Button, Popover, CircularProgress } from '@material-ui/core/';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import profilePhoto from './../../assets/img/profile-photo.jpg';
import './style.scss';

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
    video: {
        width: 500,
        height: 500,
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        border: `2px solid ${theme.palette.background.paper}`,
    },
}));

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);

function DroneMonitoring(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();

    // router for defects
    const [state, setState] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch('/defects');
        const data = await response.json();
        setState(data);
    }

    // router for employees onsite, ontime, progress
    const [employees, setEmployees] = useState([]);
    const [ontime, setOntime] = useState([]);
    const [progress, setProgress] = useState([]);

    useEffect(() => {
        loadEmployees();
    }, []);

    useEffect(() => {
        loadOntime();
    }, []);

    useEffect(() => {
        loadProgress();
    }, []);

    const loadEmployees = async () => {
        const response = await fetch('/employees/onsite');
        const data = await response.json();
        setEmployees(data);
    }
    const loadOntime = async () => {
        const response = await fetch('/ontime');
        const data = await response.json();
        setOntime(data);
    }

    const loadProgress = async () => {
        const response = await fetch('/progress');
        const data = await response.json();
        setProgress(data);
    }

    // button popover 
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="lg" style={{ backgroundColor: '#47688e' }}>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        {/* Onsite Employees */}
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item xs>
                                    <Typography style={{ fontSize: '12px', }}><b>Progress:</b></Typography>
                                    <BorderLinearProgress variant="determinate" value={parseFloat(progress.progress).toFixed(2) * 100} />
                                    <Typography style={{ fontSize: '10px', }}>on time:{parseFloat(ontime.ontime).toFixed(2) * 100+ '%'}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    {Object.keys(employees).map((key, index) => (
                                        <Tooltip title={employees[key] + " | " + key} placement="top-start">
                                            <StyledBadge overlap="circle"
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'right',
                                                }} variant="dot">
                                                <Avatar alt="{employees[key]}" className={classes.small}>{key[0]}</Avatar>
                                            </StyledBadge>
                                        </Tooltip>
                                    ))}
                                </Grid>
                            </Grid>
                        </Paper>
                        {Object.keys(state).map((key, index) => (
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item>
                                            <Avatar className={classes.small} style={{ backgroundColor: '#47688e' }}>{key}</Avatar>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography style={{ fontSize: '15px', }}>{state[key].Type} {parseFloat(state[key].Confidence).toFixed(2) * 100 + '%'} </Typography>
                                            <Typography style={{ fontSize: '12px' }}>{state[key].Description}</Typography>
                                            <Typography style={{ fontSize: '12px' }}>{state[key].Importance} | {state[key].Priority}</Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        ))}
                        <Paper className={classes.paper}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar src={profilePhoto} />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={9}>
                        <Container>
                            <iframe
                                src={'http://0.0.0.0:5003/video_feed'}
                                allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default DroneMonitoring;
