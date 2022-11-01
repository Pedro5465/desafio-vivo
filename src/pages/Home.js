import React, { useState, useEffect } from "react";
import Header from "../components/header";
import ImageLoading from "../components/imageLoading/index";
import Video from "../components/video";
import Card from "../components/Card";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function Home() {
  const [state, setState] = useState(null);

  console.log(state);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY) {
        setState(window.scrollY);
      } else {
        setState(false);
      }
    });
  });

  return (
    <>
      <div className="conatainer-global">
        <Header />
        <div className="container-image-loading">
          <ImageLoading />
        </div>
        <h1>Projeto</h1>
        <Video />

        <a href="https://www.instagram.com/ada.pdhp/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png"
            width="50"
          ></img>
        </a>
        <a href="https://www.youtube.com/watch?v=6n1Er478O-I">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
            width="50"
          ></img>
        </a>
        <div className="">
          <div className="">
            <div className="">
              <Card title={""} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
