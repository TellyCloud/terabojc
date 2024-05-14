const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://terabox-downloader-free.pages.dev/api?data=${id}`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
