require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 8080;
const userRouter = require('./routes/userRouters');
const postRouter = require('./routes/postRouters');


const app = express();
app.use(express.json());
app.use('/api', userRouter);
app.use('/api', postRouter);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})


