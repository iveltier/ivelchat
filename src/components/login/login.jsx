import { useState } from "react";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router";
import Logo from "../home/logo/logo";
import loaderGif from "../../assets/loader.gif";

function Login() {
	const navigate = useNavigate();
	const [errorMsg, seterrorMsg] = useState("");

	const handleLogin = () => {
		seterrorMsg(
			"An error has occured. Please try again later or return as a guest",
		);
	};

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
	if (!isLoading) {
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
						<button className={styles.linkAsBtn} onClick={goHome}>
							return as Guest
						</button>
					</span>
					<span>{errorMsg}</span>
				</div>
			</>
		);
	} else {
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

export default Login;
