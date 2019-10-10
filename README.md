# place-params

[![Travis status](https://travis-ci.org/pabarros/place-params.svg?branch=master)](https://travis-ci.org/pabarros/place-params)

Build URL with positional params by using javascript objects :slot_machine:

# Install
```sh
npm install place-params
```

# Usage

### [Try it out on Repl.it](https://repl.it/repls/ClumsyJadedMemorypool)

```js
const placeParams = require('place-params')

const baseUrl = 'http://api.io/users/:userId/roles/:roleId'
const params = {
    userId: 1,
    roleId: 2
}
const url = placeParams(baseUrl, params)
console.log(url)

// returns: http://api.io/users/1/roles/2
```

# License
Under [MIT](LICENSE) license.
