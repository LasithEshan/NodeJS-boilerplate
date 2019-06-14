import express from 'express';
import constants from './config/constants';

const app = express();

app.listen(constants._PORT, err => {
    if(err){
        throw err;
    }else{
        console.log(`
        Server running on port: ${constants._PORT}
        --------------------------------
        Running on ${process.env.NODE_ENV}
        --------------------------------
        `)
    }
})