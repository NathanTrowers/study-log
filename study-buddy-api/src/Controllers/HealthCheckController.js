import { success } from "../Constants/HttpCodeConstants.js";

const healthCheckController = (req, res, next) => {
    try {
        res.status(success.OK)
            .json({
                uptime: process.uptime(),
                message: 'All is well!',
                date: new Date()
            });
    } catch (error) {
        console.log('Singting did go rang!', error);
        next(error);
    }

    next();
}

export default healthCheckController;
