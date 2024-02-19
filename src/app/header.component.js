import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import '../App.css';
import { trackEvent } from '../utils/analytics';

const HeaderComponent = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <Typography variant="h4" align='center' >Mike Berago</Typography>
                <Typography variant='h5' align='center' gutterBottom>Web and Mobile Software Developer</Typography>

                <Grid container spacing={2} style={{ marginBottom: 20}}>
                    <Grid item xs={12} md={6} lg={3}>
                    <a onClick={() => trackEvent('youtube_clicked')} 
                        className='bio-links' href="https://www.youtube.com/@code_hackery" target="_blank"
                    >
                        <Item className='link-item'>YouTube Channel</Item>
                    </a>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                    <a onClick={() => trackEvent('github_clicked')}
                        className='bio-links' href="https://github.com/mycoberago" target="_blank"
                    ><Item className='link-item'>GitHub</Item></a>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                    <a onClick={() => trackEvent('linkedin_clicked')}
                        className='bio-links' href="https://www.linkedin.com/in/mikeberago/" target="_blank"
                    ><Item className='link-item'>Linkedin</Item></a>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                    <a onClick={() => trackEvent('contact_clicked')}
                        className='bio-links' href="mailto:mycoberago@gmail.com" target="_blank"
                    ><Item className='link-item'>Contact</Item></a>
                    </Grid>
                </Grid>
        </>
    )
}

export default HeaderComponent