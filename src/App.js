import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { lazy, Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = lazy(() => import("./pages/NewQuote"));
const NotFound = lazy(() => import("./pages/NotFound"));
const QuoteDetail = lazy(() => import("./pages/QuoteDetail"));
const AllQuotes = lazy(() => import("./pages/AllQuotes"));
const Comments = lazy(() => import("./components/comments/Comments"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navigate replace to="/quotes" />} />
          <Route path="quotes">
            <Route index element={<AllQuotes />} />
            <Route path=":quoteId/*" element={<QuoteDetail />}>
              <Route path="comments" element={<Comments />} />
            </Route>
          </Route>
          <Route path="new-quote" element={<NewQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
