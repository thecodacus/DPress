import React from "react";
import { styled } from "../theme/theme";
import MainMenu from "./MainMenu";
import { Helmet } from "react-helmet";
export const Container = styled("div", {
	display: "flex",
	flexDirection: "column",
	minHeight: "calc(100vh - 2rem)",
	width: "calc( 100% - 2rem)",
	maxWidth: "100%",
	margin: "1rem",
	padding: "1rem",
	boxSizing: "border-box",
	fontFamily: "$main",
	fontSize: "$2",
	lineHeight: "1.5",
	color: "$hiContrast",
	backgroundColor: "$background",
	overflowY: "auto",
	boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
	borderRadius: "0.5rem",
});

export function MainContainer(props: { children: React.ReactNode; route: string }) {
	return (
		<Container>
			<Helmet title="DBlogger" defer={false}>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
					// integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
					// crossorigin="anonymous"
					// referrerpolicy="no-referrer"
				/>
			</Helmet>
			<MainMenu
				items={[
					{
						label: "Home",
						icon: "fas fa-home",
						url: "/",
					},
					{
						label: "About",
						icon: "fas fa-circle-info",
						url: "/about",
					},
					{
						label: "Contact",
						icon: "fas fa-envelope",
						url: "/contact",
					},
					{
						label: "Log in",
						icon: "fas fa-sign-in-alt",
						url: "/login",
					},
					{
						label: "Sign up",
						icon: "fas fa-user-plus",
						url: "/sign-up",
						accent: true,
					},
				]}
				activeUrl={props.route}
			></MainMenu>
			<main>{props.children}</main>
		</Container>
	);
}
