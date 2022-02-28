import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>Quote for {params.quoteId}</h1>
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
