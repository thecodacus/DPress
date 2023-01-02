import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
// import { createActor } from "../declarations/DBlogger_backend";
import { Actor, ActorSubclass, HttpAgent } from "@dfinity/agent";
import { _SERVICE } from "../declarations/DBlogger_backend/DBlogger_backend.did";
const bk = require("../declarations/DBlogger_backend/DBlogger_backend.did.js");
const IndexPage: React.FC<PageProps> = () => {
	const [msg, setMsg] = React.useState("");
	const [reply, setReply] = React.useState("");
	const [DBlogger_backend, setDBlogger_backend] = React.useState<ActorSubclass<_SERVICE>>(
		Actor.createActor(bk.idlFactory, {
			canisterId: `${process.env.GATSBY_DBLOGGER_BACKEND_CANISTER_ID}`,
			agent: new HttpAgent({ host: `${process.env.GATSBY_DBLOGGER_BACKEND_HOST}` }),
		})
	);

	// React.useEffect(() => {
	// 	setDBlogger_backend();
	// }, []);

	React.useEffect(() => {
		DBlogger_backend?.greet(msg).then((res) => {
			setReply(res);
		});
	}, [msg]);
	return (
		<main>
			<h1>Home Page</h1>
			<input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
			<p>{reply}</p>
		</main>
	);
};

export default IndexPage;
