import { useEffect } from "react";
import { Link, useParams, Routes, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const { quoteId } = useParams();
  const { sendRequest, data: quote, status, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && !quote.text) {
    return <p>No quote found</p>;
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  return (
    <section>
      <h1>Quote for {quoteId}</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <div className="centered">
        <Link to="comments" className="btn--flat">
          Load Comments
        </Link>
      </div>
      <Routes>
        <Route path="comments" element={<Comments />} />
      </Routes>
    </section>
  );
};

export default QuoteDetail;
