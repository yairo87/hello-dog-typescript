import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../main/app.module';
import { DogNoId } from 'src/main/dogs/schemas/dog.schema';

describe('Dogs CRUD', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should create a new dog', async () => {
    const dog: DogNoId = {
      name: "Spike",
      owner: "Jhon"
    }

    const response = await postDog(app, dog);
    const dogId = response.body.id;
    const fetchedDog = await getDog(app, dogId);

    expect(fetchedDog.body).toStrictEqual({...dog, id: dogId});
  });
});

async function postDog(app: INestApplication, dog: DogNoId): Promise<request.Response> {
  return await request(app.getHttpServer())
    .post('/dogs')
    .send(dog)
    .expect(201);
}

async function getDog(app: INestApplication, dogId: any): Promise<request.Response> {
  return request(app.getHttpServer())
  .get('/dogs/' + dogId)
  .expect(200);
}
