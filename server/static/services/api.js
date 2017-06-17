import $ from "jquery";

export default class ApiClient {
    constructor() {
    }
    
    getPath(src, dest, onSuccess) {
        $.get("/api/search?" +this.buildQueryString(src, dest), function(data) {
            onSuccess(data);
        });
    }

    buildQueryString(src, dest) {
        return "src=" +src +"&dest=" +dest;
    }
}

