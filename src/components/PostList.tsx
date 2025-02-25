import { PostsType } from "../types/postType";

// function List({ posts }) {
export default function List({ posts }: { posts: PostsType }) {
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
