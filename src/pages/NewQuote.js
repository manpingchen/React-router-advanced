import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import { addNewQuote } from "../lib/api";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";

const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addNewQuote);

  const addQuoteHandler = async (newQuote) => {
    await sendRequest(newQuote);
  };

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes"); // history.push enable users to go back to the page by clicking back button on browser
    }
  }, [status, history]);
  
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
