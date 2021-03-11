import axios from "axios";

export function APIHandler(APIPrefix) {
  return (() => {
    const instance = axios.create({
      baseURL: process.env.BACK_END_URL + APIPrefix || "",
    });
    const getAll = () => instance.get("/");
    const getById = (id) => instance.get("/" + id);
    const getOne = (path, query) => instance.get("/" + path, { query });

    return {
      instance,
      getAll,
      getById,
      getOne,
    };
  })();
}
