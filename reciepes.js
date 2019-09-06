const request = require('request')
const cheerio = require('cheerio')
const url = 'https://www.maangchi.com/recipes'
const axios = require('axios')

const fetchData = async () => {
    const result = await axios.get(url)
    return cheerio.load(result.data)
}

const $ = await fetchData()
const clearfix = $('.clearfix').text()

console.log(clearfix, 'clearfix')

// cheerio.load('https://www.eatthelove.com/cookies-and-cream-cookies/')

// var rec = []

// $('.list.items .item').each(function(index, element) {
//     rec[index] = {}
//     const name = $(element).find('.name')
// })

// console.log(name)

//     const url = 'https://www.eatthelove.com/cookies-and-cream-cookies/'
//     request({url:url, json: true}, (error, resp) => {
//       console.log(resp)
//     }
// )