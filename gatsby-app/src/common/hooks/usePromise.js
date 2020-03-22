import { useState, useEffect, useCallback } from "react";

function usePromise(getPromise, deps) {
  const [state, setState] = useState({
    isPending: true,
    error: null,
    data: null
  });
  const promiseGetter = useCallback(getPromise, deps);

  useEffect(() => {
    let mounted = true;

    promiseGetter()
      .then(
        data => mounted && setState({ isPending: false, error: null, data })
      )
      .catch(
        error => mounted && setState(s => ({ ...s, isPending: false, error }))
      );

    return () => (mounted = false);
  }, [promiseGetter]);

  return state;
}

export default usePromise;
