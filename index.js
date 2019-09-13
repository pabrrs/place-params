/**
 * Build URL with positional params definded in `pathParams`
 *
 * @example
 * placeParams('http://api.io/users/:userId', { userId: 1 })
 * // returns: http://api.oi/users/1
 *
 * @param {String} baseUrl Canonical URL with params
 * @param {Array<Object>} pathParams Params with values to be replaced
 *
 * @returns {String}
 */
const placeParams = (baseUrl, pathParams) => {
    const params = Object.keys(pathParams)
    const url = params.reduce((acc, param) => {
        const pattern = new RegExp(`:${param}`, 'g')
        return acc.replace(pattern, pathParams[param])
    }, baseUrl)
    return url
}

module.exports = placeParams