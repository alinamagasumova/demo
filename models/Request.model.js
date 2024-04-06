import { Insert, Select, SelectByParams } from "./queries.js";
export default class Request {
  constructor() {
    this.model = "request";
  }

  static async createInstance(requestData) {
    console.log(requestData);
    try {
      const conn = await pool.getconn();
      const queryResult = await conn.query(Insert(this.model, requestData));
      console.log("Создан новый пользователь", queryResult);
      return true;
    } catch (e) {
      console.log("Ошибка создания пользователя", e.message);
      return false;
    } finally {
      conn.release();
    }
  }

  static async getAll() {
    try {
      const conn = await pool.getconn();
      const queryResult = await conn.query(Select(this.model));
      console.log("Все запросы", queryResult);
      return true;
    } catch (e) {
      console.log("Ошибка получения запросов", e.message);
      conn.release();
      return false;
    } finally {
      conn.release();
    }
  }
}
