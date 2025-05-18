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

	//import { Link } from "react-router-dom";

//const Signup = ({ handleSubmit, handleChange, signupData }) => {
		return (
		<div style={styles.container}>
			<div style={styles.card}>
				<h2 style={styles.heading}>Signup</h2>
				<form onSubmit={handleSubmit} style={styles.form}>
					<input
						type="text"
						name="name"
						placeholder="Name"
						required
						value={signupData.name}
						onChange={handleChange}
						style={styles.input}
					/>
					<input
						type="email"
						name="email"
						placeholder="Email"
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
						Signup
					</button>
				</form>
				<p style={styles.linkText}>
					Already have an account?{" "}
					<Link to="/login" style={styles.link}>
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

const styles = {
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
		backgroundImage: "url('https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D')", // Replace with your image URL
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		padding: "20px"
	},
	card: {
		textAlign: "center",
		backgroundColor: "rgba(255, 255, 255, 0.95)", // Slight transparency for contrast
		padding: "30px",
		borderRadius: "12px",
		boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
		width: "100%",
		maxWidth: "400px",
		transition: "transform 0.3s"
	},
	heading: {
		color: "#1976D2",
		fontWeight: "bold",
		fontSize: "24px",
		marginBottom: "15px"
	},
	form: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "15px"
	},
	input: {
		padding: "12px",
		width: "100%",
		borderRadius: "8px",
		border: "1px solid #ccc",
		boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.1)"
	},
	button: {
		padding: "12px 25px",
		backgroundColor: "#1976D2",
		color: "white",
		border: "none",
		borderRadius: "8px",
		cursor: "pointer",
		fontSize: "16px",
		fontWeight: "bold",
		boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
		transition: "background-color 0.3s, transform 0.2s"
	},
	linkText: {
		marginTop: "15px",
		fontSize: "14px",
		color: "#333"
	},
	link: {
		color: "#1976D2",
		textDecoration: "none",
		fontWeight: "bold"
	}
};

export default Signup;
