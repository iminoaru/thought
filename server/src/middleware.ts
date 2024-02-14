const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const MW = (req: any, res: any, next: any) => {
    
    const secret : string = req.headers.secret;

    if (!secret) {
        res.status(401).send({ message: 'No secret found in request headers' });
        return;
    }

    if (secret + 'gg' === process.env.KEY) {
        next();
    } else {
        res.status(401).send({ message: 'Invalid secret' });
    }
}

export default MW;