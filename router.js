class Router {

    constructor(routes) {

        this.routes = routes;
        this._loadInitialRoute();

    }

    loadRoute(...urlSegs) {

        const matchedRoute = this._matchUrlToRoute(urlSegs);
        const url = `/${ urlSegs.join('/') }`;
        history.pushState({}, 'this works', url);

        const routerOutElm = document.querySelectorAll('[data-router]')[0];
        routerOutElm.innerHTML = matchedRoute.template

    }

    _matchUrlToRoute(urlSegs) {

        const matchedRoute = this.routes.find(route => {

            const routePathSegs = route.path.split('/').slice(1);

            if(routePathSegs.length !== urlSegs.length) {
                return false;
            }

            return routePathSegs
                .every((routePathSeg, i) => routePathSeg === urlSegs[i]); 
                // Valida que todos los elementos de un array cumplan con la condición pasada. Retorna un boolean.

        });

       return matchedRoute;

    }

    _loadInitialRoute() {

        const pathNameSplit = window.location.pathname.split('/');
        // Retorna la URL en la que está.
        const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : '';
    
        this.loadRoute(...pathSegs);
    
    }

}

