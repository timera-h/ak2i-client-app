import axios from "axios";

export class APIHandler {
  constructor(APIPrefix) {
    this.instance = axios.create({
      baseURL: process.env.BACK_END_URL + APIPrefix || "",
    });
  }

  
  createOne(payload) {
    return this.instance.post("/", payload);
  }

  getAll() {
   return this.instance.get("/");
  }

  getById(id) {
    return this.instance.get("/" + id)
  }

  deleteOne(id) {
    return this.instance.delete("/" + id)
  }
}