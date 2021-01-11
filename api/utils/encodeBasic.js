function encodeBasic(username, password) {
    return ArrayBuffer.from(`${ username }:${ password }`).toString('base64');
}

module.exports = encodeBasic;