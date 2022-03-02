import { useCallback, useEffect, useState } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentList from "./CommentsList";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, data: loadedComments, status } = useHttp(getAllComments, true);
  const params = useParams();
  const { quoteId } = params;

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentList comments={loadedComments} />;
  }

  if (status === "completed" && (!loadedComments || loadedComments.length === 0)) {
    comments = <div className="centered">Mo comment yet.</div>;
  }

  const fetchAllCommentsHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  useEffect(() => {
    fetchAllCommentsHandler();
  }, [fetchAllCommentsHandler]);

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onFetchAllComments={fetchAllCommentsHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
