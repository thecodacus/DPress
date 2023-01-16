export interface IPost {
    id: bigint;
    title: string;
    content: string;
    featuredImage: string;
    author: bigint;
    createdAt: bigint;
    updatedAt: bigint;
    published: boolean;
    slug: string;
    excerpt?: string;
    tags: {
        id: bigint;
        name: string;
    }[]
}