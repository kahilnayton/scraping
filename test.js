

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
fetchData = () => request('https://www.eatthelove.com/vegetarian-breakfast-tacos/', (error, response, html) => {
        if (!error && response.statusCode == 200) {
            const $ = cheerio.load(html)

    $('.wprm-recipe-ingredients').each((i, el) => {
        const title = $(el)
        .find('.wprm-recipe-ingredient')
        .text()
        .replace(/\s\s+/g, '')
        
        $('.wprm-recipe-instruction').each((i, el) => {
            const instructions = $(el)
            .find('.wprm-recipe-instruction-text')
            .text()

            console.log(title)
            
            // Write row to csv
            // writeStream.write(`${title}, ${instructions}`)
        })

        console.log('Scrapping done....')
    })
    }
})


let siteName = ''



fetchData()