const BaseClass = require('./Base');

class Category extends BaseClass {
    find(obj = {}) {
        return new Promise((res, rej) =>
            this.db
                .find(obj)
                .sort({ createdAt: -1 })
                .exec((err, docs) => (err ? rej(err) : res(docs)))
        );
    }
}

module.exports = new Category('categories.db');
