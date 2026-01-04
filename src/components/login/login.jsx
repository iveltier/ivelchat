import React, { useState } from "react";
import styles from "./login.module.css";
import { Link } from "react-router";
import Logo from "../home/logo/logo";

function Login() {
	const [errorMsg, seterrorMsg] = useState("");

	const handleLogin = () => {
		seterrorMsg(
			"An error has occured. Please try again later or return as a guest",
		);
	};
	return (
		<>
			<Logo />
			<div className={styles.container}>
				<h1 className={styles.heading}>ivelchat.login</h1>
				<input
					type="text"
					placeholder="username"
					className={styles.loginInput}
				/>
				<input
					type="password"
					placeholder="password"
					className={styles.loginInput}
				/>
				<button className={styles.loginBtn} onClick={handleLogin}>
					Login
				</button>
				<span className={styles.span}>
					No Account yet?{" "}
					<Link to="/register" className={styles.link}>
						Register here
					</Link>{" "}
					or{" "}
					<Link to="/homepage" className={styles.link}>
						return as Guest
					</Link>
				</span>
				<span>{errorMsg}</span>
			</div>
		</>
	);
}

export default Login;
