import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = ({ src }) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`);
      const data = await res.json();
      setPost(data.post);
    };

    fetcher();
  }, [id]);

  // idに一致する記事を取得
  // const elem = post.find((item) => String(item.id) === id);

  if (!post) {
    return <div className="max-w-3xl mx-auto my-16">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto my-16 space-y-10">
      <div key={post.id}>
        <dt>
          <img src={post.thumbnailUrl} alt="" />
        </dt>
        <div className="p-4">
          <div className="flex justify-between text-sm  text-gray-500 mb-1">
            <span>{new Date(post.createdAt).toLocaleDateString("ja-JP", { year: "numeric", month: "numeric", day: "numeric" })}</span>
            <div className="flex gap-2 flex-wrap pr-4">
              {post.categories.map((cat) => (
                <span key={cat} className="bg-white text-blue-700 border border-blue-700 px-2 py-0.5 rounded text-sm">
                  {cat}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-2xl pb-6 text-gray-700">APIで取得した{post.title}</h1>

          {/* HTMLとして描画 */}
          <dd className="text-gray-700" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
