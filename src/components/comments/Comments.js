import { useEffect, useState } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import CommentList from "./CommentsList";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import { useParams } from "react-router-dom";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, data: comments } = useHttp(getAllComments);
  const params = useParams();
  const quoteId = params.quoteId;

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  useEffect(() => {
    const getAllCommentsRequest = async () => {
      sendRequest(quoteId);
    };
    getAllCommentsRequest();
  }, [sendRequest, quoteId]);

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      {comments && <CommentList comments={comments} />}
    </section>
  );
};

export default Comments;
