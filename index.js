const fs = require('fs');
const http = require('http');
const morgan = require('morgan')
const express = require('express');
const mongoose = require('mongoose');
// const User = require('./modals/user');
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
app.use(express.json())
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

app.use(require('./Router/userRouter'));
app.use(require('./Router/productRouter'));
app.use(require('./Router/cartRouter'));
app.use(require('./Router/categoryRouter'));

app.get('/adduser',(req,res)=>{
    
    // const user1 = new User({
    //     id:21,
    //     name:"sourav mahanty",
    //     username:"chintu",
    //     email:"souravmahanty12@gmail.com",
    //     address:{
    //         street:"dhadanga road",
    //         suite:"Apt. 556",
    //         city:"kolkata",
    //         zipcode: "723127",
    //         geo:{
    //             lat:"-10.2344",
    //             lng:"81.4545",
    //         },
    //     },
    //     phone:"7384750135",
    //     website:"ahantygroup.com",
    //     company:{
    //         name:"ongraph",
    //         catchPhrase:"hello",
    //         bs:"hii alll"
    //     }
    // });
    // user1.save()
    //     .then((result)=>{
    //         res.send(result)
    //     })
    //     .catch((err)=>{
    //         console.log("ggg",err)
    //     })
    // User.find().then((result)=>{
    //     console.log(result)
    //     res.send(result)
    // }).catch((err)=>{
    //     console.log(err)
    // })

    // User.aggregate([{$match:{"id":1}}]).then((result)=>{
    //     console.log(result)
    //     res.send(result)
    // }).catch((err)=>{
    //     console.log(err)
    // })

    // User.aggregate([{$match:{"id":{$gt:6}}}]).then((result)=>{
    //     console.log(result)
    //     res.send(result)
    // }).catch((err)=>{
    //     console.log(err)
    // })

    // User.aggregate([{$match:{"address.geo.lng":{$gt:"10"}}}]).then((result)=>{
    //     console.log(result)
    //     res.send(result)
    // }).catch((err)=>{
    //     console.log(err)
    // })

    // User.aggregate([{$group:{_id:"$name",count:{$sum:1}}}]).then((result)=>{
    //     console.log(result)
    //     res.send(result)
    // }).catch((err)=>{
    //     console.log(err)
    // })

    // User.aggregate([{$group:{_id:"$address.street",count:{$sum:1}}}]).then((result)=>{
    //     console.log(result)
    //     res.send(result)
    // }).catch((err)=>{
    //     console.log(err)
    // })

    // User.aggregate([{$group:{_id:"$name",count:{$sum:1}}}]).then((result)=>{
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