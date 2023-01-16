import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { BackendService } from "../services/BackendService";
import { AuthService } from "../services/AuthService";
import { MainContainer } from "../layouts/MainContainer";
import DualColum from "../layouts/DualColum";
import FeaturedPosts from "../components/FeaturedPost";
import SearchBar from "../components/widgets/SearchBar";
import TopContributors from "../components/widgets/TopContributors";
import TabSection from "../components/TabSection";
import TrendingWidget from "../components/widgets/TrendingWidget";
import PostCard from "../components/PostCard";
import { PostGridContainer } from "../components/widgets/CardGrid";
import { IPost } from "../models/Post";

const IndexPage: React.FC<PageProps> = () => {
	const [msg, setMsg] = React.useState("");
	const [reply, setReply] = React.useState("");
	const [backendSvc, setBackendSvc] = React.useState<BackendService>(BackendService.Instance);
	const [posts, setPosts] = React.useState<IPost[]>(dummyData.posts);
	const [authors, setAuthors] = React.useState(dummyData.authors);

	React.useEffect(() => {}, []);
	const login = async () => {
		await AuthService.Instance.login();
		BackendService.Instance.setupBackend(AuthService.Instance.identity);
	};
	React.useEffect(() => {
		backendSvc.backend.greet(msg).then((res) => {
			setReply(res);
		});
	}, [msg]);

	const getRandomAspect = (index) => {
		let aspects = [
			1, //"square"
			100 / 49, // "landscape"
			9 / 16, // "portrait"
		];
		if ((index + 1) % 4 == 0) {
			return aspects[1];
		} else {
			return aspects[0];
		}
	};
	return (
		<MainContainer route="/">
			<DualColum
				sidebar={
					<div
						style={{
							gap: "1rem",
							display: "flex",
							flexDirection: "column",
						}}
					>
						<SearchBar></SearchBar>
						<TopContributors contributors={authors}></TopContributors>
						<TrendingWidget posts={posts}></TrendingWidget>
					</div>
				}
			>
				<main>
					<FeaturedPosts posts={posts}></FeaturedPosts>
					<TabSection
						tabItems={[
							{
								label: "All",
								content: (
									<PostGridContainer
										style={{
											marginTop: "2rem",
										}}
									>
										{posts.map((post, i) => (
											<PostCard
												key={post.id.toString()}
												title={post.title}
												featuredImage={post.featuredImage}
												excerpt={post.excerpt || ""}
												author={authors.find((x) => x.id == post.author)}
												date={post.updatedAt.toString()}
												slug={post.slug}
												aspectRatio={getRandomAspect(i)}
											></PostCard>
										))}
									</PostGridContainer>
								),
							},
							{
								label: "Popular",
								content: <div>popular</div>,
							},
							{
								label: "New",
								content: <div>new</div>,
							},
						]}
					></TabSection>
					<h1>Home Page</h1>
					<button onClick={() => login()}>Login</button>
					<h2>{AuthService.Instance.identity?.getPrincipal().toString()}</h2>
					<input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
					<p>{reply}</p>
				</main>
			</DualColum>
		</MainContainer>
	);
};

const dummyData = {
	posts: [
		{
			title: "Healthy Lifestyle",
			featuredImage: "https://img.freepik.com/free-photo/top-view-delicious-noodles-concept_23-2148773775.jpg?w=2000&t=st=1672767219~exp=167276721",
			excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			author: BigInt(0),
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
			id: BigInt(0),
			published: true,
			slug: "test",
			tags: [],
			updatedAt: BigInt(Date.now()),
			createdAt: BigInt(Date.now()),
		},
		{
			title: "Ethereum Price",
			featuredImage: "https://www.coindesk.com/resizer/qt_up7s1YpvWkrCYBgrBtoW5yKs=/1056x792/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/72PSYBTMM5D2VD3WI745EU6NII",
			excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			author: BigInt(0),
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
			id: BigInt(1),
			published: true,
			slug: "test-2",
			tags: [],
			updatedAt: BigInt(Date.now()),
			createdAt: BigInt(Date.now()),
		},
		{
			title: "What is Internet Computer Protocol",
			featuredImage: "https://academy.moralis.io/wp-content/uploads/2021/06/JbUpRGiRruXiRtIaMlwI_Dfinity_Internet_Computer.png",
			excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			author: BigInt(0),
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
			id: BigInt(3),
			published: true,
			slug: "test-3",
			tags: [],
			updatedAt: BigInt(Date.now()),
			createdAt: BigInt(Date.now()),
		},
		{
			title: "What is Ethereum",
			featuredImage: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/03/ethereum-1.jpeg",
			excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			author: BigInt(1),
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
			id: BigInt(3),
			published: true,
			slug: "test-3",
			tags: [],
			updatedAt: BigInt(Date.now()),
			createdAt: BigInt(Date.now()),
		},
	],
	authors: [
		{
			id: BigInt(0),
			name: "John Doe",
			profileImage: "https://www.w3schools.com/howto/img_avatar.png",
			handle: "@johndoe",
		},
		{
			id: BigInt(1),
			name: "Jane Cooper",
			profileImage: "https://www.w3schools.com/howto/img_avatar.png",
			handle: "@janeco",
		},
		{
			id: BigInt(2),
			name: "Cody Fisher",
			profileImage: "https://www.w3schools.com/howto/img_avatar.png",
			handle: "@codyfisher",
		},
		{
			id: BigInt(3),
			name: "Esther Howard",
			profileImage: "https://www.w3schools.com/howto/img_avatar.png",
			handle: "@estherhoward",
		},
	],
};

export default IndexPage;
