## nestjs prisma example


## Running the app

```bash
$ docker-compose up -d
```

## Running Database Migrations

```bash
$ docker-compose exec api npx prisma migrate dev --name "init"
```

## Adding Fake Data

```bash
$ docker-compose exec api npx prisma db seed
```
