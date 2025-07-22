import React, { useState } from "react";
import "./App.css";
import { FiCopy } from "react-icons/fi"; // 👈 Import Copy Icon
import generateIcon from "./assets/generate.png";

const App = () => {
  const [password, setPassword] = useState("");
  const length = 12;

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "~-!@#$%^&*()<>?_+";
  const allChars = upperCase + lowerCase + number + symbol;

  const createPassword = () => {
    let pwd = "";
    pwd += upperCase[Math.floor(Math.random() * upperCase.length)];
    pwd += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    pwd += number[Math.floor(Math.random() * number.length)];
    pwd += symbol[Math.floor(Math.random() * symbol.length)];

    while (pwd.length < length) {
      pwd += allChars[Math.floor(Math.random() * allChars.length)];
    }

    setPassword(pwd);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <>
    <h1 className=" mb-15 text-4xl font-bold text-white flex text-center justify-center">&lt;//... Random Password Generate App...//&gt;</h1>
      <div className="container">
        <h1 className=" text-white text-xl">
          Generate a <br />
          <span>Random Password</span>
        </h1>

        <div className="display flex justify-center ">
          <input
            className="bg-white"
            type="text"
            value={password}
            readOnly
            placeholder="Password"
          />

          {/* ✅ New React Icon button */}
          <button onClick={copyPassword} className="copy-btn">
            <FiCopy size={22} />
          </button>
        </div>

        <button onClick={createPassword} className="pass flex justify-center">
          <img src={generateIcon} alt="Generate" />
          Generate Password
        </button>
      </div>
    </>
  );
};

export default App;
