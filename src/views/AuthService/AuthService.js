import axios from 'axios';
import crypto from 'crypto'

const USER_API_BASE_URL = 'https://52.5.42.71:8080/login';
//  const USER_API_BASE_URL = 'https://localhost:8443/login';

class AuthService {
    
    async login(credentials){
        credentials.password = crypto.createHash('sha256').update(credentials.password).digest('hex');
        return await axios.post(USER_API_BASE_URL, credentials
            ).catch(e => console.log('Error: ', e));
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
