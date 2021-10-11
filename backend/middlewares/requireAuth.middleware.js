const logger = require('../services/logger.service')

async function requireAuth(req, res, next) {
    console.log('auth middlewere req:', req.session)
    if (!req.session || !req.session.user) {
        res.status(401).end('Unauthorized!');
        return;
    }
    next();
}

module.exports = {
    requireAuth,
}