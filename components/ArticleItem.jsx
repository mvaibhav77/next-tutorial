import Link from "next/link";

export const ArticleItem = ({ todo }) => {
  return (
    <Link href="/todo/[id]" as={`/todo/${todo.id}`}>
      <div>
        <h3>{todo.title}</h3>
        {/* <p>{todo.body}</p> */}
      </div>
    </Link>
  );
};
