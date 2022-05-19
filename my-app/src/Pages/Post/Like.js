import React from "react";
import logo from "./like1.png";
import logo2 from "./comment.png";
import logo3 from "./share.png";

function Like() {
  return (
    <div class="like">
      <img src={logo} alt="Logo" />
      <img src={logo2} alt="Logo" />
      <img src={logo3} alt="Logo" />
    </div>
  );
}

export { Like };
