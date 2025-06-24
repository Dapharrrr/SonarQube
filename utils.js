const validateUser = (user) => {
    const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return user.name.length > 0 && validEmailRegex.test(user.email);
};

module.exports = { validateUser };
