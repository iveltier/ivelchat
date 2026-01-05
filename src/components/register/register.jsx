import React, { useState } from "react";
import styles from "./register.module.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../home/logo/logo";
import loaderGif from "../../assets/loader.gif";

function Register() {
	const navigate = useNavigate();
	const [errorMsg, setErrorMsg] = useState("");

	const [isLoading, setIsLoading] = useState(false);

	const goHome = () => {
		setIsLoading(true);
		setTimeout(
			() => {
				navigate("/homepage");
			},
			Math.floor(Math.random() * 1000 + 3000),
		);
	};

	const handleRegister = () => {
		setErrorMsg(
			<>
				An error has occurred. Please try again later or{" "}
				<button className={styles.linkAsBtn} onClick={goHome}>
					return as a guest
				</button>
				.
			</>,
		);
	};
	if (!isLoading)
		return (
			<>
				<Logo />
				<div className={styles.container}>
					<h1 className={styles.heading}>ivelchat.register</h1>
					<input
						type="text"
						placeholder="username"
						className={styles.registerInput}
					/>
					<input
						type="text"
						placeholder="email"
						className={styles.registerInput}
					/>

					<input
						type="password"
						placeholder="password"
						className={styles.registerInput}
					/>

					<button className={styles.registerBtn} onClick={handleRegister}>
						Register
					</button>
					<span className={styles.span}>
						Already have an account?{" "}
						<Link className={styles.link} to="/">
							Login here
						</Link>
					</span>

					<div>{errorMsg}</div>
				</div>
			</>
		);
	else {
		return (
			<>
				<Logo />
				<div className={styles.loaderContainer}>
					<img src={loaderGif} className={styles.loader} alt="Loading..." />
				</div>
			</>
		);
	}
}

export default Register;
