export interface IAuthor {
    id: bigint;
    name: string;
    bio: string;
    avatar: string;
    posts: Array<bigint>;
}