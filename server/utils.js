const books = require('./books');
class Utils {
    getKeys(allowedResourceType) {
        if(!books) {
            next(new Error('Ha ocurrido un error.'));
        }

        for(let key in books) {
            if(allowedResourceType === key) {
                return books[allowedResourceType];
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

    setReqBody(body, allowedResourceType) {
        let entry;

        switch(allowedResourceType) {
            case 'books': {
                entry = {
                    idLibro: body.idLibro,
                    idAutor: body.idAutor,
                    idGenero: body.idGenero,
                    titulo: body.titulo,
                };

                return entry;
            }
            default: {
                entry = 'Por favor, ingrese una opción válida.';
                return entry;
            }
        }
    }

    setEntry(allowedResourceType, entry) {
        if(entry) {
            for(let key in books) {
                if(allowedResourceType === key) {
                    books[allowedResourceType].push(entry);
                    return books;
                }
            }
        }
    }

    updateKey(allowedResourceType, id, entry) {
        if(!books) {
            next(new Error('Ha ocurrido un error.'));
        }

        for(let key in books) {
            if(allowedResourceType === key) {
                const items = books[key];
                items.filter(item => {
                    if(item.idLibro === id) {
                        item.idLibro = entry.idLibro;
                        item.idAutor = entry.idAutor;
                        item.idGenero = entry.idGenero;
                        item.titulo = entry.titulo;
                    }
                });

                return items;
            }
        }
    }
}

module.exports = Utils;