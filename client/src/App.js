import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from "./images/memories.png";

const App = () => {
    return (
        <Container>
            <AppBar position="static" color="default">
                <Typography variant="h2" align="center" color="inherit">Memories</Typography>
                <img src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in={true}>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;