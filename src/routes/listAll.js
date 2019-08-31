import React, { useState } from "react";
import * as lottoDB from "../lotto_db.json";
import Header from "../components/header";
import { Link } from "react-router-dom";

const ListAll = () => {
  // After importing array from files, it returns Object.
  // Your data is in Object.default
  let totalLottoDB = lottoDB.default;
  // console.log(totalLottoDB);

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [number4, setNumber4] = useState("");
  const [number5, setNumber5] = useState("");
  const [number6, setNumber6] = useState("");
  const [filteredLotto, setFilteredLotto] = useState(totalLottoDB);

  const resetQuery = () => {
    console.log(number1);
    setNumber1("");
    setNumber2("");
    setNumber3("");
    setNumber4("");
    setNumber5("");
    setNumber6("");
    setFilteredLotto(totalLottoDB);
  };

  const consoleSearchNumber = no => {
    console.log("inside searchNumber : " + no);
  };

  const searchNumber = (number, no) => {
    console.log("inside searchNumber");
    consoleNumber();
    consoleSearchNumber(no);
    var filtered;
    if (no === "no1") {
      filtered = totalLottoDB.filter(dd => {
        if (dd[no] === parseInt(number, 10)) return true;
        else return false;
      });
    }
    if (no === "no2") {
      filtered = totalLottoDB.filter(dd => {
        if (dd.no1 === parseInt(number1, 10) && dd[no] === parseInt(number, 10))
          return true;
        else return false;
      });
    }
    if (no === "no3") {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no1 === parseInt(number1, 10) &&
          dd.no2 === parseInt(number2, 10) &&
          dd[no] === parseInt(number, 10)
        )
          return true;
        else return false;
      });
    }
    if (no === "no4") {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no1 === parseInt(number1, 10) &&
          dd.no2 === parseInt(number2, 10) &&
          dd.no3 === parseInt(number3, 10) &&
          dd[no] === parseInt(number, 10)
        )
          return true;
        else return false;
      });
    }
    if (no === "no5") {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no1 === parseInt(number1, 10) &&
          dd.no2 === parseInt(number2, 10) &&
          dd.no3 === parseInt(number3, 10) &&
          dd.no4 === parseInt(number4, 10) &&
          dd[no] === parseInt(number, 10)
        )
          return true;
        else return false;
      });
    }
    if (no === "no6") {
      filtered = totalLottoDB.filter(dd => {
        if (
          dd.no1 === parseInt(number1, 10) &&
          dd.no2 === parseInt(number2, 10) &&
          dd.no3 === parseInt(number3, 10) &&
          dd.no4 === parseInt(number4, 10) &&
          dd.no5 === parseInt(number5, 10) &&
          dd[no] === parseInt(number, 10)
        )
          return true;
        else return false;
      });
    }
    setFilteredLotto(filtered);
  };

  const consoleNumber = () => {
    console.log("1 : " + number1);
    console.log("2 : " + number2);
    console.log("3 : " + number3);
    console.log("4 : " + number4);
    console.log("5 : " + number5);
    console.log("6 : " + number6);
  };

  const handleChange1 = e => {
    console.log(e.target.value);
    if (e.target.value.trim() === "") {
      setFilteredLotto(totalLottoDB);
      console.log("inside handlechange1 if blank");
      setNumber1("");
    } else {
      let inputData = parseInt(e.target.value);
      console.log("inputData :" + inputData);
      if (e.target.value >= 0 && inputData < 46) {
        if (inputData > 0) {
          searchNumber(inputData, "no1");
        }
        setNumber1(e.target.value);
      }
    }
  };
  const handleChange2 = e => {
    console.log(e.target.value);
    if (e.target.value.trim() === "") {
      // setFilteredLotto(totalLottoDB);
      console.log("inside handlechange2 if blank");
      setNumber2("");
      searchNumber(number1, "no1");
    } else {
      let inputData = parseInt(e.target.value);
      console.log("inputData :" + inputData);
      if (e.target.value >= 0 && inputData < 46) {
        if (inputData > 0) {
          searchNumber(inputData, "no2");
        }
        setNumber2(e.target.value);
      }
    }
  };
  const handleChange3 = e => {
    console.log(e.target.value);
    if (e.target.value.trim() === "") {
      setNumber3("");
      searchNumber(number2, "no2");
    } else {
      let inputData = parseInt(e.target.value);
      console.log("inputData :" + inputData);
      if (e.target.value >= 0 && inputData < 46) {
        if (inputData > 0) {
          searchNumber(inputData, "no3");
        }
        setNumber3(e.target.value);
      }
    }
  };
  const handleChange4 = e => {
    console.log(e.target.value);
    if (e.target.value.trim() === "") {
      setNumber4("");
      searchNumber(number3, "no3");
    } else {
      let inputData = parseInt(e.target.value);
      console.log("inputData :" + inputData);
      if (e.target.value >= 0 && inputData < 46) {
        if (inputData > 0) {
          searchNumber(inputData, "no4");
        }
        setNumber4(e.target.value);
      }
    }
  };
  const handleChange5 = e => {
    console.log(e.target.value);
    if (e.target.value.trim() === "") {
      setNumber5("");
      searchNumber(number4, "no4");
    } else {
      let inputData = parseInt(e.target.value);
      console.log("inputData :" + inputData);
      if (e.target.value >= 0 && inputData < 46) {
        if (inputData > 0) {
          searchNumber(inputData, "no5");
        }
        setNumber5(e.target.value);
      }
    }
  };
  const handleChange6 = e => {
    console.log(e.target.value);
    if (e.target.value.trim() === "") {
      setNumber6("");
      searchNumber(number5, "no5");
    } else {
      let inputData = parseInt(e.target.value);
      console.log("inputData :" + inputData);
      if (e.target.value >= 0 && inputData < 46) {
        if (inputData > 0) {
          searchNumber(inputData, "no6");
        }
        setNumber6(e.target.value);
      }
    }
  };

  return (
    <section>
      <Header />
      <button className="btn btn-primary btn-sm" onClick={resetQuery}>
        Reset
      </button>
      <div className="container-fluid">
        <div className="input-group input-group-sm mb-3 row">
          <input
            type="text"
            className="form-control col"
            value={number1}
            autoFocus
            onChange={handleChange1}
          />
          <input
            type="text"
            min={1}
            max={45}
            className="form-control col"
            value={number2}
            onChange={handleChange2}
          />
          <input
            type="text"
            min={1}
            max={45}
            className="form-control col"
            value={number3}
            onChange={handleChange3}
          />
          <input
            type="text"
            min={1}
            max={45}
            className="form-control col"
            value={number4}
            onChange={handleChange4}
          />
          <input
            type="text"
            min={1}
            max={45}
            className="form-control col"
            value={number5}
            onChange={handleChange5}
          />
          <input
            type="text"
            min={1}
            max={45}
            className="form-control col"
            value={number6}
            onChange={handleChange6}
          />
        </div>
        <div className="row">
          <div className="col text-center">
            <span className="btn btn-primary btn-circle">{number1}</span>
          </div>
          <div className="col text-center">
            <span className="btn btn-warning btn-circle">{number2}</span>
          </div>
          <div className="col text-center">
            <span className="btn btn-secondary btn-circle">{number3}</span>
          </div>
          <div className="col text-center">
            <span className="btn btn-info btn-circle">{number4}</span>
          </div>
          <div className="col text-center">
            <span className="btn btn-success btn-circle">{number5}</span>
          </div>
          <div className="col text-center">
            <span className="btn btn-danger btn-circle">{number6}</span>
          </div>
        </div>
      </div>

      <h6>Total: {filteredLotto.length} </h6>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Data</th>
          </tr>
        </thead>
        <tbody>
          {filteredLotto.map((d, i) => (
            <tr key={i}>
              <td>
                <Link
                  to={{
                    pathname: `${i}`,
                    state: d
                  }}
                >
                {d.round} / {d.date} / {d.no1}-{d.no2}-{d.no3}-{d.no4}-{d.no5}-
                {d.no6}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div />
    </section>
  );
};

export default ListAll;
