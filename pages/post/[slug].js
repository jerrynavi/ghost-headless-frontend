import { getSinglePost, getPosts } from "../../utils";
import Head from "next/head";

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}

export default function Post(props) {
  return (
    <div>
      <Head>
        <title>{props.post.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="post-page">
        <h1>{props.post.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: props.post.html }}
          className="post-page-content"
        />
      </main>
    </div>
  );
}
