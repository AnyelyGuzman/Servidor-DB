const { query } = require("../config/db");

class Users {

    async create(data) {
        try {
            return await query(
                "insert into usuarios(nombre, apellido, edad) values(?, ?, ?)",
                [data.nombre, data.apellido, data.edad]
            );
        } catch (err) { return err; }
    }

    async read() {
        try { return await query("select * from usuarios"); }
        catch (err) { return err; }
    }

    async readById(data) {
        try {
            return await query(
                "select * from usuarios where id_usuarios = ?",
                [data.id_usuarios],    
            );
        } catch (err) { return err; }
    }

    async update(data) {
        try {
            return await query(
                "update usuarios set nombre = ?, apellido = ?, edad = ? where id_usuarios = ?",
                [data.nombre, data.apellido, data.edad, data.id_usuarios],
            );
        } catch (err) { return err; }
    }

    async delete(data) {
        try {
            return await query(
                "delete from usuarios where id_usuarios = ?",
                [data.id_usuarios],
            );
        } catch (err) { return err; }
    }
}

module.exports = async data => {
    const user = new Users();

    switch(data.method) {
        case 'create':
            return await user.create(data.cont);
        
        case 'read':
            return await user.read();

        case 'readId':
            return await user.readById(data.cont);

        case 'update':
            return await user.update(data.cont);

        case 'delete':
            return await user.delete(data.cont);
    }
}