import React from "react";

export default function FeedbackComponente(props) {
  return (
    <>
      <div id="panel" class="panel-container">
        <strong>{props.title}</strong>
        <div class="ratings-container">
          <div class="rating active">
            <img alt="" src={props.img} />
            <small>{props.resul}</small>
          </div>
        </div>
        <strong>{props.name}</strong>
      </div>
    </>
  );
}
