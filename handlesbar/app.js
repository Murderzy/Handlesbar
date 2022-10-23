import express from "express"; //подключили пакет с фреймворком
import path from "path";
import bodyParser from "body-parser";
import router from "./routers/routers.js";
import hbs from "hbs";
import cookieParser from 'cookie-parser';
import { config } from "./config/config.js";
const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000; //определили port
const app = express();

	
app.set("view engine", "hbs");

app.use(cookieParser(config.secret_key));
hbs.registerPartials(__dirname + "/views/partials");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public"))); //middleware подключение статических данных (js, css, pictures)
app.use(router);
app.use(cookieParser())
app.listen(PORT, () => {
  console.log(`Server has been started http//localhost:${PORT}`);
});
