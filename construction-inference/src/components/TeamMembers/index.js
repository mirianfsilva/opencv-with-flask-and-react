import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    icon: {
        marginRight: theme.spacing(2),
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
    }
}));


export default function TeamMembers(props){
    const classes = useStyles();
    const { post } = props;

    return(
        <div className={classes.root}>

        </div>
    );
}
