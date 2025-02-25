import { PostsType } from "../types/postType";

export default function Results({ posts }: { posts: PostsType }) {
  return <p>🚀 {posts.length} atomic posts found</p>;
}
