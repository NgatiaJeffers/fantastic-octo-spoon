import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from "./images/memories.png";
import useStyles from './styles';
import './theme/styles.css';

const App = () => {
    const [currentId, setCurrentId] = useState(null); // 📡 setState on ID to pass on the form component
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container>
            <AppBar className={classes.appBar} position="static" color="default">
                <Typography className={classes.heading} variant="h2" align="center" color="inherit">Memories</Typography>
                <img classes={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in={true}>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts  setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form current={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;