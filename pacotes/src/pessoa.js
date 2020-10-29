const Datastore = require('nedb');
const db = new Datastore();

module.exports = class Pessoa {
    static exibeTela(req, res) {
        res.status(200).sendFile(__dirname + '/pessoa.html');
    }
    static salva(req, res) {
        console.log(req.body);

        db.insert({
            nome: req.body['cmp-nome'],
            altura: req.body['cmp-altura'],
            peso: req.body['cmp-peso']
        }, function(err, object) {
            res.status(200).send(object);
        });
    }
    static exibePessoas(req, res) {
        db.find({}, function(err, objects) {
            res.status(200).send(objects);
        })
    }
}