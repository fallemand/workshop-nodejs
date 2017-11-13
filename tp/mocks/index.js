/**
 * Mocks
 * Al hacer require de mocks, se ejecuta este index
 */

const nock = require('nock');
const melinock = nock('https://api.mercadolibre.com/').persist();
const searchMock = require('./search')
const suggestMock = require('./suggest')
const descriptionMock = require('./description')
const itemMock = require('./item')
const categoriesMock = require('./categories')

// Item
melinock
    .get(/\/id\/(.+)*/)
    .query(true)
    .reply(200, itemMock)

// Search
melinock
    .get(/\/sites\/(.+)*\/search/)
    .query(true)
    .reply(200, searchMock)
    
// Suggest
melinock
    .get(/\/sites\/(.+)*\/autosuggest/)
    .query(true)
    .reply(200, suggestMock)

// Description
melinock
    .get(/\/items\/(.+)*\/description/)
    .query(true)
    .reply(200, descriptionMock)
    
// Item
melinock
    .get(/\/items\/(.+)*/)
    .query(true)
    .reply(200, itemMock)

// Category
melinock
    .get(/\/categories\/(.+)*/)
    .query(true)
    .reply(200, categoriesMock)