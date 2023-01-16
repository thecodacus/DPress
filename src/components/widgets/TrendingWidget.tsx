import * as Avatar from "@radix-ui/react-avatar";
import { styled } from "@stitches/react";
import React from "react";
import { Platform } from "../Platform";

export const HBar = styled("div", {
	backgroundColor: "$cyanA6",
	height: "1px",
	width: "100%",
	margin: "1rem 0",
});

const Title = styled("h3", {
	margin: 0,
	fontSize: "1rem",
	fontWeight: 600,
	color: "$cyan12",
});
const Excerpt = styled("p", {
	margin: 0,
	fontSize: "0.8rem",
	fontWeight: 400,
	color: "$gray10",
});

export default function TrendingWidget(props: { posts: { title: string; featuredImage: string; excerpt?: string }[] }) {
	return (
		<Platform>
			<h3 style={{ margin: 0 }}>
				<i style={{ marginRight: "0.5rem" }} className="fas fa-fire-flame-curved "></i>
				Trending
			</h3>
			<HBar></HBar>
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem", flexWrap: "wrap" }}>
				{props.posts.map((post, i) => (
					<div key={i} style={{ display: "flex", flexDirection: "row", gap: "0.5rem", alignItems: "center" }}>
						<Avatar.Root>
							<Avatar.Image
								style={{
									width: "3rem",
									height: "3rem",
									borderRadius: "0.7rem",
									marginTop: "0.5rem",
									objectFit: "cover",
								}}
								src={post.featuredImage}
							/>
							<Avatar.Fallback />
						</Avatar.Root>
						{/* <img src={contributor.profileImage} style={{ width: "5rem", height: "5rem", borderRadius: "50%" }} /> */}
						<div>
							<Title style={{ margin: 0, color: "$cyan11" }}>{post.title}</Title>
							<Excerpt style={{ margin: 0, color: "$cyan7" }}>{post.excerpt?.substring(0, 30)}...</Excerpt>
						</div>
					</div>
				))}
			</div>
		</Platform>
	);
}
