import { useEffect, useState } from "react";
import { CommentItem } from "./CommentItem";

export const Comments = ({comments}) => {
  const [listcomments, setListComments] = useState([]);

  useEffect(() => {
    setListComments(comments);
  }, []);

  return (
    <div className='commentsContent'>
      {
        (listcomments.length > 0) ? listcomments.map((item) => {
          return <CommentItem key={item.id} comment={item} />
        })
        :
        <h2>No existen comentarios de esta publicación</h2>
      }
    </div>
  )
}
