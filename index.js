import express from 'express';
import PostRouter from "./src/modules/posts/posts.routes.js"
import cors from 'cors';
const app = express();
const port = 3000;




app.use(cors(corsOptions));

app.use(express.json());
app.use("/posts", PostRouter);


var whitelist = ['http://127.0.0.1:5500']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}



app.use("*", (req,res) => {
    res.status(404).json({msg:"404 page not found"})
    
});
app.listen(port, () => {
    console.log(`Server running on port port`);
});