const books = require('./books');

class Utils {
    getKeys(allowedResourceType) {
        if(!books) {
            next(new Error('Ha ocurrido un error.'));
        }

        for(let key in books) {
            if(allowedResourceType === key) {
                return books[key];
            }
        }
    }

    getKey(allowedResourceType, id) {
        if(!books) {
            next(new Error('Ha ocurrido un error.'));
        }

        for(let key in books) {
            if(allowedResourceType === key) {
                const items = books[key];
                const result = items.filter(item => item.idLibro === id);
                return result;
            }
        }
    }
}

module.exports = Utils;