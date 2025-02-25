import { Dispatch, SetStateAction } from "react";
import { PostsType } from "../types/postType";
import Results from "./Results";
import SearchPosts from "./SearchPosts";

interface HeaderProps {
  posts: PostsType;
  onClearPosts: () => void;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export default function Header({
  posts,
  onClearPosts,
  searchQuery,
  setSearchQuery,
}: HeaderProps) {
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results posts={posts} />
        <SearchPosts
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
