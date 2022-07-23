import { SUCCESS } from "../Constants/HttpCodeConstants.js";

const pingController = (req, res, next) => {
    try {
        res.status(SUCCESS.OK).json({ message: 'Yu jus ping mi, is waa\'m?' });
    } catch (error) {
        console.log('Singting did go rang!', error);
        next(error);
    }

    next();
}

export default pingController;