const placeParams = require('../index')


describe('[Unit] place-params', () => {
    it('should replace positional params with object values', () => {
        const baseUrl = 'http://api.io/users/:userId/roles/:roleId'
        const params = {
            userId: 1,
            roleId: 2
        }
        const url = placeParams(baseUrl, params)
        expect(url).toBe('http://api.io/users/1/roles/2')
    })

    it('should replace repeated params', () => {
        const baseUrl = 'http://api.io/sellers/:sellerId/related/:sellerId'
        const params = {
            sellerId: 42
        }
        const url = placeParams(baseUrl, params)
        expect(url).toBe('http://api.io/sellers/42/related/42')
    })
})