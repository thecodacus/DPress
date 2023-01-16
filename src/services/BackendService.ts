import { Actor, ActorSubclass, HttpAgent, Identity } from "@dfinity/agent";
import { _SERVICE } from "../declarations/DBlogger_backend/DBlogger_backend.did";
const bk = require("../declarations/DBlogger_backend/DBlogger_backend.did.js");
export class BackendService {
    private static instance: BackendService;
    private _backend: ActorSubclass<_SERVICE>;
    private constructor() {
        // Private constructor, singleton
        this._backend = Actor.createActor(bk.idlFactory, {
            canisterId: `${process.env.GATSBY_DBLOGGER_BACKEND_CANISTER_ID}`,
            agent: new HttpAgent({ host: `${process.env.GATSBY_DBLOGGER_BACKEND_HOST}` }),
        })
    }
    public static get Instance(): BackendService {
        if (!BackendService.instance) {
            BackendService.instance = new BackendService();
        }
        return BackendService.instance;
    }
    public get backend(): ActorSubclass<_SERVICE> {
        return this._backend;
    }
    public async setupBackend(identity: Identity) {
        const actor: ActorSubclass<_SERVICE> = await Actor.createActor(bk.idlFactory, {
            canisterId: `${process.env.GATSBY_DBLOGGER_BACKEND_CANISTER_ID}`,
            agent: new HttpAgent({
                identity,
                host: `${process.env.GATSBY_DBLOGGER_BACKEND_HOST}`,
            }),
        });
        this._backend = actor;
    }


}