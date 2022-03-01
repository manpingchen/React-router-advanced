import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (newQuote) => {
    console.log(newQuote);

    history.push("/quotes"); // history.push enable users to go back to the page by clicking back button on browser
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
