import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import signUp from './signUp';
import Users from './Users';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core';

export const history = createBrowserHistory({forceRefresh: true});

const styles = {
    // This group of buttons will be aligned to the right
   
    rightToolbar: {
        color: '#fff',
        textDecoration: 'none',
        a: {
            color: '#fff'

        }
    },
    rightt: {
        marginLeft: 'auto',
        marginRight: 24
    },
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: 16,
        marginLeft: -12
    }
};

const Navbar = ({classes}) => (
    <Router history={history}>
        <div className={classes.root}>

            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Eli App
                    </Typography>
                    <Typography classcolor="inherit" className={classes.rightt}>
                        <Button>
                            <Link to="/signUp" className={classes.rightToolbar} >
                                Sign Up
                            </Link>
                        </Button>

                        <Button>
                            <Link to="/LogIn" className={classes.rightToolbar}>
                                Log In
                            </Link>
                        </Button>

                        <Button>
                            <Link to="/users" className={classes.rightToolbar}>
                              Users
                            </Link>
                        </Button>

                    </Typography>

                </Toolbar>
            </AppBar>

            <Route path="/signUp" component={signUp}/>
            <Route path="/users" component={Users}/>
        </div>
    </Router>

);

export default withStyles(styles)(Navbar);