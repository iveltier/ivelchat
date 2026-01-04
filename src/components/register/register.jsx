import React, { useState } from "react";
import styles from "./register.module.css";
import { Link } from "react-router-dom";
import Logo from "../home/logo/logo";

function Register() {
	const [errorMsg, setErrorMsg] = useState("");

	const handleRegister = () => {
		setErrorMsg(
			<>
				An error has occurred. Please try again later or{" "}
				<Link to="/homepage" className={styles.link}>
					return as a guest
				</Link>
				.
			</>,
		);
	};
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
}

export default Register;
