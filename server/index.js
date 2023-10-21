import app from "./app.js";
import { conectarDB } from "./config/db.js";

conectarDB();

app.listen(5000,()=>console.log("Server en PORT 5000"))