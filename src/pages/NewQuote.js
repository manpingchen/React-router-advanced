import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import { addNewQuote } from "../lib/api";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";

const NewQuote = () => {
  const navigate = useNavigate();
  const { sendRequest, status } = useHttp(addNewQuote);

  const addQuoteHandler = async (newQuote) => {
    await sendRequest(newQuote);
  };

  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes"); 
    }
  }, [status, navigate]);
  
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
