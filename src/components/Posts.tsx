import { PostsType } from "../types/postType";
import List from "./PostList";

export default function Posts({ posts }: { posts: PostsType }) {
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}
