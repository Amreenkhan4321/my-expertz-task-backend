import jwt from 'jsonwebtoken'

export const Auth = async (req, res, next) => {
    const token = req.header("auth");

    if (!token) {
      
        return res.status(401).json({ message: 'Unauthorized' });


    } else {
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
            if (decode.employee) {
                req.employee = decode.employee;
            }

            next();
        } catch (err) {
            return res.status(401).json({ message: 'Token not authorized' });


        }
    }
};