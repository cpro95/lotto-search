import React from 'react';
import Header from '../components/header';
import { Paper, Typography } from '@material-ui/core';

const About = () => {
  return (
    <>
      <Header />
      <Paper style={{ margin: '20px', padding: '20px' }}>
        <Typography variant="h5">
          안녕하세요?
          <br />
          역대 로또 당첨 번호를 쉽게 분석할 수 있게 만들었습니다.
          <br />
          각 자리별 당첨 숫자로 패턴 검색 해보세요
          <br />
          행운을 빕니다.
        </Typography>
      </Paper>
    </>
  );
};

export default About;
