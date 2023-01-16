import { styled } from "@stitches/react";
import React from "react";
import { IPost } from "../models/Post";

export interface Props {
	posts: IPost[];
}

const BackDropImage = styled("div", {
	// backgroundImage: `url(${post.featuredImage ? post.featuredImage : "https://bulma.io/images/placeholders/1280x960.png"})`,
	position: "absolute",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	backgroundSize: "cover",
	backgroundPosition: "center",
	display: "block",
	["&::after"]: {
		content: '""',
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		// background: "rgb(14 139 155 / 40%)",
		backgroundImage: "linear-gradient(45deg, hsl(186deg 75% 16% / 84%) 40%, rgba(8, 224, 247, 0) 100%)",
	},
});
const Tag = styled("span", {
	backgroundColor: "$cyan11",
	color: "$cyan1",
	padding: "0.5rem",
	borderRadius: "0.3rem",
	fontSize: "0.7rem",
	fontWeight: "bold",
	// display: "inline-block",
	margin: "0.2rem",
	textTransform: "uppercase",
	// letterSpacing: "0.1rem",
	// lineHeight: 1,
});

export default function FeaturedPosts(props: Props) {
	//feature posts card for homepage
	const [selectedIndex, setSelectedIndex] = React.useState(0);
	const [timer, setTimer] = React.useState<NodeJS.Timeout | null>(null);

	React.useEffect(() => {
		if (timer) {
			clearTimeout(timer);
		}
		setTimer(
			setTimeout(() => {
				setSelectedIndex((selectedIndex + 1) % props.posts.length);
			}, 5000)
		);
	}, [selectedIndex]);

	return (
		<div>
			<div
				style={{
					position: "relative",
					borderRadius: "0.8rem",
					overflow: "hidden",
					minHeight: "20rem",
					padding: "2rem",
					boxSizing: "border-box",
					color: "white",
					display: "flex",
					alignContent: "center",
					flexWrap: "wrap",
					boxShadow: `1px 1px 6px 0px $cyanA6`,
				}}
			>
				<BackDropImage
					style={{
						backgroundImage: `url(${props.posts[selectedIndex].featuredImage ? props.posts[selectedIndex].featuredImage : "https://bulma.io/images/placeholders/1280x960.png"})`,
					}}
				></BackDropImage>
				<div
					style={{
						position: "relative",
						maxWidth: "20rem",
					}}
				>
					<Tag>FEATURED</Tag>
					<h1>{props.posts[selectedIndex].title}</h1>
					<p>{props.posts[selectedIndex].content.substring(0, 150)}...</p>
				</div>
			</div>
		</div>
	);
}
