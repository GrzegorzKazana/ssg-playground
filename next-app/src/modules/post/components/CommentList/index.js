import css from "./style.scss";
import Comment from "../Comment";

function CommentList({ comments }) {
  return (
    <ul className={css.comments}>
      {comments.map(c => (
        <li key={c.id}>
          <Comment comment={c}></Comment>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
