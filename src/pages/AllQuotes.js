import { Fragment } from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning is fun" },
  { id: "q2", author: "Marco", text: "Learning is not fun" },
];

const AllQuotes = () => {
  return (
    <Fragment>
      <h1>All Quotes</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </Fragment>
  );
};

export default AllQuotes;
