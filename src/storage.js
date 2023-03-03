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

    getAllJsonData() {
        return JSON.stringify(this.storage);
    }

}

module.exports = Storage;