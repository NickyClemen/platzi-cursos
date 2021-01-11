function getHashParams() {
    const hashParams = {};
    const regex = /([^&;=]+)=?([^&;]*)/g;
    const query = window.location.hash.substring(1);

    let e;

    while((e = regex.exec(query))) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    return hashParams;
}

export default getHashParams;