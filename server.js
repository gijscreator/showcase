import express from 'express'

import { Liquid } from 'liquidjs'

const app = express()
const engine = new Liquid()
const PORT = process.env.PORT || 8000

// express engine
app.engine('liquid', engine.express())
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// home page
app.get('/', async (request, response) => {

    response.render('index.liquid')
})

// Seat selection
app.get('/choose-seat', async (request, response) => {

    response.render('choose_seat.liquid')
})

// Seat lowerdeck
app.get('/seat-lowerdeck', async (request, response) => {

    response.render('seat_lowerdeck.liquid')
})

app.listen(PORT, () => console.log(`App: http://localhost:${PORT}`))