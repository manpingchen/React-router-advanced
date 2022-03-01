import { useRef } from "react";
import { addComment } from "../../lib/api";
import useHttp from "../../hooks/use-http";

import classes from "./NewCommentForm.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const params = useParams();
  const { sendRequest, status: httpStatus } = useHttp(addComment);

  const submitFormHandler = async (event) => {
    event.preventDefault();

    // optional: Could validate here
    await sendRequest({ commentData: commentTextRef.current.value, quoteId: params.quoteId });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn" disabled={httpStatus === "pending"}>
          Add Comment
        </button>
      </div>
    </form>
  );
};

export default NewCommentForm;
