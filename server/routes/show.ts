
import { express , Router } from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = Router();