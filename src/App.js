import "./App.css";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import NotFoundPage from "./NotFoundPage";
import ContactForm from "./ContactForm";

const App = ({ src }) => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<PostList src={src} />} />
        <Route path="/posts/:id" element={<PostDetail src={src} />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
