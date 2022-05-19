import React from "react";
import "./style.css";
function Gallery() {
  return (
    <>
      <div>You are at Gallery </div>
      <div className="images">
        <img
          className="image1"
          src="https://a-z-animals.com/media/tiger_laying_hero_background.jpg"
        />
        <img
          className="image1"
          src="https://cdn.vox-cdn.com/thumbor/ZRlvJWfILYtXnuk9hDljqYcnIyA=/0x0:3504x2336/1200x800/filters:focal(1236x1025:1796x1585)/cdn.vox-cdn.com/uploads/chorus_image/image/65816344/pig_GettyImages_131967915.0.jpg"
        />
        <img
          className="image1"
          src="https://navs.org/wp-content/uploads/bb-plugin/cache/bunny-landscape.jpg"
        />
      </div>
    </>
  );
}

export { Gallery };

{
  /* //<img src="https://a-z-animals.com/media/tiger_laying_hero_background.jpg" />
//     <img src="https://cdn.vox-cdn.com/thumbor/ZRlvJWfILYtXnuk9hDljqYcnIyA=/0x0:3504x2336/1200x800/filters:focal(1236x1025:1796x1585)/cdn.vox-cdn.com/uploads/chorus_image/image/65816344/pig_GettyImages_131967915.0.jpg" />
//     <img src="https://navs.org/wp-content/uploads/bb-plugin/cache/bunny-landscape.jpg" /> */
}
