"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const database_1 = require("../database");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield database_1.connection.query('SELECT * FROM users');
        res.json(rows);
    }
    catch (error) {
        res.status(500).send('Erro ao buscar usuários');
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const [rows] = yield database_1.connection.query('SELECT * FROM users WHERE id = ?', [id]);
        res.json(rows);
    }
    catch (error) {
        res.status(500).send('Erro ao buscar usuário');
    }
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = req.body;
    try {
        const [result] = yield database_1.connection.query('INSERT INTO users SET ?', [newUser]);
        res.json(Object.assign({ id: result.insertId }, newUser));
    }
    catch (error) {
        res.status(500).send('Erro ao criar usuário');
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updatedUser = req.body;
    try {
        yield database_1.connection.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id]);
        res.send('Usuário atualizado com sucesso');
    }
    catch (error) {
        res.status(500).send('Erro ao atualizar usuário');
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield database_1.connection.query('DELETE FROM users WHERE id = ?', [id]);
        res.send('Usuário deletado com sucesso');
    }
    catch (error) {
        res.status(500).send('Erro ao deletar usuário');
    }
});
exports.deleteUser = deleteUser;
