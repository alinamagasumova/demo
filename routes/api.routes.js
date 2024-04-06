import { Router } from "express";
const router = Router();
import Request from '../models/Request.model.js';

router.get("/requests", async (_, res) => {
    const requests = await Request.getAll();
    res.render("requests", { title: "Заявки", requests: requests });
});

router.get("/request/:id", (req, res) => {

});

router.post("/request", async (req, res) => {
    const { name } = req.body;
    const request = await Request.createInstance({});
});

export default router;