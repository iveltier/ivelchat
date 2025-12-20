import React, { useState } from "react";
import styles from "./register.module.css";
import { Link } from "react-router-dom";

function Register() {
	const [errorMsg, seterrorMsg] = useState("")

	const handleRegister = () => {
		seterrorMsg("An error has occured. Please try again later or return as a guest")

	}

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>iveltier.site.register</h1>
			<input
				type="text"
				placeholder="username"
				className={styles.loginInput}
			/>
			<input
				type="text"
				placeholder="email"
				className={styles.loginInput}
			/>

			<input
				type="password"
				placeholder="password"
				className={styles.loginInput}
			/>

			<button className={styles.loginBtn} onClick={handleRegister}>
				Register
			</button>
			<span className={styles.span}>
				Already have an account? <Link to="/">Login here</Link>
			</span>

			<div>{errorMsg}</div>
		</div>
	);
}

export default Register;
