import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

    return(
        <div className={classes.root}>

        </div>
    );
}
