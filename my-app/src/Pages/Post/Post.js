import React from "react";
import { Image } from "./content";
import { User } from "./user";
import "./Post.css";
import { Like } from "./Like";
import { Text } from "./text";

function Post({ name, avatarSrc, text, postSrc }) {
  return (
    <div className="App">
      <User name={name} avatarSrc={avatarSrc} />
      <Image postSrc={postSrc} />
      <Like />
      <Text text={text} />
    </div>
  );
}

export { Post };
