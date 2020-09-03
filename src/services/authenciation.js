import axios from 'axios';

const urlAPI = "https://MobileStore.radiun42.repl.co/users";

const login = async (data) => {
    try {
        const result = await axios.post(`${urlAPI}/login`, data);
        return result;
    }
    catch (e) {
        console.log(e);
    }
};

export { login };