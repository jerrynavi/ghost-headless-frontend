import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "http://localhost:2368",
  key: "54e6201c7e3415ac74eb655a62",
  version: "v4",
});

export const getPosts = async () => {
  try {
    return await api.posts.browse({
      limit: "all",
    });
  } catch (error) {
    console.error(error);
  }
};

export const getSinglePost = async (slug) => {
  try {
    return await api.posts.read({
      slug,
    });
  } catch (error) {
    console.error(error);
  }
};
