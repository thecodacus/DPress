import * as Avatar from "@radix-ui/react-avatar";
import { styled } from "@stitches/react";
import React from "react";
import Button from "../Button";
import { Platform } from "../Platform";

export const HBar = styled("div", {
	backgroundColor: "$cyanA6",
	height: "1px",
	width: "100%",
	margin: "1rem 0",
});

export default function TopContributors(props: { contributors: { handle: string; profileImage: string }[] }) {
	return (
		<Platform>
			<h3 style={{ margin: 0 }}>
				<i style={{ marginRight: "0.5rem" }} className="fas fa-chart-simple"></i>
				Top Contributors
			</h3>
			<HBar></HBar>
			<div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", flexWrap: "wrap" }}>
				{props.contributors.map((contributor, i) => (
					<div key={i} style={{ display: "flex", flexDirection: "row", gap: "0.5rem", alignItems: "center" }}>
						<Avatar.Root>
							<Avatar.Image
								style={{
									width: "2rem",
									height: "2rem",
									borderRadius: "50%",
									marginTop: "0.5rem",
									objectFit: "cover",
								}}
								src={contributor.profileImage}
							/>
							<Avatar.Fallback />
						</Avatar.Root>
						{/* <img src={contributor.profileImage} style={{ width: "5rem", height: "5rem", borderRadius: "50%" }} /> */}
						<p style={{ textAlign: "center" }}>{contributor.handle}</p>
					</div>
				))}
			</div>
			<div style={{ display: "flex", flexFlow: "column", width: "100%", marginTop: "1rem" }}>
				<Button>Submit Post</Button>
			</div>
		</Platform>
	);
}
