import React, { useState } from "react";
import styles from "./login.module.css";
import { Link } from "react-router";

function Login() {

	const [errorMsg, seterrorMsg] = useState("")

	const handleLogin = () => {
		seterrorMsg("An error has occured. Please try again later or return as a guest")
	}
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>iveltier.site.login</h1>
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
				No Account yet? <Link to="/register">Register here</Link> or <Link to="/startseite">return as Guest</Link>
			</span>

			<div>{errorMsg}</div>
		</div>
	);
}

export default Login;
