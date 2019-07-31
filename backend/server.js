const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const dbConnection = require('./database')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const app = express()
const PORT = 8080

const user = require('./routes/user')


app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())


app.use(
	session({
		secret: 'idle-wild',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, 
		saveUninitialized: false 
	})
)


app.use(passport.initialize())
app.use(passport.session()) 


app.use('/user', user)

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})