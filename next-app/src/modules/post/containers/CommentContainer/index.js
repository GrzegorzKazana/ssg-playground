import css from "./style.scss";
import { httpService } from "../../../../config/rootService";
import { postsUrl } from "../../../../config/variables";
import { usePromise } from "../../../../common/hooks";
import CommentList from "../../components/CommentList";

function CommentContainer({ postId }) {
  const { isPending, data, error } = usePromise(
    () => httpService.get(`${postsUrl}/${postId}/comments`),
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
