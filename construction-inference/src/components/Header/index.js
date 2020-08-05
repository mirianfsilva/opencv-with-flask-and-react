import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, CssBaseline, Typography, Container } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import './style.scss';

function ListItemLink(props) {
    const { primary, to } = props;

    const renderLink = React.useMemo(
        () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
        [to],
    );

    return (
        <li>
            <ListItem button component={renderLink}>
                <ListItemText primary={primary} />
            </ListItem>
        </li>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        color: "#536f4f",
    },
    menuList: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Menu(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar position="fixed" style={{ backgroundColor: '#fff' }}>
                    <Typography variant="h6" className={classes.title}>
                        <a href="/"><img className="Logo" src={Logo} alt="foodloop"/></a>
                    </Typography>
                    <List variant="inherit" align="center" color="initial" className={classes.menuButton} justify="center">
                        <ListItem variant="inherit" align="center" color="initial" className={classes.menuList}>
                            <ListItemLink primary="HOME" to="/" />
                            <ListItemLink primary="ABOUT" to="/About" />
                            <ListItemLink primary="CONTACT" to="/"/>
                        </ListItem>
                    </List>
                    <Button style={{ backgroundColor: '#749370' }} color="inherit" href="/login">Login</Button>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}