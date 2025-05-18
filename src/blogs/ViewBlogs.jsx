/** @format */

import React, { useEffect, useState } from "react";
import { blogApi } from "./api";
import toast from "react-hot-toast";

const ViewBlogs = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const res = await blogApi("get", "get-blogs", {});
				setBlogs(res?.data?.blog);
				if (!res || !res.data) {
					toast.error("Error in fetching blogs");
					return;
				}
				else {
					toast.success("Blogs fetched successfully");
				}
			} catch (err) {
				console.error("Error fetching blogs:", err);
			}
		};

		fetchBlogs();
	}, []);

	return (
	<div style={{
		padding: "30px",
		backgroundColor: "#F5F5F5",
		minHeight: "100vh"
	}}>
		<h2 style={{
			textAlign: "center",
			color: "#2E7D32",
			fontWeight: "bold",
			fontSize: "28px",
			marginBottom: "20px"
		}}>
			All Blogs
		</h2>

		{blogs.length === 0 ? (
			<p style={{
				textAlign: "center",
				fontSize: "18px",
				color: "#757575"
			}}>
				Loading blogs...
			</p>
		) : (
			blogs.length > 0 &&
			blogs?.map((blog) => (
				<div
					key={blog.id}
					style={{
						border: "1px solid #ccc",
						padding: "20px",
						borderRadius: "12px",
						margin: "15px auto",
						maxWidth: "600px",
						boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
						backgroundColor: "#FFFFFF",
						transition: "transform 0.3s, box-shadow 0.3s"
					}}
					onMouseOver={(e) => {
						e.currentTarget.style.transform = "scale(1.02)";
						e.currentTarget.style.boxShadow = "0px 6px 14px rgba(0, 0, 0, 0.2)";
					}}
					onMouseOut={(e) => {
						e.currentTarget.style.transform = "scale(1)";
						e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.15)";
					}}
				>
					<h3 style={{
						color: "#1565C0",
						fontSize: "22px",
						fontWeight: "bold",
						marginBottom: "10px"
					}}>
						{blog.title}
					</h3>
					<p style={{
						marginTop: "10px",
						fontSize: "16px",
						lineHeight: "1.6",
						color: "#333"
					}}>
						{blog.description}
					</p>
					<p style={{
						fontStyle: "italic",
						color: "#777",
						marginTop: "15px",
						fontSize: "14px"
					}}>
						By: {blog.createdBy?.name || "N/A"}
					</p>
				</div>
			))
		)}
	</div>
);
};

export default ViewBlogs;
