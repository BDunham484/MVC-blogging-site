//function to redirect user to login page if not loggedIn
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

//export function
module.exports = withAuth;