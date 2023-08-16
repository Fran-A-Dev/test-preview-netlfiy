import { gql, useQuery } from "@apollo/client";

const GET_BLOCK_DATA = gql`
  {
    posts {
      nodes {
        editorBlocks {
          name
          renderedHtml
        }
      }
    }
  }
`;

function BlockData() {
  const { loading, error, data } = useQuery(GET_BLOCK_DATA);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      {data.posts.nodes.map((post) => (
        <div key={post.id}>
          {/* Assuming 'id' exists for each post */}
          {post.editorBlocks.map((block) => (
            <div key={block.name}>
              {/* Assuming 'name' is unique for each content block */}
              <div dangerouslySetInnerHTML={{ __html: block.renderedHtml }} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default BlockData;
