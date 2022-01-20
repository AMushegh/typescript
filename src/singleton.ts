class DBpath {
    private static instance: DBpath;

    private constructor(public path: string) {}

    static getInstance(path: string): DBpath {
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
