function createHttpService(fetch) {
  const get = (url) => fetch(url).then((res) => res.json());

  return { get };
}

export default createHttpService;
