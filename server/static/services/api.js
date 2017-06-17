import $ from "jquery";

export default class ApiClient {
    constructor() {
    }
    
    getPath(src, dest) {
        $.get("/api/search?" +this.buildQueryString(src, dest), function(data) {
            return data;
        });
    }

    buildQueryString(src, dest) {
        return "src=" +src +"&dest=" +dest;
    }
}

