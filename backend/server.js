import express from 'express';
import cors from 'cors';



// app config
const app = express();
const port = 4000;

// middlewares
app.use(express.json())
app.use(cors());

app.get("/", (req,res) => {
    res.send("Api working")

})
app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
});