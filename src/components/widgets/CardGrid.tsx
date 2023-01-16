import { styled } from "@stitches/react";

export const PostGridContainer = styled("div", {
	display: "grid",
	gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
	// gridTemplateColumns: "masonary",
	gridTemplateRows: "masonry",
	// gridAutoColumns: "1fr",
	// gridAutoRows: "1fr",
	gap: "10px",
	gridAutoFlow: "dense",
	">*": {
		// maxWidth: "calc( 36rem + 20px )",
		height: "fit-content",
	},
	":nth-child(4n)": {
		gridColumn: "span 2",
	},
});
