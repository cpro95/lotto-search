import React from "react";
import Header from "../components/header";

const Detail = props => {
  const detailData = props.location.state;

  const number = () => {
    return (
      <div className="text-center">
        <span className="mx-2 btn btn-primary btn-circle">{detailData.no1}</span>
        <span className="mx-2 btn btn-warning btn-circle">{detailData.no2}</span>
        <span className="mx-2 btn btn-secondary btn-circle">{detailData.no3}</span>
        <span className="mx-2 btn btn-info btn-circle">{detailData.no4}</span>
        <span className="mx-2 btn btn-success btn-circle">{detailData.no5}</span>
        <span className="mx-2 btn btn-danger btn-circle">{detailData.no6}</span>
        <span>Bonus</span>
        <span className="mx-2 btn btn-primary btn-circle">{detailData.bonus}</span>
      </div>
    );
  };

  return (
    <section>
      <Header />
      {number()}
      <table className="table table-striped" style={{ marginTop: "15px" }}>
        <thead className="thead-dark">
          <tr>
            <th scope="col">{detailData.round} 회</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>날짜 : {detailData.date}</td>
          </tr>
          <tr>
            <td>
              1등 : {detailData.winner1.toLocaleString()} 명 /{" "}
              {detailData.amount1.toLocaleString()} 원
            </td>
          </tr>
          <tr>
            <td>
              2등 : {detailData.winner2.toLocaleString()} 명 /{" "}
              {detailData.amount2.toLocaleString()} 원
            </td>
          </tr>
          <tr>
            <td>
              3등 : {detailData.winner3.toLocaleString()} 명 /{" "}
              {detailData.amount3.toLocaleString()} 원
            </td>
          </tr>
          <tr>
            <td>
              4등 : {detailData.winner4.toLocaleString()} 명 /{" "}
              {detailData.amount4.toLocaleString()} 원
            </td>
          </tr>
          <tr>
            <td>
              5등 : {detailData.winner5.toLocaleString()} 명 /{" "}
              {detailData.amount5.toLocaleString()} 원
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Detail;
