import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Grow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        overflow: 'auto',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));
const iframe = '<div><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeq0HZeslyuVg1Aps8RJtxScLCvGrjWuM7MXTjw9r50p6FFjg/viewform?embedded=true" width="100%" height="2553" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>';
const googleFormIframe = () => ({
    __html: iframe
})

export default function VolunteerForm() {
    const classes = useStyles();

    return (
        <>
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
                <Paper>
                    <Grow in={true}>
                        <div style={{ padding: '20px' }}>
                            <div dangerouslySetInnerHTML={googleFormIframe()} />
                        </div>
                    </Grow>
                </Paper>
            </Grid>
        </Grid>
        </>
    );
}