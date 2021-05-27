const express = require('express')
const expressGraphQL = require('express-graphql')
const app = express()

app.use('/cfa', expressGraphQL({
    graphiql: true,
}))
app.listen(5000., () => console.log('Server Running'))