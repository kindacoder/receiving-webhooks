const express=require('express');
const app=express();


const SmeeClient = require('smee-client')

const smee = new SmeeClient({
  source: 'https://smee.io/6E9yNBRaFdiKO80',
  target: 'http://localhost:3000/webhooks',
  logger: console
})

const events = smee.start()

// Stop forwarding events
events.close()

app.post('/webhooks',(req,res)=>{


})

app.listen(3000,()=>{
  console.log('Started at port 3000');
})
