import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/header';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  Grid,
  Typography
} from '@material-ui/core';
import {
  deepOrange,
  deepPurple,
  green,
  indigo,
  brown,
  red
} from '@material-ui/core/colors';

const useStyles = makeStyles({
  avatar: {
    margin: 5,
    color: '#fff',
    backgroundColor: 'grey'
  },
  orangeAvatar: {
    margin: 5,
    color: '#fff',
    backgroundColor: deepOrange[500]
  },
  purpleAvatar: {
    margin: 5,
    color: '#fff',
    backgroundColor: deepPurple[500]
  },
  greenAvatar: {
    margin: 5,
    color: '#fff',
    backgroundColor: green[500]
  },
  indigoAvatar: {
    margin: 5,
    color: '#fff',
    backgroundColor: indigo[500]
  },
  brownAvatar: {
    margin: 5,
    color: '#fff',
    backgroundColor: brown[500]
  },
  redAvatar: {
    margin: 5,
    color: '#fff',
    backgroundColor: red[500]
  }
});

const Detail = props => {
  const classes = useStyles();
  const detailData = props.location.state;

  const number = () => {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ margin: '10px' }}
      >
        <Avatar className={classes.avatar}>{detailData.no1}</Avatar>
        <Avatar className={classes.orangeAvatar}>{detailData.no2}</Avatar>
        <Avatar className={classes.purpleAvatar}>{detailData.no3}</Avatar>
        <Avatar className={classes.greenAvatar}>{detailData.no4}</Avatar>
        <Avatar className={classes.indigoAvatar}>{detailData.no5}</Avatar>
        <Avatar className={classes.brownAvatar}>{detailData.no6}</Avatar>
        <Typography variant="h6">Bonus</Typography>
        <Avatar className={classes.redAvatar}>{detailData.bonus}</Avatar>
      </Grid>
    );
  };

  return (
    <>
      <Header />
      {number()}

      <Table>
        <TableHead style={{ background: 'black' }}>
          <TableRow>
            <TableCell style={{ color: 'white', fontSize: '1rem' }}>
              {detailData.round}회
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>날짜 : {detailData.date}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              1등 : {detailData.winner1.toLocaleString()}명 /{' '}
              {detailData.amount1.toLocaleString()}원
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              2등 : {detailData.winner2.toLocaleString()}명 /{' '}
              {detailData.amount2.toLocaleString()}원
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              3등 : {detailData.winner3.toLocaleString()}명 /{' '}
              {detailData.amount3.toLocaleString()}원
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              4등 : {detailData.winner4.toLocaleString()}명 /{' '}
              {detailData.amount4.toLocaleString()}원
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              5등 : {detailData.winner5.toLocaleString()}명 /{' '}
              {detailData.amount5.toLocaleString()}원
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default Detail;
