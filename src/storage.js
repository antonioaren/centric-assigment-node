class Storage {
    constructor() {
        this.storage = {};
    }

    getDataSaved() {
        return this.storage;
    }

    saveData(key, value) {
        this.storage[key] = value;
    }

    getAllDataParsed() {
        return JSON.parse(this.storage);
    }

}

module.exports = Storage;