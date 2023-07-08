"use strict"

const { before } = require('mocha')
const replace = require('../src/replace')
const expect = require('chai').expect
const fs = require('fs')

before(async () => {
    let content = 'Hi,\r\n\r\nHow are you ?'
    fs.writeFileSync('./test/test-files/file_replace_single.txt', content)
    content = 'Hi,\r\n\r\nHow are you ??'
    fs.writeFileSync('./test/test-files/file_replace_multiple.txt', content)
})                                                                      

describe('REPLACE TOKENS TESTS', () => {

    it('Test 1: Replace a token in the text file.', async () => {
        await replace.replaceTokens('./test/test-files/file_replace_single.txt', "?=.")
        const data = fs.readFileSync('./test/test-files/file_replace_single.txt', 'utf8')
        expect(data).to.not.be.equals(undefined)
        expect(data.includes('?')).to.be.equals(false)
        expect(data.includes('.')).to.be.equals(true)
    })
    
    it('Test 1: Replace similar multiple tokens in the text file.', async () => {
        await replace.replaceTokens('./test/test-files/file_replace_multiple.txt', "?=.,?=.")
        const data = fs.readFileSync('./test/test-files/file_replace_multiple.txt', 'utf8')
        expect(data).to.not.be.equals(undefined)
        expect(data.includes('?')).to.be.equals(false)
        expect(data.includes('.')).to.be.equals(true)
    })
})