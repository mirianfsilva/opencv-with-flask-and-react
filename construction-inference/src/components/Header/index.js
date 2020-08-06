import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography, Container } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

function ListItemLink(props) {
    const { primary, to } = props;

    const renderLink = React.useMemo(
        () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
        [to],
    );

    return (
        <ListItem button component={renderLink}>
            <ListItemText primary={primary} />
        </ListItem>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        color: "#03254c",
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
                        {/* <a href="/"><img className="Logo" src={Logo} alt="foodloop"/></a> */}
                    </Typography>
                    <List variant="inherit" align="center" color="initial" className={classes.menuButton} justify="center">
                        <ListItem variant="inherit" align="center" color="initial" className={classes.menuList}>
                            <ListItemLink primary="HOME" to="/" />
                            <ListItemLink primary="TEAM" to="/teamMembers" />
                        </ListItem>
                    </List>
                    <Button style={{ backgroundColor: '#47688e' }} color="inherit" href="/profile">My Profile</Button>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}