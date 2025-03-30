import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const SECRET = process.env.JWT_SECRET || "your_secret_key";
const FRONTEND_URL = "http://localhost:5173";

app.post("/login", (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    const token = jwt.sign({ email }, SECRET, { expiresIn: "15m" });
    const magicLink = `${FRONTEND_URL}/verify?token=${token}`;

    console.log("Magic link:", magicLink); // Log instead of sending email
    res.json({ message: "Magic link generated. Check logs." });
});

app.get("/verify", (req, res) => {
    const { token } = req.query;
    if (!token || typeof token !== "string") return res.status(400).json({ error: "Invalid token" });

    try {
        const decoded = jwt.verify(token, SECRET);
        console.log("This is the user")
        console.log(decoded)
        res.json({ message: "Login successful", user: decoded });
    } catch (error) {
        res.status(401).json({ error: "Invalid or expired token" });
    }
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));