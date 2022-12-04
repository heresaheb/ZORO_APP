const express = require('express');
const app = express();
const mysql = require('mysql');
const fs = require('fs');
// const url = require('url');
require('ejs');

//to get user request path
// let link="";
// app.use((req, res, next)=>{
//      link = url.parse(req.url).path;
//     next();
// })

// To render the html files from default folder 'view' directory we using ejs module and ejs extenstion
// It can also help to render data from server to html = ejs files
app.set('view engine' , 'ejs');
app.use(express.static("public"));
let jsonData = require("./dataFromMysql.json"); //import the data where externally raw data exported.
const { hostname } = require('os');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pass1234",
    database:"dbfornodejs"
});

con.connect((err)=>{
    if(!err){
        console.log("Database connection established!");
    }
    else{
        console.log(err);
    }
});

// here only uses for write external data into internal file.
 function writeFileInAsync(path="", data) {
     let d = JSON.stringify(data); //convert in string
        //This line use for jsondata.js file only.
    fs.writeFile(path , d , (err, result)=>{

        if(!err){
            console.log("Data Written on following path.");
        }
        else  console.log("Error: Data Doesn't written on desire file location.");
    })
 }

const getDataByQuery = "SELECT * FROM ZoroDb;";
let haveUpdate;
con.query(getDataByQuery, (err, result)=>{
    if(!err){
        haveUpdate = result;
         jsonData  = result;
        console.log("Data Imported Successfully From Mysql!");
    }
    else{ 
        console.log("Couldn't get the data from database so, data collected from local pre stored json file!");
    }
});


app.get("/", (req, res)=>{
    res.render("root", {pageName: "Free Anime Streaming Online"}); 
    if(haveUpdate){
                writeFileInAsync("./dataFromMysql.json", haveUpdate); //already file stored don't try to run this function otherwise you will lose data if you have no access to mysql data.
    } 
})

app.get("/home"  , (req, res)=>{
    res.render("home" , { AnimeData : jsonData});
})

app.get("/movies" , (req, res)=>{
    // console.log(jsonData[0]);
    res.render("movies", {AnimeData : jsonData}); // data => for raw-data from mySql & jsonData => internally stored data.
})

app.get("/movies/contentPage", (req, res)=>{
    const {id} = req.query;
    // console.log(id);
    res.render("contentPage" , {TargetAnimeId : Number(id) -1 , TargetAnime : jsonData[Number(id) -1] , AnimeData : jsonData});
})

app.get("/movies/watch", (req, res)=>{
    const {id} = req.query;
    // console.log(id);
    res.render("watch" , {TargetAnimeId : Number(id) -1 , TargetAnime : jsonData[Number(id) -1] , AnimeData : jsonData});
})



// If any path have "/e then it will be show an error page"
    app.get( "*/e", (req, res)=>{
        res.status(404).render("Error");
    });

    


/*
const myLogger = function (req, res, next){
    const a = "Hello Wolrd";
    module.exports= {a};
    console.log("Exported Successfully!");
    next();
}
app.use(myLogger);

app.get("/" , (req, res)=>{
    // res.redirect(200, "htmlFiles/root.html");

})
*/


// app.listen(3000, (err)=>{
//     if(!err)  { console.log("Server Listening On: 3000"); }

//     else{console.log(err);}
// });
const PORT = process.env.PORT || 3030;
app.listen(PORT, (err)=>{
    if(!err)  { console.log(`Server Listening On: ${PORT}`); }

    else{console.log(err);}
});
