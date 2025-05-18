/** @format */

import React, { useState } from "react";
import { blogApi } from "./api";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
	const [blogData, setBlogData] = useState({
		title: "",
		description: "",
	});
	const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.signupData);
	const [Loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setBlogData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!token) {
			toast.error("Please login to create a blog");
			navigate("/login");
			return;
		}
		try {
			setLoading(true);
            const response = await blogApi("post", "create-blog", { ...blogData, userId: userData._id });
            if(!response || !response.data) {
                toast.error("Blog creation failed");
                setLoading(false);
                return;
            }
			setLoading(false);
			setBlogData({
				title: "",
				description: "",
            });
            toast.success("Blog created successfully");
            navigate("/view-blog");
		} catch (err) {
			console.error("Submission error:", err);
		}
	};

	return (
		<div style={{
			textAlign: "center",
			marginTop: "50px",
			backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUybd8Y3ipswYL_XAWX1O6wOupMxvW60cQBQ&s')",
			backgroundSize: "cover",
			backgroundPosition: "center",
			padding: "30px",
			borderRadius: "10px",
			boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
			width: "400px",
			margin: "auto",
			color: "white"
		}}>
			<h2 style={{ fontWeight: "bold" }}>Create a Blog</h2>
			<p style={{ fontSize: "16px" }}>Fill out the details below and submit</p>

			<form
				onSubmit={handleSubmit}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "15px",
					marginTop: "20px",
					backgroundColor: "rgba(0, 0, 0, 0.6)", // Adds transparency effect
					padding: "20px",
					borderRadius: "8px"
				}}>
				<input
					type="text"
					name="title"
					placeholder="Enter blog title"
					value={blogData.title}
					onChange={handleChange}
					required
					style={{
						padding: "12px",
						width: "100%",
						borderRadius: "5px",
						border: "1px solid #ccc",
						boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.1)"
					}}
				/>

				<textarea
					name="description"
					placeholder="Enter blog description"
					value={blogData.description}
					onChange={handleChange}
					required
					style={{
						padding: "12px",
						width: "100%",
						height: "150px",
						borderRadius: "5px",
						border: "1px solid #ccc",
						boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.1)",
						resize: "none"
					}}
				></textarea>

				<button
					type="submit"
					disabled={Loading}
					style={{
						padding: "12px 25px",
						backgroundColor: "#1E88E5",
						color: "white",
						border: "none",
						borderRadius: "5px",
						cursor: "pointer",
						fontSize: "16px",
						fontWeight: "bold",
						boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
						transition: "background-color 0.3s, transform 0.2s"
					}}
					onMouseOver={(e) => e.target.style.backgroundColor = "#1565C0"}
					onMouseOut={(e) => e.target.style.backgroundColor = "#1E88E5"}
					onMouseDown={(e) => e.target.style.transform = "scale(0.98)"}
					onMouseUp={(e) => e.target.style.transform = "scale(1)"}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default CreateBlog;
