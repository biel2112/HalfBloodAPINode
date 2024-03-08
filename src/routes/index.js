import express from "express";
import semideuses from "./semideusRoutes.js"
import bases from "./baseRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Meios-Sangues"));

    app.use(express.json(), semideuses, bases);
}

export default routes;