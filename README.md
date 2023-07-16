# replace-tokens
*Replace tokens (Github action) in the text or code files with variables values during the execution of the CI/CD process.* </br></br>
[![Replace-Tokens](https://github.com/abhinavminhas/replace-tokens/actions/workflows/ci.yml/badge.svg)](https://github.com/abhinavminhas/replace-tokens/actions/workflows/ci.yml)
[![codecov](https://codecov.io/github/abhinavminhas/replace-tokens/branch/main/graph/badge.svg?token=VP3CAOQCVB)](https://codecov.io/github/abhinavminhas/replace-tokens)
![maintainer](https://img.shields.io/badge/Creator/Maintainer-abhinavminhas-e65c00)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Release](https://img.shields.io/github/v/release/abhinavminhas/replace-tokens?label=Github%20Release)](https://github.com/abhinavminhas/replace-tokens/releases)

## Inputs

- `files` - File names (path included), comma-separated for multiple files. Example: ``` file1, File2 ```
- `replacements` - Replacements, comma-separated pairs (TOKEN=value). Example: ``` key1=value1, key2=value2 ```  
    **Note:** Values can be variables/secrets.
- `delimiter` - Defines separator/delimiter to be used, default value is comma (``` , ```). Example: ``` | ``` or ``` ; ``` or ``` : ``` or ``` - ``` etc.
