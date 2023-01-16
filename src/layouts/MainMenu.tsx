import React, { PropsWithChildren } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { violet, mauve, indigo, purple, blackA, cyan } from "@radix-ui/colors";

import { styled } from "../theme/theme";

export interface IMultiMenuProps {
	items: Array<IMultiMenuItem>;
	activeUrl?: string;
}
export interface IMultiMenuItem {
	label: string;
	icon: string;
	url: string;
	items?: Array<IMultiMenuItem>;
	accent?: boolean;
}

const NavigationMenuRoot = styled(NavigationMenu.Root, {
	position: "relative",
	display: "flex",
	justifyContent: "center",
	width: "100%",
	zIndex: 1,
});

const NavigationMenuList = styled(NavigationMenu.List, {
	display: "flex",
	justifyContent: "center",
	// backgroundColor: "white",
	padding: 4,
	borderRadius: 6,
	listStyle: "none",
	// boxShadow: `0 2px 10px ${blackA.blackA7}`,
	margin: 0,
	gap: 4,
});
const Spacer = styled("div", {
	flex: 1,
});

const itemStyles = {
	padding: "8px 12px",
	outline: "none",
	userSelect: "none",
	fontWeight: 500,
	lineHeight: 1,
	borderRadius: 4,
	fontSize: 15,
	color: "$cyan12",
	transition: "all 0.2s ease",
	"&:focus": {
		boxShadow: `1px 1px 6px 0px $cyanA6`,
	},
	"&:hover": {
		backgroundColor: "$cyan5",
		boxShadow: `1px 1px 6px 0px $cyanA6`,
		transform: "translateY(-1px)",
	},
	"&.active": { backgroundColor: "$cyan5" },
	"&.accent": {
		backgroundColor: "$cyan11",
		color: "$cyan1",
		boxShadow: `1px 1px 6px 0px $cyanA6`,
	},
};

const NavigationMenuLink = styled(NavigationMenu.Link, {
	...itemStyles,
	display: "block",
	textDecoration: "none",
	fontSize: 15,
	lineHeight: 1,
});

export default function MainMenu(props: IMultiMenuProps) {
	const getActiveClass = (item: IMultiMenuItem) => {
		let className = "";
		if (item.url == props.activeUrl) {
			className = "active";
		}
		if (item.accent) {
			className += " accent";
		}
		return className;
	};
	return (
		<NavigationMenuRoot>
			<NavigationMenuList>
				{/*logo*/}
				<NavigationMenu.Item>
					<NavigationMenu.Link style={{ padding: 0 }} href="/">
						<img style={{ height: "2.5rem" }} src={"/logo.png"} />
					</NavigationMenu.Link>
				</NavigationMenu.Item>
			</NavigationMenuList>
			<Spacer></Spacer>
			<NavigationMenuList>
				{props.items.map((item, index) => {
					return (
						<NavigationMenu.Item key={index}>
							<NavigationMenuLink
								style={{
									display: "flex",
									alignItems: "center",
									gap: 4,
								}}
								href={item.url}
								className={getActiveClass(item)}
							>
								<i
									style={{
										fontSize: "0.8rem",
										// paddingBottom: "0.1rem",
									}}
									className={item.icon}
									aria-hidden="true"
								></i>
								<span>{item.label}</span>
							</NavigationMenuLink>
							{/* <NavigationMenuContent>
								<NavigationMenuViewport>
									<NavigationMenuList>
										{item.items?.map((subItem, subIndex) => {
											return (
												<NavigationMenu.Item key={subIndex}>
													<NavigationMenuLink href="#">
														<span>{subItem.label}</span>
														<span className="icon is-small">
															<i className={subItem.icon} aria-hidden="true"></i>
														</span>
													</NavigationMenuLink>
												</NavigationMenu.Item>
											);
										})}
									</NavigationMenuList>
								</NavigationMenuViewport>
								<NavigationMenuIndicator />
							</NavigationMenuContent> */}
						</NavigationMenu.Item>
					);
				})}
			</NavigationMenuList>
		</NavigationMenuRoot>
		// <div>
		// 	<ul>
		// 		{props.items.map((item, index) => {
		// 			return (
		// 				<li key={index}>
		// 					<a href="#">
		// 						<span>{item.label}</span>
		// 						<span className="icon is-small">
		// 							<i className={item.icon} aria-hidden="true"></i>
		// 						</span>
		// 					</a>
		// 					{item.items && <MainMenu items={item.items} />}
		// 				</li>
		// 			);
		// 		})}
		// 	</ul>
		// </div>
	);
}
