
import { Express, Router } from 'express';
import { PrismaClient } from "@prisma/client";
import MW from '../middleware';

const prisma = new PrismaClient();
const app = Router();

app.get('/' , MW , async (req, res) => {

    const textList = await prisma.thoughts.findMany({
        select: {
            text: true
        }
    });
    if(textList){
        res.status(200).send(textList)
    }
    else{
        res.status(400).send({message : "cant fetch textList"})
    }
})


export default app;