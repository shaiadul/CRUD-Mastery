import mongoose from 'mongoose'
import app from './app'
import config from './app/config'

async function main() {
  try {
    // connect to database
    await mongoose.connect(config.databaseURL as string)

    // listen to server
    app.listen(config.port,() => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (error: unknown) {
    console.log(error)
  }
}

main()
