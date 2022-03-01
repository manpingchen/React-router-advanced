import { Fragment, useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const AllQuotes = () => {
  const { sendRequest, data } = useHttp(getAllQuotes);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <Fragment>
      <h1>All Quotes</h1>
      {data?.length > 0 && <QuoteList quotes={data} />}
    </Fragment>
  );
};

export default AllQuotes;
