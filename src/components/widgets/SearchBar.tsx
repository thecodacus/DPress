import { styled } from "@stitches/react";
import React, { PropsWithChildren } from "react";
import { Platform } from "../Platform";

export const Input = styled("input", {
	backgroundColor: "$cyan1",
	color: "$cyan12",
	borderRadius: "0.5rem",
	border: "none",
	outline: "none",
	padding: "0 1rem",
});
export const StyledIcon = styled("i", {
	color: "$cyan11",
	fontSize: "1.5rem",
});

export default function SearchBar(props: { onChange?: (e: string) => void }) {
	const [search, setSearch] = React.useState("");
	return (
		<Platform
			style={{
				position: "relative",
			}}
		>
			<Input onChange={(e) => setSearch(e.target.value)}></Input>
			<StyledIcon
				style={{
					fontSize: "1.5rem",
					marginLeft: "1rem",
					cursor: "pointer",
					position: "absolute",
					right: "1rem",
					// top: "-0.5rem",
					// transform: "translateX(-100%)",
				}}
				className="fas fa-magnifying-glass"
				onClick={() => (props.onChange ? props.onChange(search) : null)}
			></StyledIcon>
		</Platform>
	);
}
