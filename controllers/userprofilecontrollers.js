const userprofilecontrollers = (req, res) => {
    res.send(req.rootUser);

}
module.exports = userprofilecontrollers;