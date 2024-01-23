import React from "react";
import Image from "next/image";

import logo from "../assets/TesQuiz_logo_20231023.png";

interface props {
	width: number;
}

const LogoTesQuiz = ({ width }: props) => {
	return <Image src={logo} width={width} alt="Logo TesQuiz" />;
};

export default LogoTesQuiz;
