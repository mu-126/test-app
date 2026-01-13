import { useParams } from "react-router-dom";

const PostDetail = ({ src }) => {
  const { id } = useParams();

  // idに一致する記事を取得
  const elem = src.find((item) => String(item.id) === id);

  return (
    <div className="max-w-3xl mx-auto my-16 space-y-10">
      <div key={elem.id}>
        <dt>
          <img src={elem.thumbnailUrl} alt="" />
        </dt>
        <div className="p-4">
          <div className="flex justify-between text-sm  text-gray-500 mb-1">
            <span>{new Date(elem.createdAt).toLocaleDateString("ja-JP", { year: "numeric", month: "numeric", day: "numeric" })}</span>
            <div className="flex gap-2 flex-wrap pr-4">
              {elem.categories.map((cat) => (
                <span key={cat} className="bg-white text-blue-700 border border-blue-700 px-2 py-0.5 rounded text-sm">
                  {cat}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-2xl pb-6 text-gray-700">APIで取得した{elem.title}</h1>

          {/* HTMLとして描画 */}
          <dd className="text-gray-700" dangerouslySetInnerHTML={{ __html: elem.content }} />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
