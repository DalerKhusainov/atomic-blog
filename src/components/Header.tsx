import Results from "./Results";
import SearchPosts from "./SearchPosts";
import { usePosts } from "../context/postContext";

export default function Header() {
  const { handleClearPosts } = usePosts();

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={handleClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
