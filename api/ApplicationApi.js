import BaseApi from "./BaseApi";

class ApplicationApi extends BaseApi {

    get_links(id) {
        return this.axios.get('/qr/get-links/'+id);
    }
}

export default new ApplicationApi();
