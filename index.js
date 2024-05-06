const 
express = require('express'),
app = express(),
PORT = 3213; 

require('dotenv').config()

require('./DL/db').connect()

app.use(require('cors')())
app.use(express.json())


const {auth} = require('./middlewares/auth')
app.all('*', auth)

app.use('/chat',require('./routers/chat.router'))


app.listen(PORT,()=>console.log(`##### Server is running | ${PORT} #####`))


