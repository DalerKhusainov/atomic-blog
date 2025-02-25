import { PostsType, PostType } from "../types/postType";
import FormAddPost from "./FormAddPost";
import Posts from "./Posts";

interface MainProps {
  posts: PostsType;
  onAddPost: (post: PostType) => void;
}

// function Main({ posts, onAddPost }) {
export default function Main({ posts, onAddPost }: MainProps) {
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}
