import { SUCCESS } from "../Constants/HttpCodeConstants.js";

const healthCheckController = (req, res, next) => {
    try {
        const healthReport = {
            uptime: process.uptime(),
            message: 'All is well!',
            date: new Date()
        }
        
        res.status(SUCCESS.OK)
            .json(healthReport);
    } catch (error) {
        console.log('Singting did go rang!', error);
        next(error);
    }

    next();
}

export default healthCheckController;
