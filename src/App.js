import "./App.css";
import Header from "./Header";

const App = ({ src }) => {
  return (
    <div>
      <Header />
      <dl className="max-w-3xl mx-auto my-16 space-y-10">
        {src.map((elem) => (
          <>
            <div key={elem.id} className="border border-gray-300 p-4  shadow-sm text-sm">
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
            </div>
          </>
        ))}
      </dl>
    </div>
  );
};

export default App;
