import React from "react";

export const Todo = (props) => {
  return (
    <div>
      {props.content}
      <button class="delete is-pulled-right" onClick={() => { props.onDelete(props.id) }}></button>
    </div>
  );
}