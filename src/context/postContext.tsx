import {
  useState,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { PostType, PostsType } from "../types/postType";
import { createRandomPost } from "../utils/helpers";

interface PostContextType {
  posts: PostsType;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  handleAddPost: (post: PostType) => void;
  handleClearPosts: () => void;
}

interface PostProviderType {
  children: ReactNode;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

function PostProvider({ children }: PostProviderType) {
  const [posts, setPosts] = useState<PostsType>(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post: PostType) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        handleAddPost,
        handleClearPosts,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

function usePosts() {
  const postsContext = useContext(PostContext);
  if (!postsContext) {
    throw new Error("usePostContext was used outside of the PostProvider");
  }
  return postsContext;
}

export { PostProvider, usePosts };
