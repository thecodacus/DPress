import React from "react";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { styled } from "@stitches/react";

interface Props {
	title: string;
	excerpt: string;
	featuredImage: string;
	date: string;
	author?: {
		name: string;
		handle: string;
		profileImage: string;
	};
	slug: string;
	aspectRatio?: number;
	route?: string;
}
const Img = styled("img", {
	objectFit: "cover",
	width: "100%",
	height: "100%",
	borderRadius: "0.5rem",
});
const Box = styled("div", {});
const LinkBox = styled("a", {
	textDecoration: "none",
	cursor: "pointer",
	["&:hover"]: {
		boxShadow: "1px 1px 6px 0px $cyanA6",
	},
});

export default function PostCard(props: Props) {
	return (
		<LinkBox
			href={props.route || `/blog/${props.slug}`}
			css={{
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
				width: "100%",
				// padding: "1rem",
				backgroundColor: "white",
				borderRadius: "0.5rem",
				boxShadow: "1px 1px 6px 0px rgba(0, 0, 0, 0.2)",
				boxSizing: "border-box",
				position: "relative",
				overflow: "hidden",
				transition: "0.3s ease-in-out",
				["img.cardImg"]: {
					transition: "0.3s ease-in-out",
					transform: "scale(1)",
				},
				["::after"]: {
					content: "''",
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					background: "linear-gradient(0deg, rgba(0,126,145,0.9262298669467787) 21%, rgba(8,224,247,0) 100%);",
				},
				["&:hover"]: {
					["img.cardImg"]: {
						// transition: "0.2s ease-in-out",
						transform: "scale(1.1)",
					},
					transform: "translateY(-2px) scale(1.01)",
					zIndex: 2,
				},
				color: "white",
			}}
		>
			<AspectRatio.Root ratio={props.aspectRatio || 16 / 9}>
				<Img className="cardImg" src={props.featuredImage} alt={`Featured Image:${props.title}`} />
			</AspectRatio.Root>
			{/* <img src={props.featuredImage} style={{ width: "100%", height: "auto", }} /> */}
			<Box
				css={{
					position: "absolute",
					bottom: 0,
					width: "100%",
					zIndex: 1,
					padding: "1rem",
					boxSizing: "border-box",
				}}
			>
				<h3 style={{ margin: 0 }}>{props.title}</h3>
				<p className="excerpt" style={{ margin: 0 }}>
					{props.excerpt}
				</p>
			</Box>
			<div
				style={{
					position: "absolute",
					top: 0,
					right: 0,
					padding: "1rem",
					display: "flex",
					flexDirection: "row-reverse",
					gap: "1rem",
					alignItems: "center",
					zIndex: 1,
				}}
			>
				<img
					src={props.author?.profileImage}
					style={{
						width: "2rem",
						height: "2rem",
						borderRadius: "50%",
						border: "solid",
						borderWidth: "1px",
						borderColor: "$cyanA8",
					}}
				/>
				<p style={{ margin: 0 }}>{props.author?.handle}</p>
				{/* <p style={{ margin: 0 }}>{props.date}</p> */}
			</div>
		</LinkBox>
	);
}
