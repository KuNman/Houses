import React from 'react';

function Details(props) {
  return (
    <div>{props.history.location.state.id}</div>
  );
}
export default Details;
