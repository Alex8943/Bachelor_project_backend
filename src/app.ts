import express from 'express';
import { testDBConnection } from "./db_services/db_connection";

const app = express();


testDBConnection();






app.listen(3000, () => {
    console.log('Server is running on localhost:3000');
});


