import express, { Request, Response } from "express";
const app = express();

app.get("/api/health-check", (req: Request, res: Response) => {
  res.send("Health OK!");
});

export default app;
