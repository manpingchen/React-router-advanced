import { Fragment, useRef, useState } from "react";

// import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  // const [isEntering, setIsEntering] = useState(false);
  const [isFormReady, setIsFormReady] = useState(false);

  const formChangeHandler = () => {
    setIsFormReady(Boolean(authorInputRef.current.value && textInputRef.current.value));
  };

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }
 
  const finishEnteringHandler = () => {
    // setIsEntering(false);
    console.log("Click");
  };

  // const formFocusedHandler = () => {
  //   setIsEntering(true);
  // };

  return (
    <Fragment>
      {/* <Prompt
        when={isEntering}
        message={(location) => "Are you sure you want to leave? The entered messages will be lost."}
      /> */}
      <Card>
        <form
          // onFocus={formFocusedHandler}
          onChange={formChangeHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn" disabled={!isFormReady} onClick={finishEnteringHandler}>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
