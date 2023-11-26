import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '082366690f82418280212c4f11673f69',
    },
});