import css from "./style.scss";

function Post({ post: { title, body } }) {
  return (
    <article>
      <h2 className={css.title}>{title}</h2>
      <p className={css.text}>{body.repeat(10)}</p>
    </article>
  );
}

export default Post;
