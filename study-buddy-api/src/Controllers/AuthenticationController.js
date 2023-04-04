import { success, clientError } from '../Constants/HttpCodeConstants.js';
import validateLogin  from '../Validators/LoginValidator.js';

export const isLoggedIn = (req, res, next) => {
    req.session.authorized 
        ? res.redirect('/dummy')
        : res.status(success.OK)
            .json({ 
                message: 'Hi there scholar, let\'s see those credentials!', 
                isLoggedIn: false
            });
}

export const login = async (req, res, next) => {
    try {
        const user = await validateLogin(req);
        if (!user) {
            throw Error('message: Login Attempt Failed');
        }

        res.status(success.ACCEPTED)
            .json({
                message: 'Login successful!',
                user: user
            });
    } catch (error) {
        console.error('%s \n code: %d', error, clientError.UNAUTHORIZED);

        res.status(clientError.BAD_REQUEST)
            .json({message: 'Login Attempt Failed!'});
    }

    next();
}

export const logout = (req, res) => {
    req.session.destroy();
    res.redirect('login');
}
