const hasing = require('../helpers/hash');
const database = require('../models/model');
const registercontrollers = async (req, res) => {
    try {
        const { name, email, password, conformpassword, phone, username } = req.body;
        const finddata = await database.findOne({ email });
        if (name && email && password && conformpassword && phone && username) {
            if (finddata) {
                res.status(201).send('Email id already exist ');

            }
            else {
                if (password === conformpassword) {
                    const passwordhasing = await hasing(password);
               
                    const insertdata = new database({ name, email,password:passwordhasing, phone, username });
                    await insertdata.save();
                    res.status(200).send('Registration sucessfull');
                }
                else {
                    res.status(401).send('Password and ConformPassword are not matched');
                }

            }
        }
        else {
            res.status(500).send('All field require');

        }

    }

    catch (error) {
        console.log(error);
    }
}
module.exports = registercontrollers;