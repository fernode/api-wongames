'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */

const axios =  require("axios");

module.exports = {
  populate: async (params)=>{
    const gogApi = `https://www.gog.com/games/ajax/filtered?mediaType=game&page=1&sort=popularity`;
    const {data: {products}} = await axios.get(gogApi);
    console.log(products);
  }
};
