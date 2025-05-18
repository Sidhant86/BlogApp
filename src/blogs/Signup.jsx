/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { blogApi } from "./api";
import toast from "react-hot-toast";

const Signup = () => {
	const [signupData, setSignupData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
		setSignupData({ ...signupData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (signupData.password !== signupData.confirmPassword) {
			alert("Passwords do not match!");
			return;
		}

		const res = await blogApi("post", "signup", signupData);
		setSignupData({
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
		if (!res || !res.data) {
			toast.error("Signup failed");
			return;
		}
		toast.success("User created successfully");
		navigate("/login");
	};

	return (
		<div style={styles.container}>
			<div style={styles.card}>
				<div style={styles.header}>Create Account</div>
				<div style={styles.body}>
					<h2 style={styles.heading}>Sign Up</h2>
					<p style={styles.subheading}>Join our community today</p>
					<form onSubmit={handleSubmit} style={styles.form}>
						<input
							type="text"
							name="name"
							placeholder="Full Name"
							required
							value={signupData.name}
							onChange={handleChange}
							style={styles.input}
						/>
						<input
							type="email"
							name="email"
							placeholder="Email Address"
							required
							value={signupData.email}
							onChange={handleChange}
							style={styles.input}
						/>
						<input
							type="password"
							name="password"
							placeholder="Password"
							required
							value={signupData.password}
							onChange={handleChange}
							style={styles.input}
						/>
						<input
							type="password"
							name="confirmPassword"
							placeholder="Confirm Password"
							required
							value={signupData.confirmPassword}
							onChange={handleChange}
							style={styles.input}
						/>
						<button type="submit" style={styles.button}>
							<span style={{ marginRight: 8 }}>➡</span> Sign Up
						</button>
					</form>
					<p style={styles.linkText}>
						Already have an account?{" "}
						<Link to="/login" style={styles.link}>
							Login
						</Link>
					</p>

					<hr style={styles.hr} />
					<p style={styles.terms}>
						By signing up, you agree to our{" "}
						<span style={styles.policyLink}>Terms of Service</span> and{" "}
						<span style={styles.policyLink}>Privacy Policy</span>
					</p>
				</div>
			</div>
			<p style={styles.footer}>© 2025 All Rights Reserved</p>
		</div>
	);
};

const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		minHeight: "100vh",
		backgroundColor: "#f0f2f5",
		padding: "20px",
	},
	card: {
		width: "100%",
		maxWidth: "400px",
		backgroundColor: "#ffffff",
		borderRadius: "12px",
		overflow: "hidden",
		boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
	},
	header: {
		backgroundColor: "#1976D2",
		color: "white",
		textAlign: "center",
		fontWeight: "bold",
		padding: "14px",
		fontSize: "18px",
	},
	body: {
		padding: "25px",
	},
	heading: {
		fontSize: "22px",
		fontWeight: "bold",
		marginBottom: "5px",
		textAlign: "center",
		color: "#333",
	},
	subheading: {
		fontSize: "14px",
		color: "#777",
		textAlign: "center",
		marginBottom: "20px",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		gap: "14px",
	},
	input: {
		padding: "12px",
		borderRadius: "6px",
		border: "1px solid #ccc",
		fontSize: "14px",
	},
	button: {
		padding: "12px",
		backgroundColor: "#1976D2",
		color: "white",
		border: "none",
		borderRadius: "6px",
		fontWeight: "bold",
		cursor: "pointer",
		fontSize: "15px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		transition: "background-color 0.3s",
	},
	linkText: {
		marginTop: "16px",
		fontSize: "13px",
		textAlign: "center",
		color: "#555",
	},
	link: {
		color: "#1976D2",
		fontWeight: "bold",
		textDecoration: "none",
	},
	hr: {
		margin: "20px 0 10px 0",
		border: "none",
		borderTop: "1px solid #ddd",
	},
	terms: {
		fontSize: "12px",
		color: "#888",
		textAlign: "center",
	},
	policyLink: {
		color: "#1976D2",
		textDecoration: "underline",
		cursor: "pointer",
	},
	footer: {
		marginTop: "10px",
		fontSize: "12px",
		color: "#888",
	},
};

export default Signup;