import React, { useState } from 'react';
import * as lottoDB from '../lotto_db.json';
import Header from '../components/header';
import { Link } from 'react-router-dom';
import { Paper, Typography } from '@material-ui/core';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Grid,
  Avatar,
  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  deepOrange,
  deepPurple,
  green,
  indigo,
  brown
} from '@material-ui/core/colors';

const useStyles = makeStyles({
  avatar: {
    margin: 5,
    color: '#fff',
    backgroundColor: 'grey',
    textAlign: 'center'
  },
  orangeAvatar: {
    margin: 5,
    color: '#fff',
    backgroundColor: deepOrange[500],
    textAlign: 'center'
  },
  purpleAvatar: {
    margin: 5,
    color: '#fff',
    backgroundColor: deepPurple[500],
    textAlign: 'center'
  },
  greenAvatar: {
    margin: 5,
    color: '#fff',
    backgroundColor: green[500],
    textAlign: 'center'
  },
  indigoAvatar: {
    margin: 5,
    color: '#fff',
    backgroundColor: indigo[500],
    textAlign: 'center'
  },
  brownAvatar: {
    margin: 5,
    color: '#fff',
    backgroundColor: brown[500],
    textAlign: 'center'
  }
});

const ListAll = () => {
  const classes = useStyles();
  // After importing array from files, it returns Object.
  // Your data is in Object.default
  let totalLottoDB = lottoDB.default;
  // console.log(totalLottoDB);

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [number3, setNumber3] = useState('');
  const [number4, setNumber4] = useState('');
  const [number5, setNumber5] = useState('');
  const [number6, setNumber6] = useState('');
  const [filteredLotto, setFilteredLotto] = useState(totalLottoDB);

  const resetQuery = () => {
    setNumber1('');
    setNumber2('');
    setNumber3('');
    setNumber4('');
    setNumber5('');
    setNumber6('');
    setFilteredLotto(totalLottoDB);
  };


  const searchResult = (num1, num2, num3, num4, num5, num6) => {
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    num3 = parseInt(num3, 10);
    num4 = parseInt(num4, 10);
    num5 = parseInt(num5, 10);
    num6 = parseInt(num6, 10);

    var filtered;
    if (
      !isNaN(num1) &&
      isNaN(num2) &&
      isNaN(num3) &&
      isNaN(num4) &&
      isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no1 === num1) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      !isNaN(num2) &&
      isNaN(num3) &&
      isNaN(num4) &&
      isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no2 === num2) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      isNaN(num2) &&
      !isNaN(num3) &&
      isNaN(num4) &&
      isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no3 === num3) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      isNaN(num2) &&
      isNaN(num3) &&
      !isNaN(num4) &&
      isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no4 === num4) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      isNaN(num2) &&
      isNaN(num3) &&
      isNaN(num4) &&
      !isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no5 === num5) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      isNaN(num2) &&
      isNaN(num3) &&
      isNaN(num4) &&
      isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no6 === num6) return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      !isNaN(num2) &&
      isNaN(num3) &&
      isNaN(num4) &&
      isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no1 === num1 && dd.no2 === num2) return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      isNaN(num2) &&
      !isNaN(num3) &&
      isNaN(num4) &&
      isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no1 === num1 && dd.no3 === num3) return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      isNaN(num2) &&
      isNaN(num3) &&
      !isNaN(num4) &&
      isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no1 === num1 && dd.no4 === num4) return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      isNaN(num2) &&
      isNaN(num3) &&
      isNaN(num4) &&
      !isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no1 === num1 && dd.no5 === num5) return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      isNaN(num2) &&
      isNaN(num3) &&
      isNaN(num4) &&
      isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no1 === num1 && dd.no6 === num6) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      !isNaN(num2) &&
      !isNaN(num3) &&
      isNaN(num4) &&
      isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no2 === num2 && dd.no3 === num3) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      !isNaN(num2) &&
      isNaN(num3) &&
      !isNaN(num4) &&
      isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no2 === num2 && dd.no4 === num4) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      !isNaN(num2) &&
      isNaN(num3) &&
      isNaN(num4) &&
      !isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no2 === num2 && dd.no5 === num5) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      !isNaN(num2) &&
      isNaN(num3) &&
      isNaN(num4) &&
      isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no2 === num2 && dd.no6 === num6) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      isNaN(num2) &&
      !isNaN(num3) &&
      !isNaN(num4) &&
      isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no3 === num3 && dd.no4 === num4) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      isNaN(num2) &&
      !isNaN(num3) &&
      isNaN(num4) &&
      !isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no3 === num3 && dd.no5 === num5) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      isNaN(num2) &&
      !isNaN(num3) &&
      isNaN(num4) &&
      isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no3 === num3 && dd.no6 === num6) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      isNaN(num2) &&
      isNaN(num3) &&
      !isNaN(num4) &&
      !isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no4 === num4 && dd.no5 === num5) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      isNaN(num2) &&
      isNaN(num3) &&
      !isNaN(num4) &&
      isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no4 === num4 && dd.no6 === num6) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      isNaN(num2) &&
      isNaN(num3) &&
      isNaN(num4) &&
      !isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no5 === num5 && dd.no6 === num6) return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      !isNaN(num2) &&
      !isNaN(num3) &&
      isNaN(num4) &&
      isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no1 === num1 && dd.no2 === num2 && dd.no3 === num3) return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      !isNaN(num2) &&
      isNaN(num3) &&
      !isNaN(num4) &&
      isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no1 === num1 && dd.no2 === num2 && dd.no4 === num4) return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      !isNaN(num2) &&
      isNaN(num3) &&
      isNaN(num4) &&
      !isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no1 === num1 && dd.no2 === num2 && dd.no5 === num5) return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      !isNaN(num2) &&
      isNaN(num3) &&
      isNaN(num4) &&
      isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no1 === num1 && dd.no2 === num2 && dd.no6 === num6) return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      isNaN(num2) &&
      !isNaN(num3) &&
      !isNaN(num4) &&
      isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no1 === num1 && dd.no3 === num3 && dd.no4 === num4) return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      isNaN(num2) &&
      !isNaN(num3) &&
      isNaN(num4) &&
      !isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no1 === num1 && dd.no3 === num3 && dd.no5 === num5) return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      isNaN(num2) &&
      !isNaN(num3) &&
      isNaN(num4) &&
      isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no1 === num1 && dd.no3 === num3 && dd.no6 === num6) return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      isNaN(num2) &&
      isNaN(num3) &&
      !isNaN(num4) &&
      !isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no1 === num1 && dd.no4 === num4 && dd.no5 === num5) return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      isNaN(num2) &&
      isNaN(num3) &&
      !isNaN(num4) &&
      isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no1 === num1 && dd.no4 === num4 && dd.no6 === num6) return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      isNaN(num2) &&
      isNaN(num3) &&
      isNaN(num4) &&
      !isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no1 === num1 && dd.no5 === num5 && dd.no6 === num6) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      !isNaN(num2) &&
      !isNaN(num3) &&
      !isNaN(num4) &&
      isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no2 === num2 && dd.no3 === num3 && dd.no4 === num4) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      !isNaN(num2) &&
      !isNaN(num3) &&
      isNaN(num4) &&
      !isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no2 === num2 && dd.no3 === num3 && dd.no5 === num5) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      !isNaN(num2) &&
      !isNaN(num3) &&
      isNaN(num4) &&
      isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no2 === num2 && dd.no3 === num3 && dd.no6 === num6) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      !isNaN(num2) &&
      isNaN(num3) &&
      !isNaN(num4) &&
      !isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no2 === num2 && dd.no4 === num4 && dd.no5 === num5) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      !isNaN(num2) &&
      isNaN(num3) &&
      !isNaN(num4) &&
      isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no2 === num2 && dd.no4 === num4 && dd.no6 === num6) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      !isNaN(num2) &&
      isNaN(num3) &&
      isNaN(num4) &&
      !isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no2 === num2 && dd.no5 === num5 && dd.no6 === num6) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      isNaN(num2) &&
      !isNaN(num3) &&
      !isNaN(num4) &&
      !isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no3 === num3 && dd.no4 === num4 && dd.no5 === num5) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      isNaN(num2) &&
      !isNaN(num3) &&
      !isNaN(num4) &&
      isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no3 === num3 && dd.no4 === num4 && dd.no6 === num6) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      isNaN(num2) &&
      !isNaN(num3) &&
      isNaN(num4) &&
      !isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no3 === num3 && dd.no5 === num5 && dd.no6 === num6) return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      isNaN(num2) &&
      isNaN(num3) &&
      !isNaN(num4) &&
      !isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no4 === num4 && dd.no5 === num5 && dd.no6 === num6) return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      !isNaN(num2) &&
      !isNaN(num3) &&
      !isNaN(num4) &&
      isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no1 === num1 &&
          dd.no2 === num2 &&
          dd.no3 === num3 &&
          dd.no4 === num4
        )
          return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      !isNaN(num2) &&
      !isNaN(num3) &&
      isNaN(num4) &&
      !isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no1 === num1 &&
          dd.no2 === num2 &&
          dd.no3 === num3 &&
          dd.no5 === num5
        )
          return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      !isNaN(num2) &&
      !isNaN(num3) &&
      isNaN(num4) &&
      isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no1 === num1 &&
          dd.no2 === num2 &&
          dd.no3 === num3 &&
          dd.no6 === num6
        )
          return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      !isNaN(num2) &&
      isNaN(num3) &&
      !isNaN(num4) &&
      !isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no1 === num1 &&
          dd.no2 === num2 &&
          dd.no4 === num4 &&
          dd.no5 === num5
        )
          return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      !isNaN(num2) &&
      isNaN(num3) &&
      !isNaN(num4) &&
      isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no1 === num1 &&
          dd.no2 === num2 &&
          dd.no4 === num4 &&
          dd.no6 === num6
        )
          return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      !isNaN(num2) &&
      isNaN(num3) &&
      isNaN(num4) &&
      !isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no1 === num1 &&
          dd.no2 === num2 &&
          dd.no5 === num5 &&
          dd.no6 === num6
        )
          return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      isNaN(num2) &&
      !isNaN(num3) &&
      !isNaN(num4) &&
      !isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no1 === num1 &&
          dd.no3 === num3 &&
          dd.no4 === num4 &&
          dd.no5 === num5
        )
          return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      isNaN(num2) &&
      !isNaN(num3) &&
      !isNaN(num4) &&
      isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no1 === num1 &&
          dd.no3 === num3 &&
          dd.no4 === num4 &&
          dd.no6 === num6
        )
          return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      isNaN(num2) &&
      !isNaN(num3) &&
      isNaN(num4) &&
      !isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no1 === num1 &&
          dd.no3 === num3 &&
          dd.no5 === num5 &&
          dd.no6 === num6
        )
          return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      isNaN(num2) &&
      isNaN(num3) &&
      !isNaN(num4) &&
      !isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no1 === num1 &&
          dd.no4 === num4 &&
          dd.no5 === num5 &&
          dd.no6 === num6
        )
          return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      !isNaN(num2) &&
      !isNaN(num3) &&
      !isNaN(num4) &&
      !isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no2 === num2 &&
          dd.no3 === num3 &&
          dd.no4 === num4 &&
          dd.no5 === num5
        )
          return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      !isNaN(num2) &&
      !isNaN(num3) &&
      !isNaN(num4) &&
      isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no2 === num2 &&
          dd.no3 === num3 &&
          dd.no4 === num4 &&
          dd.no6 === num6
        )
          return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      !isNaN(num2) &&
      !isNaN(num3) &&
      isNaN(num4) &&
      !isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no2 === num2 &&
          dd.no3 === num3 &&
          dd.no5 === num5 &&
          dd.no6 === num6
        )
          return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      !isNaN(num2) &&
      isNaN(num3) &&
      !isNaN(num4) &&
      !isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no2 === num2 &&
          dd.no4 === num4 &&
          dd.no5 === num5 &&
          dd.no6 === num6
        )
          return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      isNaN(num2) &&
      !isNaN(num3) &&
      !isNaN(num4) &&
      !isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no3 === num3 &&
          dd.no4 === num4 &&
          dd.no5 === num5 &&
          dd.no6 === num6
        )
          return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      !isNaN(num2) &&
      !isNaN(num3) &&
      !isNaN(num4) &&
      !isNaN(num5) &&
      isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no1 === num1 &&
          dd.no2 === num2 &&
          dd.no3 === num3 &&
          dd.no4 === num4 &&
          dd.no5 === num5
        )
          return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      !isNaN(num2) &&
      !isNaN(num3) &&
      !isNaN(num4) &&
      isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no1 === num1 &&
          dd.no2 === num2 &&
          dd.no3 === num3 &&
          dd.no4 === num4 &&
          dd.no6 === num6
        )
          return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      !isNaN(num2) &&
      !isNaN(num3) &&
      isNaN(num4) &&
      !isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no1 === num1 &&
          dd.no2 === num2 &&
          dd.no3 === num3 &&
          dd.no5 === num5 &&
          dd.no6 === num6
        )
          return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      !isNaN(num2) &&
      isNaN(num3) &&
      !isNaN(num4) &&
      !isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no1 === num1 &&
          dd.no2 === num2 &&
          dd.no4 === num4 &&
          dd.no5 === num5 &&
          dd.no6 === num6
        )
          return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      isNaN(num2) &&
      !isNaN(num3) &&
      !isNaN(num4) &&
      !isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no1 === num1 &&
          dd.no3 === num3 &&
          dd.no4 === num4 &&
          dd.no5 === num5 &&
          dd.no6 === num6
        )
          return true;
        else return false;
      });
    }
    if (
      isNaN(num1) &&
      !isNaN(num2) &&
      !isNaN(num3) &&
      !isNaN(num4) &&
      !isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no2 === num2 &&
          dd.no3 === num3 &&
          dd.no4 === num4 &&
          dd.no5 === num5 &&
          dd.no6 === num6
        )
          return true;
        else return false;
      });
    }
    if (
      !isNaN(num1) &&
      !isNaN(num2) &&
      !isNaN(num3) &&
      !isNaN(num4) &&
      !isNaN(num5) &&
      !isNaN(num6)
    ) {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no1 === num1 &&
          dd.no2 === num2 &&
          dd.no3 === num3 &&
          dd.no4 === num4 &&
          dd.no5 === num5 &&
          dd.no6 === num6
        )
          return true;
        else return false;
      });
    }

    setFilteredLotto(filtered);
  };

  const handleChange1 = e => {
    e.preventDefault();
    // console.log(e.target.value);
    if (e.target.value.trim() === '') {
      setFilteredLotto(totalLottoDB);
      setNumber1('');
    } else {
      let inputData = parseInt(e.target.value);
      // console.log('inputData :' + inputData);
      if (e.target.value >= 0 && inputData < 46) {
        setNumber1(e.target.value);
        if (inputData > 0) {
          searchResult(inputData, number2, number3, number4, number5, number6);
        }
      }
    }
  };
  const handleChange2 = e => {
    e.preventDefault();
    // console.log(e.target.value);
    if (e.target.value.trim() === '') {
      setNumber2('');
    } else {
      let inputData = parseInt(e.target.value);
      // console.log('inputData :' + inputData);
      if (e.target.value >= 0 && inputData < 46) {
        setNumber2(e.target.value);
        if (inputData > 0) {
          searchResult(number1, inputData, number3, number4, number5, number6);
        }
      }
    }
  };
  const handleChange3 = e => {
    e.preventDefault();
    // console.log(e.target.value);
    if (e.target.value.trim() === '') {
      setNumber3('');
    } else {
      let inputData = parseInt(e.target.value);
      // console.log('inputData :' + inputData);
      if (e.target.value >= 0 && inputData < 46) {
        setNumber3(e.target.value);
        if (inputData > 0) {
          searchResult(number1, number2, inputData, number4, number5, number6);
        }
      }
    }
  };
  const handleChange4 = e => {
    e.preventDefault();
    // console.log(e.target.value);
    if (e.target.value.trim() === '') {
      setNumber4('');
    } else {
      let inputData = parseInt(e.target.value);
      // console.log('inputData :' + inputData);
      if (e.target.value >= 0 && inputData < 46) {
        setNumber4(e.target.value);
        if (inputData > 0) {
          searchResult(number1, number2, number3, inputData, number5, number6);
        }
      }
    }
  };
  const handleChange5 = e => {
    e.preventDefault();
    // console.log(e.target.value);
    if (e.target.value.trim() === '') {
      setNumber5('');
    } else {
      let inputData = parseInt(e.target.value);
      // console.log('inputData :' + inputData);
      if (e.target.value >= 0 && inputData < 46) {
        setNumber5(e.target.value);
        if (inputData > 0) {
          searchResult(number1, number2, number3, number4, inputData, number6);
        }
      }
    }
  };
  const handleChange6 = e => {
    e.preventDefault();
    // console.log(e.target.value);
    if (e.target.value.trim() === '') {
      setNumber6('');
    } else {
      let inputData = parseInt(e.target.value);
      // console.log('inputData :' + inputData);
      if (e.target.value >= 0 && inputData < 46) {
        setNumber6(e.target.value);
        if (inputData > 0) {
          searchResult(number1, number2, number3, number4, number5, inputData);
        }
      }
    }
  };

  return (
    <>
      <Header />
      <Paper>
        <Typography
          variant="h4"
          style={{ textAlign: 'center', padding: '20px' }}
        >
          Search My Data
        </Typography>
      </Paper>
      <Button
        variant="contained"
        style={{
          background: 'purple',
          color: 'white',
          width: '100%',
          marginTop: '10px',
          marginBottom: '10px'
        }}
        onClick={resetQuery}
      >
        Reset
      </Button>

      <Grid container justify="center" alignItems="center">
        <Grid item xs={2}>
          <TextField
            value={number1}
            onChange={handleChange1}
            margin="dense"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            value={number2}
            onChange={handleChange2}
            margin="dense"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            value={number3}
            onChange={handleChange3}
            margin="dense"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            value={number4}
            onChange={handleChange4}
            margin="dense"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            value={number5}
            onChange={handleChange5}
            margin="dense"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            value={number6}
            onChange={handleChange6}
            margin="dense"
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Grid container justify="center" alignItems="center">
        <Grid item xs={2}>
          <Avatar className={classes.avatar}>{number1}</Avatar>
        </Grid>
        <Grid item xs={2}>
          <Avatar className={classes.orangeAvatar}>{number2}</Avatar>
        </Grid>
        <Grid item xs={2}>
          <Avatar className={classes.purpleAvatar}>{number3}</Avatar>
        </Grid>
        <Grid item xs={2}>
          <Avatar className={classes.greenAvatar}>{number4}</Avatar>
        </Grid>
        <Grid item xs={2}>
          <Avatar className={classes.indigoAvatar}>{number5}</Avatar>
        </Grid>
        <Grid item xs={2}>
          <Avatar className={classes.brownAvatar}>{number6}</Avatar>
        </Grid>
      </Grid>

      <Table>
        <TableHead>
          <TableRow style={{ background: 'black' }}>
            <TableCell>
              <Typography
                variant="h6"
                style={{ fontSize: '1.2rem', color: 'white', marginTop: '3px' }}
              >
                Total: {filteredLotto.length}
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredLotto.map((d, i) => (
            <TableRow
              key={i}
              style={
                i % 2 ? { background: '#dee2e6' } : { background: 'white' }
              }
            >
              <TableCell>
                <Link
                  style={{ textDecoration: 'none' }}
                  to={{
                    pathname: `${i}`,
                    state: d
                  }}
                >
                  <Typography variant="inherit" style={{ fontSize: '1rem' }}>
                    {d.round} / {d.date} / {d.no1}-{d.no2}-{d.no3}-{d.no4}-
                    {d.no5}-{d.no6}
                  </Typography>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ListAll;
