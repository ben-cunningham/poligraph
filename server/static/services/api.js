import $ from "jquery";

export default class ApiClient {
    constructor() {
    }
    
    getPath(src, dest, onSuccess) {
        $.get("/api/search?" +this.buildQueryString(src, dest), function(data) {
            onSuccess(data);
        });
    }

    searchPolitician(query, onSuccess) {
        $.get("/api/politician/search?q=" +query, function(results) {
            onSuccess(results);
        });
    }

    buildQueryString(src, dest) {
        return "src=" +src +"&dest=" +dest;
    }
}

