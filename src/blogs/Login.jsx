/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { blogApi } from "./api";
import { setToken, setSignupData } from "../slice/authSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Login = () => {
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setLoginData({ ...loginData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await blogApi("post", "login", loginData);
		const resData = res?.data;
		if (!resData) {
			toast.error("Login failed");
			return;
		}
		toast.success("Login successful");
		dispatch(setToken(resData?.user?.token));
		dispatch(setSignupData(resData?.user));
		setLoginData({ email: "", password: "" });
		navigate("/");
	};

	return (
		<div style={styles.wrapper}>
			<div style={styles.card}>
				<div style={styles.header}>Welcome Back</div>
				<h2 style={styles.title}>Account Login</h2>
				<p style={styles.subtitle}>Please enter your credentials to continue</p>

				<form onSubmit={handleSubmit} style={styles.form}>
					<div style={styles.inputGroup}>
						<span style={styles.icon}>📧</span>
						<input
							type="email"
							name="email"
							placeholder="Email Address"
							required
							value={loginData.email}
							onChange={handleChange}
							style={styles.input}
						/>
					</div>

					<div style={styles.inputGroup}>
						<span style={styles.icon}>🔒</span>
						<input
							type="password"
							name="password"
							placeholder="Password"
							required
							value={loginData.password}
							onChange={handleChange}
							style={styles.input}
						/>
					</div>

					<button type="submit" style={styles.button}>
						<span style={{ marginRight: 8 }}>➡</span> Login
					</button>
				</form>

				<p style={styles.signupText}>
					Don’t have an account? <Link to="/signup" style={styles.link}>Sign Up</Link>
				</p>

				<div style={styles.footerLinks}>
					<Link to="/forgot-password" style={styles.footerLink}>Forgot Password?</Link>
					<span style={styles.divider}>|</span>
					<Link to="/help" style={styles.footerLink}>Need Help?</Link>
				</div>
			</div>
			<p style={styles.rights}>© 2025 All Rights Reserved</p>
		</div>
	);
};

const styles = {
	wrapper: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		minHeight: "100vh",
		backgroundColor: "#f3f4f6",
		fontFamily: "sans-serif"
	},
	card: {
		width: "100%",
		maxWidth: "400px",
		backgroundColor: "#fff",
		padding: "30px 20px",
		borderRadius: "12px",
		boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
		textAlign: "center"
	},
	header: {
		backgroundColor: "#1976D2",
		color: "white",
		padding: "15px",
		borderTopLeftRadius: "12px",
		borderTopRightRadius: "12px",
		margin: "-30px -20px 20px",
		fontSize: "18px",
		fontWeight: "bold"
	},
	title: {
		fontSize: "20px",
		fontWeight: "600",
		marginBottom: "8px"
	},
	subtitle: {
		fontSize: "14px",
		color: "#666",
		marginBottom: "20px"
	},
	form: {
		display: "flex",
		flexDirection: "column",
		gap: "15px"
	},
	inputGroup: {
		display: "flex",
		alignItems: "center",
		border: "1px solid #ccc",
		borderRadius: "8px",
		padding: "10px"
	},
	icon: {
		marginRight: "8px",
		fontSize: "16px"
	},
	input: {
		border: "none",
		outline: "none",
		width: "100%",
		fontSize: "14px"
	},
	button: {
		backgroundColor: "#1976D2",
		color: "#fff",
		padding: "12px",
		border: "none",
		borderRadius: "8px",
		cursor: "pointer",
		fontSize: "16px",
		fontWeight: "bold",
		boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
	},
	signupText: {
		marginTop: "16px",
		fontSize: "14px"
	},
	link: {
		color: "#1976D2",
		textDecoration: "none",
		fontWeight: "600"
	},
	footerLinks: {
		display: "flex",
		justifyContent: "center",
		gap: "10px",
		marginTop: "12px",
		fontSize: "13px"
	},
	footerLink: {
		color: "#666",
		textDecoration: "none"
	},
	divider: {
		color: "#aaa"
	},
	rights: {
		marginTop: "15px",
		fontSize: "12px",
		color: "#888"
	}
};

export default Login;