import { Dispatch, SetStateAction } from "react";

interface SearchPostsProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export default function SearchPosts({
  searchQuery,
  setSearchQuery,
}: SearchPostsProps) {
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}
