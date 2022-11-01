import React from "react";

export default function Video() {
  return (
    <div className="container-home">
      <iframe
        src="https://www.youtube.com/embed/6n1Er478O-I"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
