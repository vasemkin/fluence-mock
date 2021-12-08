mock contract to integrate frontend while main contract is in dev,
intended to be used in local env

```shell
yarn chain
yarn deploy
yarn test
yarn console
yarn clean
```

to configure, create `keys.js` in the root of the project.

Fill it like this:
   ```
   // alchemy kovan key
   const ALCHEMY_KEY = "XXX";

   // the wallet you want to test
   const METAMASK_KEY = "XXX"

   module.exports = { ALCHEMY_KEY, METAMASK_KEY };
```