import express from 'express'
import morgan from 'morgan'
import connctDB from './confiq/db.js'
import router from './routes/auth.js';
import cors from 'cors';
import auth from './middlewares/auth.js';
import customerRoutes from './routes/customerRoutes.js';
import feedbackRoutes from "./routes/feedbackRoutes.js";
import analyticsRoutes from './routes/analytics.js';
import communicationRoutes from "./routes/communication.routes.js"


const app = express();
app.use(express.json()); // Parse JSON request bodies
app.use(cors());

// Middlewares


app.use(morgan('tiny'));

// Routes

app.use("/api", router);
app.use('/api', customerRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api', analyticsRoutes);
app.use('/api/customers', communicationRoutes);

app.get("/protected", auth, (req, res) => {

    return res.status(200).json({...req.user._doc});

});

app.get('/', (req, res) => {
    res.send("Hello World")
});



//Server Confiq

const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {

    try {

    await connctDB()
    
    console.log(`server is running on port: ${PORT}`)
        
    } catch (error) {

        console.log(err);
        
        
    }
    
});