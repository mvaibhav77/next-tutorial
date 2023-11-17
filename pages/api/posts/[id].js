import { posts } from "../../../data";

export default function handler({ query: { id } }, res) {
  const post = posts.filter((post) => post.id === id);

  if (post.length > 0) res.status(200).json(post[0]);
  else res.status(400).json({ message: `Post ${id} not found...` });
}
