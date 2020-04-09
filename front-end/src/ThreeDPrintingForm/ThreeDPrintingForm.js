import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Grow } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));
const iframe = '<div><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKXfKIPQbi5DVn91YkdTd3cYXlwojSY1KOofVVvVWSptLEyA/viewform?embedded=true" width="100%" height="3972" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>';
const googleFormIframe = () => ({
    __html: iframe
})

export default function ThreeDPrintingForm() {
    const classes = useStyles();

    return (
        <Grid spacing={3}>
            <Grid item xs={0} md={4} lg={3}></Grid>
            <Grid item xs={12} md={8} lg={9}>
                <Paper>
                    <Grow in={true}>
                        <div style={{ padding: '20px' }}>
                            <div dangerouslySetInnerHTML={googleFormIframe()} />
                        </div>
                    </Grow>
                </Paper>
            </Grid>
            <Grid item xs={0} md={4} lg={3}></Grid>
        </Grid>
    );
}