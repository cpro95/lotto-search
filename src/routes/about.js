import React from 'react';
import Header from '../components/header';
import { Paper, Typography } from '@material-ui/core';

const About = () => {
  return (
    <>
      <Header />
      <Paper style={{ margin: '20px', padding: '20px' }}>
        <Typography variant="h5">
          This SPA app is made by ReactJS with Material-UI
          <br />
          You can search the patterns inside of your DB
          <br />
          Good Luck!
        </Typography>
      </Paper>
    </>
  );
};

export default About;
