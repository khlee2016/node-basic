const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello Prototytpe World!')
})
app.get('/about', function (request, response) {
        response.send('About Us');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
