
import { Express, Router } from 'express';
import { PrismaClient } from "@prisma/client";
import MW from '../middleware';

const prisma = new PrismaClient();
const app = Router();

app.get('/' , MW , async (req, res) => {

    const textList = await prisma.thoughts.findMany({
        select: {
            text: true,
            time: true
        }
    });
    if(textList){
        res.status(200).send(textList)
    }
    else{
        res.status(400).send({message : "cant fetch textList"})
    }
})

app.get('/filter' , async (req , res) => {
    const startDate : string = Array.isArray(req.query.from) ? (req.query.from[0] as string) : (req.query.from as string) || "";
    const endDate: string = Array.isArray(req.query.to) ? (req.query.to[0] as string) : (req.query.to as string) || ""

    const filteredText = await prisma.thoughts.findMany({
        where: {
            time : {
                lte: new Date(endDate).toISOString(), 
                gte: new Date(startDate).toISOString()
              }
        },
        select: {
            text : true,
            time : true
        }
        
    })

    res.status(200).send(filteredText)
})


export default app;