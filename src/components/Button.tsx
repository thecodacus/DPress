import React, { PropsWithChildren } from "react";
import { styled } from "@stitches/react";

export const StyledButton = styled("button", {
	backgroundColor: "$cyan11",
	color: "$cyan1",
	boxShadow: `1px 1px 6px 0px $cyanA6`,
	border: "none",
	outline: "none",
	padding: "1rem 1rem",
	borderRadius: "0.3rem",
	fontSize: "1rem",
	cursor: "pointer",
	fontWeight: 600,
});

export default function Button(props: PropsWithChildren) {
	return <StyledButton>{props.children}</StyledButton>;
}
