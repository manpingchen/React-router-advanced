import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
