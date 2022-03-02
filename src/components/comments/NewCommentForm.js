import { useEffect, useRef } from "react";
import { addComment } from "../../lib/api";
import useHttp from "../../hooks/use-http";

import classes from "./NewCommentForm.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
  const { onFetchAllComments, quoteId } = props;
  const commentTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addComment);

  const submitFormHandler = async (event) => {
    event.preventDefault();

    // optional: Could validate here
    await sendRequest({ commentData: { text: commentTextRef.current.value }, quoteId: quoteId });
  };

  useEffect(() => {
    if (status === "completed" && !error) {
      onFetchAllComments(quoteId);
      commentTextRef.current.value = "";
    }
  }, [status, error, quoteId, onFetchAllComments]);

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn" disabled={status === "pending"}>
          Add Comment
        </button>
      </div>
    </form>
  );
};

export default NewCommentForm;
