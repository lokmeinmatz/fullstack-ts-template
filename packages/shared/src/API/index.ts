export interface PostDTO {
  title: string;
  author: { mail: string, name: string };
  content: string;
}

export interface GetPostsDTO {
  posts: PostDTO[];
}
