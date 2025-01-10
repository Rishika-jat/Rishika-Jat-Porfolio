// import app from "./app.js";
// import dotenv from "dotenv";
// dotenv.config({path:'./config/config.env'})

// app.listen(process.env.PORT, ()=>{
//     console.log(`Server running on PORT ${process.env.PORT}`)
// }).on('error', (err) => { console.error('Error:', err.message); });



// import app from "./app.js";
// // const server = http.createServer((req, res) => {
// //     res.writeHead(200, { "Content-Type": "text/plain" });
// //     res.end("Hello, Node.js is working!");
// // });

// app.listen(process.env.PORT, () => {
//     console.log(`Server running at ${process.env.PORT}` );
// });


import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});