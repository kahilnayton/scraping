

//index.js

const axios = require('axios')
const request = require('request')
const cheerio = require('cheerio')

// //Define sets to avoid getting duplicate categories
const name = new Set()
const title = new Set();
const ingredients = new Set();
const directions = new Set();


// Use the `get` method of axios with the URL of the ButterCMS documentation page as an argument
const fetchData = async () => {
    const result = await axios.get('https://www.eatthelove.com/vegetarian-breakfast-tacos/')
            return cheerio.load(result.data)
        }

    const getResults = async () => {
        const $ = await fetchData()

        $('.wprm-recipe-ingredient').each((i, el) => {
            title.add($(el).text())
            // .find('.wprm-recipe-ingredient')
            // .text()
            // .replace(/\s\s+/g, ''))
        
        // $('.wprm-recipe-instruction').each((i, el) => {
        //     const instructions = $(el)
        //     .find('.wprm-recipe-instruction-text')
        //     .text()
            // //   console.log(result.data)
    //         name = $('.blog-title').text()
    //         entryTitle = $('.entry-header').text()
    //         const output = siteHeading.find('h1').text()

    // $(".entry-title h1").each((i, el) => {
    //     title.add($(el).text());
    // });
    // $("span").each((i, el) => {
    //     ingredients.add($(el).text());
    // });
    // $("span #text").each((i, el) => {
    //     directions.add($(element).text());
    // })
    
})

    // //     Using a spead opperator to turn the object into an array and then using the sort function to order them by their utf-16 code
    
    console.log(title)
    return {
        title: [...title].sort(), title,
        //   ingredients: [...ingredients].sort(),
      //   directions: [...directions].sort(),
    }
}

getResults()

  module.exports = getResults;