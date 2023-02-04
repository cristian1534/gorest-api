import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./screens/Home"));
const Edit = lazy(() => import("./screens/Edit"));
const Loader = lazy(() => import("./components/Loader"));
const Layout = lazy(() => import("./components/Layout"));
const NotFound = lazy(() => import("./components/NotFound"));
const Register = lazy(() => import("./screens/Register"));
const Login = lazy(() => import("./screens/Login"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </Suspense>
    </div>
  );
}

export default App;
