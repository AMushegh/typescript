"use strict";
class DBpath {
    constructor(path) {
        this.path = path;
    }
    static getInstance(path) {
        if (!DBpath.instance) {
            DBpath.instance = new DBpath(path);
        }
        return DBpath.instance;
    }
}
function clientCode() {
    const s1 = DBpath.getInstance("/root");
    const s2 = DBpath.getInstance("/src");
    console.log(s1.path, s2.path);
}
clientCode();
//# sourceMappingURL=singleton.js.map