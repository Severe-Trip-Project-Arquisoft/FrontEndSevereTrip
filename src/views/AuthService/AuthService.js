import axios from 'axios';

//const USER_API_BASE_URL = 'https://localhost:8443/login';
const USER_API_BASE_URL = 'http://3.222.8.195:8080/login';

class AuthService {
    
    async login(credentials){
        return await axios.post(USER_API_BASE_URL, credentials)
    }

    getUserInfo(){
        return JSON.parse(sessionStorage.getItem("userInfo"));
    }

    getAuthHeader() {
       return {headers: {Authorization: 'Bearer ' + this.getUserInfo().token }};
    }

    logOut() {
        sessionStorage.removeItem("userInfo");
        return axios.post(USER_API_BASE_URL + 'logout', {}, this.getAuthHeader());
    }
}

export default new AuthService();
