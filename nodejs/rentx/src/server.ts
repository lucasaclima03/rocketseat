import express, { response } from "express";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();
const port = 7777;

app.use(express.json());
app.use("/categories", categoriesRoutes);

app.get("/", (request, response) => {
  return response.json({ message: "Hello world2" });
});

app.listen(port, () => console.log(`server is running on port ${port}`));
