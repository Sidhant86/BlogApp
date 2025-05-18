/** @format */
import React, { useState } from "react";

const BlogHome = () => {
	const [selectedImage, setSelectedImage] = useState(null);

	const openImage = (imageSrc) => {
		setSelectedImage(imageSrc);
	};

	const closeImage = () => {
		setSelectedImage(null);
	};

	return (
		<div style={styles.container}>
			<header style={styles.header}>
				<h1>Welcome to My Blog</h1>
				<p>Stay updated with the latest articles</p>
			</header>
			<main style={styles.main}>
				{blogData.map((blog, index) => (
					<div key={index} style={styles.imageContainer}>
						<button onClick={() => openImage(blog.image)} style={styles.imageButton}>
							<img src={blog.image} alt={blog.title} style={styles.image} />
						</button>
						<h3 style={styles.title}>{blog.title}</h3>
						<p style={styles.description}>{blog.description}</p>
					</div>
				))}

				<p>Explore interesting articles and insights.</p>
				<button style={styles.button} onClick={() => (window.location.href = "/view-blog")}>
					View Blog
				</button>
			</main>
			<footer style={styles.footer}>
				<p>&copy; 2025 My Blog. All rights reserved.</p>
			</footer>

			{/* Modal for Enlarged Image */}
			{selectedImage && (
				<div style={styles.modal} onClick={closeImage}>
					<img src={selectedImage} alt="Enlarged view" style={styles.modalImage} />
					<button onClick={closeImage} style={styles.closeButton}>Close</button>
				</div>
			)}
		</div>
	);
};

// Sample blog data
const blogData = [
	{
		image: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.png",
		title: "What is Blogging?",
		description: "ABlogging is the process of creating and maintaining an online journal or informational website where individuals or organizations share ideas, experiences, and expertise. Originally used as personal diaries in the early 2000s, blogs have evolved into powerful digital platforms for content marketing, education, entertainment, and professional branding."
	},
	{
		image: "https://cdn.pixabay.com/photo/2014/08/27/08/11/blogging-428955_640.jpg",
		title: "Tools for Successful Blogging",
		description: "Blogging is the art of sharing thoughts, knowledge, and experiences through an online platform. It allows individuals, businesses, and professionals to connect with audiences by publishing content in various forms, such as articles, images, and videos. Whether it's personal storytelling, educational insights, or industry updates, blogging serves as a powerful medium for expression and engagement. Successful blogging requires consistency, quality content, and effective promotion through social media or SEO strategies. Over time, bloggers can monetize their efforts through advertisements, affiliate marketing, or sponsored posts, making it a valuable tool for both creative expression and professional growth. "

	},
	{
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHGnjgWkZBCWRC7Ni3sQVSJajpctQ0fCMfQ&s",
		title: "How to Write an Engaging Blog",
		description: "Writing an engaging blog requires a balance of clarity, creativity, and connection with the audience. A compelling blog starts with a captivating topic that resonates with readers, followed by a strong headline that sparks curiosity. The introduction should immediately grab attention through storytelling, a surprising fact, or a relatable scenario. Structuring the content in short paragraphs, using bullet points, and incorporating bold or italic text enhances readability. Visual elements such as images, infographics, or videos add depth to the content and improve engagement. A conversational tone helps establish a personal connection, making the post feel like a dialogue rather than an academic piece. Providing valuable insights, solutions, or actionable tips ensures that readers leave with useful information. A well-crafted call-to-action encourages interaction, prompting readers to comment, share, or subscribe. Optimizing the blog for SEO by using relevant keywords improves visibility on search engines, increasing readership over time. Finally, thorough proofreading and editing refine the content, ensuring clarity and professionalism. When a blog is well-structured, insightful, and engaging, it captures the audience’s attention and keeps them coming back for more."

	},
	{
		image: "https://assets.hongkiat.com/uploads/desktop-blogging-clients-the-ultimate-list/WordPress-Desktop-App.jpg",
		title: "Using WordPress for Blogging",
		description: "WordPress is one of the most popular blogging platforms, providing users with a flexible and powerful way to create and manage blogs. It allows bloggers to publish content effortlessly, customize their websites with themes and plugins, and optimize their posts for search engines. With its intuitive interface, users can easily write and format articles, add multimedia elements, and schedule posts for future publishing. WordPress offers both free and paid versions, catering to different needs, from personal blogging to professional websites. Additionally, its vast library of plugins enables features like SEO enhancement, social media integration, and audience engagement tools. Whether you're a beginner or an experienced blogger, WordPress provides scalability, making it suitable for both small blogs and large content-driven sites. With the right strategies and customization, WordPress can turn a simple blog into a thriving online presence."

	}
];

// Styles for better design
const styles = {
	container: {
		fontFamily: "Arial, sans-serif",
		textAlign: "center",
		padding: "20px",
	},
	header: {
		backgroundColor: "powderblue",
		color: "white",
		padding: "10px",
	},
	main: {
		marginTop: "20px",
	},
	imageContainer: {
		marginBottom: "30px",
		padding: "15px",
		backgroundColor: "#F5F5F5",
		borderRadius: "10px",
		boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
		display: "inline-block",
		width: "80%",
		textAlign: "center"
	},
	imageButton: {
		border: "none",
		background: "none",
		cursor: "pointer"
	},
	image: {
		width: "100%",
		height: "250px",
		borderRadius: "10px",
	},
	title: {
		color: "#1565C0",
		marginTop: "10px",
		fontSize: "20px",
		fontWeight: "bold"
	},
	description: {
		color: "#555",
		fontSize: "16px",
		marginTop: "5px"
	},
	button: {
		backgroundColor: "#008CBA",
		color: "white",
		padding: "10px 20px",
		border: "none",
		borderRadius: "5px",
		cursor: "pointer",
		fontSize: "16px",
	},
	footer: {
		marginTop: "40px",
		fontSize: "12px",
		color: "gray",
	},
	modal: {
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		backgroundColor: "white",
		padding: "20px",
		boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
		borderRadius: "10px",
		textAlign: "center"
	},
	modalImage: {
		width: "600px",
		height: "400px",
		borderRadius: "10px"
	},
	closeButton: {
		marginTop: "10px",
		padding: "8px 15px",
		backgroundColor: "#ff4d4d",
		color: "white",
		border: "none",
		cursor: "pointer",
		fontSize: "14px",
		borderRadius: "5px"
	}
};

export default BlogHome;
