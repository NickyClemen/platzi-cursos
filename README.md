# platziverse-db

# Usage

```js
const setupDatabse = require('platziverse-db');

setupDatase(config)
    .then(db => {
        const { agent, metric } = db;
    })
    .catch(error => console.log(error.message));
```