const Datastore = require('nedb');
const { setFileLocation } = require('../utils/file-operations');

module.exports = class Base {
    constructor(fileName) {
        this.db = new Datastore({
            filename: setFileLocation(fileName),
            autoload: true,
            timestampData: true,
        });
    }

    insert(obj) {
        return new Promise((res, rej) =>
            this.db.insert(obj, (err) => (err ? rej(err) : res(obj)))
        );
    }

    find(obj = {}) {
        return new Promise((res, rej) =>
            this.db.find(obj, (err, docs) => (err ? rej(err) : res(docs)))
        );
    }

    findOne(obj) {
        return new Promise((res, rej) =>
            this.db.findOne(obj, (err, doc) => (err ? rej(err) : res(docs)))
        );
    }

    update(target, changes, opts = {}) {
        return new Promise((res, rej) =>
            this.db.update(target, { $set: changes }, opts, (err, doc) =>
                err ? rej(err) : res(doc)
            )
        );
    }

    remove(obj, opts = {}) {
        return new Promise((res, rej) =>
            this.db.remove(obj, opts, (err, doc) => (err ? rej(err) : res(doc)))
        );
    }
};
