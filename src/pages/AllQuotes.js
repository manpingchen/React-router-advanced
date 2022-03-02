import { Fragment, useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const AllQuotes = () => {
  const { sendRequest, data, status, error } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (data.length === 0 || !data)) {
    return <NoQuotesFound />;
  }

  return (
    <Fragment>
      <h1>All Quotes</h1>
      {data?.length > 0 && <QuoteList quotes={data} />}
    </Fragment>
  );
};

export default AllQuotes;
