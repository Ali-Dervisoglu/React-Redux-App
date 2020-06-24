import React from "react";
import { connect } from "react-redux";

import { getDog } from "../actions";

const DogImage = props => {
  const fetchDog = e => {
    e.preventDefault();
    props.getDog();
  };

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
