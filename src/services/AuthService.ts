import { Identity } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";

export class AuthService {
    private static instance: AuthService;
    private _authClient: AuthClient;

    private _identity: Identity;
    private constructor() {
        // Private constructor, singleton

        AuthClient.create().then((authClient) => {
            this._authClient = authClient;
            this._identity = authClient.getIdentity();
        });

    }

    public static get Instance(): AuthService {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService();
        }

        return AuthService.instance;
    }
    public get isAuthenticated(): boolean {
        if (AuthService.instance.identity === undefined) {
            return false;
        }
        if (this.identity.getPrincipal().isAnonymous()) {
            return false;
        }
        return true;

    }
    public get identity(): Identity {
        return this._identity;
    }
    public async login(): Promise<void> {
        return await this._authClient.login({
            onError: (err) => {
                console.error(err);
            },
            onSuccess: async () => {
                const identity = await this._authClient.getIdentity();
                this._identity = identity;
            },
        });
    }
    public async logout(): Promise<void> {
        await this._authClient.logout();
        this._identity = this._authClient.getIdentity();
    }
}
