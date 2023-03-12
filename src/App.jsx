import { useState } from "react";
import React from "react";
import SocmedCont from "./components/socmedCont";
import whatsappLogo from "./assets/whatsapp.svg";
import photoProfile from "./assets/photo-profile.png";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import menuIcon from "./assets/menuIcon.svg";
import Notif from "./components/notifications";
import sunIcon from "./assets/sunIcon.svg";

function App() {
  if (window.innerWidth > 768) {
    return (
      <div className="bg-black h-screen w-screen">
        <div className="w-max m-auto lg:block">
          <DeviceFrameset
            device="iPhone X"
            color="gold"
            potrait
            height={window.innerHeight - 80}
          >
            <Notif />
            <div className="float-right px-2 py-2">
              <img src={menuIcon} alt="" />
            </div>
            <div className="h-full py-12 bg-gradient-to-b from-lime-200 via-cyan-300 to-cyan-200">
              <div className="w-fit mx-auto">
                <img src={sunIcon} alt="" />
              </div>
              <div className="w-fit m-auto py-2 ">
                {/* <div className="bg-black rounded-full fixed opacity-20 w-28 z-10 h-28">
          
              </div> */}
                <a href="https://reactjs.org" target="_blank">
                  <img
                    src={photoProfile}
                    className="logo react hover:drop-shadow-2xl hover:shadow-none rounded-full w-28 bg-opacity-20 bg-black shadow-inner shadow-gray-500 z-20"
                    alt="React logo"
                  />
                </a>
              </div>
              <div className="py-4">
                <div className="w-fit m-auto">
                  <SocmedCont />
                  <SocmedCont />
                  <SocmedCont />
                  <SocmedCont />
                  <SocmedCont />
                </div>
              </div>
              <footer className="">
                <div className="w-fit m-auto">
                  Copyright © 2023 Naufal Nasrullah ∙ All Rights Reserved
                </div>
              </footer>
            </div>
          </DeviceFrameset>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-black h-screen w-screen">
        <div className="w-max m-auto">
          <Notif />
          <div className="float-right px-2 py-2">
            <img src={menuIcon} alt="" />
          </div>
          <div className="h-full py-12 bg-gradient-to-b from-lime-200 via-cyan-300 to-cyan-200">
            <div className="w-fit mx-auto">
              <img src={sunIcon} alt="" />
            </div>
            <div className="w-fit m-auto py-2 ">
              {/* <div className="bg-black rounded-full fixed opacity-20 w-28 z-10 h-28">
          
              </div> */}
              <a href="https://reactjs.org" target="_blank">
                <img
                  src={photoProfile}
                  className="logo react hover:drop-shadow-2xl hover:shadow-none rounded-full w-28 bg-opacity-20 bg-black shadow-inner shadow-gray-500 z-20"
                  alt="React logo"
                />
              </a>
            </div>
            <div className="">
              <div className="w-fit m-auto">
                <SocmedCont />
                <SocmedCont />
                <SocmedCont />
                <SocmedCont />
                <SocmedCont />
              </div>
            </div>
            <footer className="">
              <div className="w-fit m-auto">
                Copyright © 2023 Naufal Nasrullah ∙ All Rights Reserved
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
