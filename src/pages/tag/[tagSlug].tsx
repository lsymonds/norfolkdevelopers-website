export async function getStaticPaths() {
  const { getTags } = require("../../lib/blog-engine");

  return {
    paths: Object.keys(getTags()).map(tag => {
      return { params: { tagSlug: tag } };
    }),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { getTags } = require("../../lib/blog-engine");

  return {
    props: {
      posts: getTags()[params.tagSlug]
    }
  };
}

export default function TagSlug({ posts }) {
  return (
    <div>
      Tagslug
      {posts.map(post => (
        <div>{post.title}</div>
      ))}
    </div>
  );
}
