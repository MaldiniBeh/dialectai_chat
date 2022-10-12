import Ws from '../app/services/socket'
Ws.boot()
let msg: object[] = []
Ws.io.on('connection', (socket) => {
  socket.on('message', (data) => {
    msg = [...msg, data]
    socket.emit('message', msg)
  })
  socket.on('load', () => {
    msg = []
  })

  socket.on('realtime', () => {
    socket.emit('realtime', msg)
  })

})
