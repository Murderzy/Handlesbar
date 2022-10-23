import Router from "express";
import path from "path";
import fs from "fs";
const __dirname = path.resolve();
const router = Router();
import cookieParser from 'cookie-parser';

let counter_index = 0;
let counter_news = 0;
let counter_login = 0;
let counter_reg = 0;
let counter_about = 0;



router
  .route("/")
  .get((req, res) => {
    counter_index++;
    console.log(req.signedCookies.counter_index);
    console.log(counter_index);
    res.render("index.hbs", {
      title: "My Cookie",
      counter: req.signedCookies.counter_index,
    });
    
    //console.log("Cookies: ", req.cookies);
    //res.render("index.hbs");
  })


router
  .route("/news")
  .get((req, res) => {
   counter_news++;
   console.log(counter_news);
   console.log(req.signedCookies.counter_news);
   res.render("news.hbs", {
    title: "My Cookie",
    counter: req.signedCookies.counter_news,
  });
  });

router.route("/cookie").get((req,res)=>{
  
  
  res.send();
})

router
  .route("/about")
  .get((req, res) => {
    counter_about++;
    console.log(counter_about);
    console.log(req.signedCookies.counter_about);
   res.render("about.hbs", {
    title: "My Cookie",
    counter: req.signedCookies.counter_about,
  });
  });
 
  router
  .route("/login")
  .get((req, res) => {
    counter_login++;
    console.log(req.signedCookies.counter_login);
    console.log(counter_login);
   res.render("log.hbs", {
    title: "My Cookie",
    counter: req.signedCookies.counter_login,
  });
  })
  .post( function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    fs.writeFileSync("log.txt","Login: "+ request.body.userLogin + " Password: " + request.body.userPass);
    response.send(`${request.body.userLogin} `);
});

  router
  .route("/reg")
  .get((req, res) => {
    counter_reg++;
    console.log(req.signedCookies.counter_reg);
    console.log(counter_reg);
   res.render("reg.hbs", {
    title: "My Cookie",
    counter: req.signedCookies.counter_reg,
  });
  })
  .post( function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    fs.writeFileSync("reg.txt","Login: "+ request.body.userLogin + " Password: " + request.body.userPass + " Email: "+ request.body.userEmail);
    response.send(`${request.body.userLogin} `);
});

export default router;
