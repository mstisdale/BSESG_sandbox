import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, {Request, Response} from 'express';
import { BAD_REQUEST } from 'http-status-codes';
//import BaseRouter from './routes';
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({extended: true}));

// Add APIs
//app.use('/api', BaseRouter);
app.get('/', (req: Request, res: Response) => {
    console.log("Serving Request to: " + req.hostname + " - " + req.ip);
    res.send('Hello BSESG!');
});

export default app;