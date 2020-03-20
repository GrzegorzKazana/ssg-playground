import fetch from "isomorphic-fetch";

import css from "./style.scss";
import { postsUrl } from "../../../../config/variables";
import { usePromise } from "../../../../common/hooks";
import CommentList from "../../components/CommentList";

function CommentContainer({ postId }) {
  const { isPending, data, error } = usePromise(
    () => fetch(`${postsUrl}/${postId}/comments`).then(r => r.json()),
    []
  );

  console.log({ isPending, data, error });

  return (
    <section>
      {isPending ? (
        <p className={css.message}>Loading...</p>
      ) : error ? (
        <p className={css.message}>An error occured.</p>
      ) : (
        <CommentList comments={data} />
      )}
    </section>
  );
}

export default CommentContainer;
