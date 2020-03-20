import Link from "next/link";

import css from "./style.scss";

function Post({ post: { id, title, body } }) {
  return (
    <article className={css.post}>
      <Link href="/post/[pid]" as={`/post/${id}`} passHref>
        <section>
          <a>
            <h2>{title}</h2>
          </a>
          <h4>{body}</h4>
        </section>
      </Link>
    </article>
  );
}

export default Post;
