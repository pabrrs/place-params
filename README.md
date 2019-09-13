# place-params

Build URL with positional params by using javascript objects :slot_machine:

# Install
```sh
npm install place-params
```

# Usage
```js
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
MIT