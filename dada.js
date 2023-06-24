'use strict';
const puppeteer = require('puppeteer')
const s = require('./shuffle')

async function getArticleBody(articleUrl) {

  const browser = await puppeteer.launch()
  const page = await browser.newPage();
  await page.goto(articleUrl);
  await page.waitForSelector('body');

  let articleBody = await page.evaluate(() => {

    let allParagraphs = document.querySelectorAll('.article-body-commercial-selector > p');
    let scrapeItems = [];

    allParagraphs.forEach(item => {
      scrapeItems.push(item.innerText);
    });

    const allContent =
      scrapeItems.join('')
        .replace(/[\r\n]/g, '')
        .replace(/[\.|“|”]/g, ' ');

    return allContent;
  });

  await browser.close();

  return articleBody

}

function makePoem(articleBody, seed){

  // get a list of words delimited by a single space
  const wordsList = articleBody.split(" ").filter(el => el !== '')
  // get 10 of them and randomise the order
  const shuffled = s.shuffle(wordsList, seed).splice(0,10)
  // put them back together again in a string
  const poem = shuffled.join(' ').toLowerCase()
  const poemCapitalised = poem.replace(poem.charAt(0), poem.charAt(0).toUpperCase())
  return poemCapitalised
}


module.exports = { getArticleBody, makePoem }
