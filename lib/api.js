'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')

class API {
  /**
   * Constructor
   * @param {Function} callback Function to invoke when a request is received.
   */
  constructor (callback) {
    if (!callback || typeof callback !== 'function') {
      console.log('Missing function to be invoked')
      return
    }
    this.storage = multer.memoryStorage()
    this.callback = callback
    this.upload = multer({ storage: this.storage })
    this.app = express() // creates http server
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
  }

  /**
   * Initializes the API service
   */
  start () {
    // Server listening on 3000 port.
    this.app.listen(process.env.PORT || 3000, () => console.log('[SnapmaticBot] Web service is listening on port '+process.env.PORT || 3000))
    this.app.get('/', (req,res) => {
      res.json({error:0,msg: 'POST to /picture'})
    })
    // POST /picture
    this.app.post('/picture', this.upload.single('file'), this.callback)
  }
}

module.exports = API
