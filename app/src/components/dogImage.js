import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getDog } from "../actions";

const DogImage = props => {

  const [timer, setTimer] = useState();

  const fetchDog = e => {
    e.preventDefault();
    props.getDog();
  };

  const twoSeconds = e => {
    e.preventDefault();

    const stopDogs = setInterval(() => {
      console.log("hello");
      props.getDog();
    }, 2000)
    setTimer(stopDogs)
  }

  const stopDogs = () => {
    clearInterval(timer);
    setTimer(undefined);
  }

  return (
    <>
      <h2>RANDOM DOG IMAGE!!!!!!1</h2>
      {/* {JSON.stringify(props.dog)
      } */}
      <div>
        {/* <img url={props.dog.url} /> */}
        <img src={props.dog.url} />
      </div>

      <button onClick={fetchDog}>RANDOM DOG IMAGE!!!!1</button>
      <button onClick={twoSeconds}>2 SANIYEEEEEEE</button>
      <button onClick={stopDogs}>STOPPPP</button>
      {/* <button onClick */}
    </>
  );
};

const mapStateToProps = state => ({
  dog: state.dog,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getDog }
)(DogImage);
