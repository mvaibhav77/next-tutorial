import Head from "next/head";
import { ArticleItem } from "@/components/ArticleItem";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Next tutorial</title>
        {/* meta tags here */}
      </Head>

      <div className="flex flex-col justify-center mx-auto md:w-1/2">
        <div className="flex flex-col mt-12 bg-black text-white rounded-md p-6">
          <h1 className="text-3xl pb-4">TODO LIST</h1>
          <ol className="list-decimal ml-4">
            {articles.map((todo) => (
              <li
                className="pt-2 text-md ease-in duration-200 text-[skyblue] hover:text-gray-400"
                key={todo.id}
              >
                <ArticleItem todo={todo} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

// Static Props in NEXT
export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
