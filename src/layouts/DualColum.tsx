import React, { PropsWithChildren } from "react";

export interface Props {
	sidebar: React.ReactNode;
}

export default function DualColum(props: PropsWithChildren<Props>) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				width: "100%",
				gap: "1rem",
			}}
		>
			<div
				style={{
					width: "75%",
				}}
			>
				{props.children}
			</div>
			<div
				style={{
					width: "25%",
				}}
			>
				{props.sidebar}
			</div>
		</div>
	);
}
