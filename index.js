  const app = require('./app');
  const database = require('./database');
  const config = require('./config');

  database()
      .then(info => {
          console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
          app.listen(config.PORT, () =>
              console.log(`Example app listening on port ${config.PORT}!`)
          );
      })
      .catch(() => {
          console.error('Unable to connect to database');
          process.exit(1);
      });



    
    // const {MongoClient} = require('mongodb')

    // const client = new MongoClient('mongodb+srv://mrcrodo:Umsjvn6517@blog.7mt1u.mongodb.net/Nodejs01?retryWrites=true&w=majority')

    // const start = async () => {
    //     try{
    //         await client.connect()
    //         console.log('Soyedinenie ustanovlenno qadan alem');
    //         await client.db().createCollection('users')
    //         const users = client.db().collection('users')
    //         users.insertOne({ name: 'joni', age: 23})
    //         const user = await users.findOne({name: 'joni'})
    //         console.log(user);

    //     } catch(e) {
    //         console.log(e)

    //     }
    // }

    // start()