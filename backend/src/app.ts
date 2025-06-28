import express from "express";
import cors from "cors";
/* import uploadRoutes from './routes/upload.route';
import summarizeRoutes from './routes/summarize.route';
import questionRoutes from './routes/question.route';
import audioRoutes from './routes/audio.route';
*/
const app = express();
app.use(cors());
app.use(express.json());

// Routes
/* app.use('/api/upload', uploadRoutes);
app.use('/api/summarize', summarizeRoutes);
app.use('/api/question', questionRoutes);
app.use('/api/audio', audioRoutes);
*/
export default app;
