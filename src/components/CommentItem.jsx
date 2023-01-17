export const CommentItem = ({comment}) => {
    console.log('comment');
    console.log(comment);
    const {message, owner: {firstName, lastName}} = comment;

  return (
    <div className="cardComment">
        <h4>{message}</h4>
        <small>{ firstName }{ lastName }</small>
    </div>
  )
}
