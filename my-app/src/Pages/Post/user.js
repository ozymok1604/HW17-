import React from "react";
import "./Post";

function User({ name, avatarSrc }) {
  return (
    <div class="user">
      <img class="avatar" src={avatarSrc}></img>
      {name}
    </div>
  );
}

export { User };
