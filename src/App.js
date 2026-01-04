import "./App.css";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostList from "./PostList";
import PostDetail from "./PostDetail";

const App = ({ src }) => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<PostList src={src} />} />
        <Route path="/posts/:id" element={<PostDetail src={src} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
