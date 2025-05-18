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
		setLoginData({
			email: "",
			password: "",
		});
		navigate("/")
		// Call backend API here
	};

	return (
		<div style={styles.container}>
			<h2 style={styles.heading}>Login</h2>
			<form
				onSubmit={handleSubmit}
				style={styles.form}>
				<input
					type="email"
					name="email"
					placeholder="Email"
					required
					value={loginData.email}
					onChange={handleChange}
					style={styles.input}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					required
					value={loginData.password}
					onChange={handleChange}
					style={styles.input}
				/>
				<button
					type="submit"
					style={styles.button}
					onMouseOver={(e) => e.target.style.backgroundColor = "#125DA6"}
					onMouseOut={(e) => e.target.style.backgroundColor = "#1976D2"}
					onMouseDown={(e) => e.target.style.transform = "scale(0.98)"}
					onMouseUp={(e) => e.target.style.transform = "scale(1)"}
				>
					Login
				</button>
			</form>
			<p style={styles.linkText}>
				Don’t have an account? <Link to="/signup" style={styles.link}>Signup</Link>
			</p>
		</div>
	);
};

const styles = {
	container: { 
		textAlign: "center", 
		marginTop: "50px", 
		backgroundColor: "#F5F5F5",
		padding: "30px",
		borderRadius: "10px",
		boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
		width: "350px",
		margin: "auto"
	},
	heading: { 
		color: "#1976D2", 
		fontWeight: "bold", 
		fontSize: "24px" 
	},
	form: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "15px",
		marginTop: "20px"
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

export default Login;
