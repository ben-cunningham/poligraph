import $ from "jquery";

export default class ApiClient {
    constructor() {
    }
    
    getPath(src, dest, onSuccess, onError) {
        $.get("/api/search?" +this.buildQueryString(src, dest), function(data) {
            onSuccess(data);
        })
        .fail(function(data) {
            onError();
        });
    }

    searchPolitician(query, onSuccess, onError) {
        $.get("/api/politician/search?q=" +query, function(results) {
            onSuccess(results);
        })
        .fail(function(data) {
            console.log(data);
        });
    }

    buildQueryString(src, dest) {
        return "src=" +src +"&dest=" +dest;
    }
}

