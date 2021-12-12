import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link, Container, Theme } from '@material-ui/core';

import { Seo, Lazy, DoomsdayTrainer } from '../components';
import { FC } from '../util';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    link: {
        color: theme.palette.text.secondary,
        textDecoration: 'underline'
    }
}));

const PageTwo: FC = () => {
    const styles = useStyles();
    return (
        <Lazy type="fade" delay={500} timeout={1000}>
            <Container maxWidth="md" className={styles.root}>
                <Seo title="Practice" />
                <DoomsdayTrainer />
            </Container>
        </Lazy>
    );
};

export default PageTwo;
