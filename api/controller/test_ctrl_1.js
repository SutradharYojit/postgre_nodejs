const pgCtrl = require('../connection/connection')


getData = (req, res, next) => {
    pgCtrl.client.query('SELECT * FROM yojit', (err, result) => {
        if (!err) {
            res.status(200).send(result.rows);
        } else {
            res.status(404).json({
                message: "Database not found"
            });
        }
    })

}


getById = (req, res, next) => {

    const id = req.params.id
    pgCtrl.client.query(`SELECT * FROM yojit where id=${id}`, (err, result) => {
        if (!err) {
            res.status(200).send(result.rows);
        } else {
            res.status(404).json({
                message: "Database not found"
            });
        }
    })

}


userPost = (req, res, next) => {

    const body = req.body;
    const insertQuery = `INSERT INTO yojit(id, name)VALUES (${body.id}, '${body.name}')`
    pgadmin.client.query(insertQuery, (err, result) => {
        if (!err) {
            res.status(200).send({ message: "insertion Sucessfull" });
        } else {
            res.status(404).json({
                message: "Insertion failed"
            });
        }
    })

}
module.exports = { getData, getById, userPost }