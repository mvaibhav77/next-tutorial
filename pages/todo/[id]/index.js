import Link from "next/link";
import { server } from "../../../config";
// import { useRouter } from "next/router";
import Meta from "@/components/Meta";

const index = ({ posts }) => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <Meta title={posts.title} description={posts.excerpt} />
      <div className="flex flex-col items-center gap-12">
        <div className="p-4 bg-black text-white rounded-md max-w-[500px]">
          <h1 className="text-2xl p-4 pt-0 underline ">Article {posts.id}</h1>
          <p className="px-4 text-lg ">{posts.body}</p>
        </div>
        <Link
          href="/"
          className="ease-out duration-200 underline text-md hover:text-lg"
        >
          GO BACK
        </Link>
      </div>
    </>
  );
};

// Server Side Props :- for frequently changing data
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };

// static props and path to create dynamic routing
// for json placeholder
// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const posts = await res.json();

//   const ids = posts.map((post) => post.id);

//   const paths = ids.map((id) => ({
//     params: {
//       id: id.toString(),
//     },
//   }));
//   return {
//     // paths: { params: { id: "1", id: "2" } },
//     paths,
//     fallback: false,
//   };
// };

// from API folder
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/posts/${context.params.id}`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/posts`);
  const posts = await res.json();

  const ids = posts.map((post) => post.id);

  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    // paths: { params: { id: "1", id: "2" } },
    paths,
    fallback: false,
  };
};

export default index;
