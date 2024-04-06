import { Insert } from "./queries.js";
import pool from '../database/db.js';
export default class User {
    constructor() {
        this.model = 'user';
    }
    static async createInstance(userData) {
        console.log(userData);
        const conn = await pool.getconn();
        try {
            const queryResult = await conn.query(Insert(this.model, userData));
            console.log("Создан новый пользователь", queryResult);
            return true;
        } catch (e) {
            console.log('Ошибка создания пользователя', e.message);
            return false;
        } finally {
            conn.release();
        }
    }

}
