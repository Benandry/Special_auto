
import  express  from "express";
import user from "./middleware/user-api";

const app : express.Application = express()
const PORT = process.env.PORT || 4000;

app.use("/api_special_auto",user);

app.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}/api_special_auto`);
});