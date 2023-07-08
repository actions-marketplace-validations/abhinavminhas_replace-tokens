"use strict"

const core = require('@actions/core')
const replace = require('./src/replace')

try {
  const files = core.getInput('files')
  const replacements = core.getInput('replacements')
  await replace.replaceTokens(files, replacements)
} catch (error) {
  setFailed(error.message)
}