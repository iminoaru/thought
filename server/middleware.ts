import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const MW = (req: any, res: any, next: any) => {
    
    const secret = req.headers.secret;

    if (!secret) {
        res.status(401).send({ message: 'No secret found in request headers' });
        return;
    }

    if (bcrypt.compare(process.env.KEY , secret as string)) {
        next();
    } else {
        res.status(401).send({ message: 'Invalid secret' });
    }
}

export default MW;