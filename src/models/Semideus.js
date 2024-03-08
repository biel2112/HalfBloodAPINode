import mongoose from "mongoose";
import { baseSchema } from "./Base.js";

const semideusSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        nome: { type: String },
        idade: { type: Number },
        arma: { type: String },
        base: baseSchema
    },
    {
        versionKey: false
    }
)

const semideus = mongoose.model("semideuses", semideusSchema)

export default semideus;