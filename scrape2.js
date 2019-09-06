
// This example creates a csv file when run

const axios = require('axios')
const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const writeStream = fs.createWriteStream('post.csv')

//write headers
writeStream.write(`Title,Instruction \n`)


 request('https://www.eatthelove.com/vegetarian-breakfast-tacos/', (error, response, html) => {
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
            
            // Write row to csv
            writeStream.write(`${title}, ${instructions}`)
        })

        console.log('Scrapping done....')
    })
    }
})

module.exports = scrape2
            
      