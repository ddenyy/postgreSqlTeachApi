const db = require('../database/db')
class UserController {
    async createUser(req,res) {
        const { name, surname } = req.body;
        console.log(name, surname);

        const newPerson = await db.query(`INSERT INTO person (name, surname) values ($1, $2) RETURNING *`, [name, surname]);

        res.json(newPerson.rows[0]);

    }
    async getUser(req,res) {
        const users = await db.query(`SELECT * FROM person`);
        res.json(users.rows);
    }

    async getOneUser(req,res) {
        const { id } = req.params;
        const users = await db.query(`SELECT * FROM person WHERE id=${id}`);
        res.json(users.rows);
    }
    async updateUser(req,res) {

        const { id, name, surname } = req.body;

        const users = await db.query(
            `update person set name=$1, surname=$2 where id=$3 returning *`,
            [name, surname, id]
        );

        res.json(users.rows[0]);
    }

    async deleteUser(req,res) {
        const { id } = req.params;

        const userDeleted = await db.query(
            'DELETE FROM person WHERE id=$1',
            [id]
        )
        res.json(userDeleted.rows[0]);
    }
}

module.exports = new UserController();
