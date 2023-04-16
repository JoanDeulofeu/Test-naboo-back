import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';
import initFirebase from './utils/initFirebase';

const PORT = 8080;

// Connection URL
// TODO Set all variables with .env
const name = 'NabooAdmin';
const mdp = 'yqBVWp9mz4YkGrCg';
const ip = 'naboo-test-tech.8eggo9n.mongodb.net';
const databaseName = 'test';
const uri = `mongodb+srv://${name}:${mdp}@${ip}/${databaseName}?retryWrites=true&w=majority`;

mongoose.connect(uri);
const database = mongoose.connection;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  database.on('error', (error) => {
    console.log(error);
  });

  database.once('connected', () => {
    console.log('Database Connected !');
  });

  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
  });

  initFirebase();

  await app.listen(PORT, () =>
    console.log('Naboo-test-tech back end is running on %s!', PORT),
  );
}
bootstrap();
