
import { Express , Router } from 'express';
import { PrismaClient } from "@prisma/client";
import MW from '../middleware';

const prisma = new PrismaClient();
const app = Router();

app.post('/', MW , async (req, res) => {
    const text : string = req.body.text
    
    const id = await prisma.thoughts.create({
        data: {
            text: text
        },
        select: {
            id: true
        }
    });

    if (id) {
        res.status(200).send({ message: 'Thought added successfully' });
    } else {
        res.status(500).send({ message: 'Failed to add thought' });
    }

})


export default app;