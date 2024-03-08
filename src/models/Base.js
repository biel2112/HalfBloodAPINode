import mongoose from "mongoose";

const baseSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        nome: { type: String },
        mitologia: { type: String }
    },
    {
        versionKey: false
    }
)

const base = mongoose.model("bases", baseSchema);

export {base, baseSchema};