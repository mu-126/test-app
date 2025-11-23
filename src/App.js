import "./App.css";
import Header from "./Header";

const App = ({ src }) => {
  const displayLength = 50; //抜粋する文字数

  return (
    <div>
      <Header />
      <dl className="max-w-3xl mx-auto my-16 space-y-10">
        {src.map((elem) => {
          // 本文を30文字で抜粋し、長い場合は「...」を付ける
          // ① <br/>を一時的に改行文字に変換
          let text = elem.content.replace(/<br\s*\/?>/gi, "\n");
          // ② 残りのHTMLタグを削除
          text = text.replace(/<[^>]+>/g, "");
          // ③ 抜粋（指定文字数以上なら…を追加）
          const shortText = text.length > displayLength ? text.slice(0, displayLength) + "..." : text;
          // ④ 改行を再び<br/>に変換
          const htmlWithBreaks = shortText.replace(/\n/g, "<br/>");

          return (
            <div key={elem.id} className="border border-gray-300 p-4 shadow-sm text-sm">
              <dt>
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>{new Date(elem.createdAt).toLocaleDateString("ja-JP", { year: "numeric", month: "numeric", day: "numeric" })}</span>
                  <div className="flex gap-2 flex-wrap pr-32">
                    {elem.categories.map((cat) => (
                      <span key={cat} className="bg-white text-blue-700 border border-blue-700 px-2 py-0.5 rounded text-sm">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <h1 className="text-2xl pb-6 text-gray-700">APIで取得した{elem.title}</h1>
              </dt>

              {/* HTMLとして描画 */}
              <dd className="text-gray-700" dangerouslySetInnerHTML={{ __html: htmlWithBreaks }} />
            </div>
          );
        })}
      </dl>
    </div>
  );
};

export default App;
