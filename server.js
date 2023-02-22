const express =  require('express');
const session = require("express-session");
const exphbs = require("express-handlebars");
const allRoutes = require("./controllers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

//Requiring our mnodels for syncing
const{User, Blog} = require('./models')

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 2,
  },
  resave: false,
  saveUninitialized: true,       
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static directory
app.use(express.static("public"));

const hbs = exphbs.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(allRoutes);

app.get("/sessions",(req,res)=>{
  res.json(req.session)
})

app.get("/secretclub",(req,res)=>{
  if(req.session.UserId){
    return res.send(`Welcome to the club, ${req.session.UserName}`)
  }else{
    res.status(403).json({msg:"Please login first"})
  }
})

sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  });