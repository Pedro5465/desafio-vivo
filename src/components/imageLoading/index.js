import React from "react";
import Image from "../../image/logo.png";

export default function ImageLoading() {
  return <img className="imageLoading" src={Image} width={100} />;
}