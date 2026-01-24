import "./App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostList = ({ src }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // APIでpostsを取得する処理をuseEffectで実行
  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts");
        const data = await res.json();

        if (data.posts) {
          setPosts(data.posts);
        } else {
          setPosts([]);
        }
      } catch (error) {
        setPosts([]); // エラー時も空配列
      } finally {
        setLoading(false); // 読み込み終了
      }
    };

    fetcher();
  }, []);

  // まだ読み込み中
  if (loading) {
    return <div className="max-w-3xl max-auto my-16">読み込み中…</div>;
  }

  // 読み込みは終わったが、記事が0件
  if (posts.length === 0) {
    return <div className="max-w-3xl mx-auto my-16">記事が見つかりませんでした</div>;
  }

  return (
    <div>
      <dl className="max-w-3xl mx-auto my-16 space-y-10">
        {posts.map((elem) => (
          <Link key={elem.id} to={`/posts/${elem.id}`} className="block border border-gray-300 p-4  shadow-sm text-sm">
            <dt>
              <div className="flex justify-between text-sm  text-gray-500 mb-1">
                <span>{new Date(elem.createdAt).toLocaleDateString("ja-JP", { year: "numeric", month: "numeric", day: "numeric" })}</span>
                <div className="flex gap-2 flex-wrap pr-32">
                  {elem.categories.map((cat) => (
                    <span key={cat} className="bg-white   text-blue-700 border border-blue-700 px-2 py-0.5  rounded text-sm">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
              <h1 className="text-2xl pb-6 text-gray-700">APIで取得した{elem.title}</h1>
            </dt>

            {/* HTMLとして描画 */}
            <dd className="text-gray-700 line-clamp-2" dangerouslySetInnerHTML={{ __html: elem.content }} />
          </Link>
        ))}
      </dl>
    </div>
  );
};

export default PostList;
