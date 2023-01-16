import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { styled } from "@stitches/react";

interface Props {
	tabItems: Array<TabItem>;
}

interface TabItem {
	label: string;
	content: React.ReactNode;
}

export const StyledTabButton = styled(Tabs.Trigger, {
	border: "none",
	background: "transparent",
	padding: "0 1rem",
	cursor: "pointer",
	fontSize: "1rem",
	fontWeight: 600,
	color: "$cyanA8",
	["&:hover"]: {
		color: "$cyan12",
	},
	["&[data-state=active]"]: {
		color: "$cyan12",
		borderBottom: "solid",
		borderBottomWidth: "2px",
		paddingBottom: "0.5rem",
	},
});

const HBar = styled("div", {
	width: "100%",
	height: "1px",
	backgroundColor: "$cyanA8",
	marginTop: "0",
	transform: "translateY(-1px)",
});
export default function TabSection(props: Props) {
	const [tabLables, setTabLables] = React.useState(props.tabItems.map((item) => item.label));

	return (
		<Tabs.Root
			style={{
				padding: "1rem 0.5rem",
			}}
			defaultValue={props.tabItems.length > 0 ? props.tabItems[0].label : undefined}
		>
			<Tabs.List
				style={{
					outline: "none",
				}}
			>
				{tabLables.map((label, i) => (
					<StyledTabButton key={i} value={label} style={{}}>
						{label}
					</StyledTabButton>
				))}
				<HBar></HBar>
			</Tabs.List>
			{props.tabItems.map((item, i) => (
				<Tabs.Content key={i} value={item.label}>
					{item.content}
				</Tabs.Content>
			))}
		</Tabs.Root>
	);
}
