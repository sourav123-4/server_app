const fs = require('fs');
const http = require('http');
const morgan = require('morgan')
const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./modals/blog');
const app = express();
const dbURL = 'mongodb+srv://sourav4253:sourav_4253@cluster0.su3zk.mongodb.net/Fake_Api?retryWrites=true&w=majority';
mongoose.connect(dbURL,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
    },()=>{
        app.listen(3000);
        console.log("db connected")
    }
)

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.render('Home',{title: "Home"});
});

app.get('/about',(req,res)=>{
    res.render('About',{title: "About"});
});

app.get('/about-me',(req,res)=>{
    res.redirect('/about');
});

app.get('/aggregate',(req,res)=>{
    // const blog1 = new Blog({
    //     title: "titlee",
    //     snippet: "about my hobbies",
    //     body: "more about my blog"
    // });
    // blog1.save()
    //     .then((result)=>{
    //         res.send(result)
    //     })
    //     .catch((err)=>{
    //         console.log("ggg",err)
    //     })
    // Blog.find().then((result)=>{
    //     console.log(result)
    //     res.send(result)
    // }).catch((err)=>{
    //     console.log(err)
    // })

    // Blog.aggregate([{$match:{"id":1}}]).then((result)=>{
    //     console.log(result)
    //     res.send(result)
    // }).catch((err)=>{
    //     console.log(err)
    // })

    // Blog.aggregate([{$match:{"id":{$gt:6}}}]).then((result)=>{
    //     console.log(result)
    //     res.send(result)
    // }).catch((err)=>{
    //     console.log(err)
    // })

    Blog.aggregate([{$match:{"id":{$gt:9}}}]).then((result)=>{
        console.log(result)
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    })

    // Blog.aggregate([{$group:{_id:"$name",count:{$sum:1}}}]).then((result)=>{
    //     console.log(result)
    //     res.send(result)
    // }).catch((err)=>{
    //     console.log(err)
    // })

    // Blog.aggregate([{$group:{_id:"$address.street",count:{$sum:1}}}]).then((result)=>{
    //     console.log(result)
    //     res.send(result)
    // }).catch((err)=>{
    //     console.log(err)
    // })

    // Blog.aggregate([{$group:{_id:"$name",count:{$sum:1}}}]).then((result)=>{
    //     console.log(result)
    //     res.send(result)
    // }).catch((err)=>{
    //     console.log(err)
    // })
})

app.use((req,res)=>{
    res.status(404).render('404',{title: "404"});
});

// const server = http.createServer((req,res)=>{
//     console.log("request made");
//     res.setHeader('Content-TYpe','text/html');
//     let path = './views/';
//     switch(req.url){
//         case '/':
//             path += 'Home.html';
//             res.statusCode = 200;
//             break;
//         case '/about':
//             path += 'About.html';
//             res.statusCode = 200;
//             break;
//         case '/about-me':
//             res.statusCode = 301;
//             res.setHeader('Location','/about');
//             res.end();
//             break;
//         default:
//             path += '404.html'
//             res.statusCode === 404;
//             break;
//     }
//     fs.readFile(path,(err,data)=>{
//         if(err){
//             console.log(err);
//             res.end(err);
//         }else{
//             res.statusCode === 200;
//             res.end(data);
//         }
//     })
// });

// server.listen(3000,'localhost',()=>{
//     console.log("server startted at port no 3000")
// })