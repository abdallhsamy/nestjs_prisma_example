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

## pagination example

```json
{
  "data": [
    {
      "id": 3,
      "title": "new article"
    },
    {
      "id": 10,
      "title": "new asrticle"
    },
    {
      "id": 11,
      "title": "Autem id amet."
    },
    {
      "id": 15,
      "title": "Corporis provident aliquam vitae magni cupiditate debitis aspernatur."
    },
    {
      "id": 17,
      "title": "Deserunt debitis minus."
    },
    {
      "id": 22,
      "title": "Quia voluptatem consequatur exercitationem nemo."
    },
    {
      "id": 23,
      "title": "Mollitia commodi porro."
    },
    {
      "id": 24,
      "title": "Quas molestiae debitis officiis nisi minus voluptates."
    },
    {
      "id": 26,
      "title": "Quas est eligendi itaque repellat unde doloremque labore illum."
    },
    {
      "id": 29,
      "title": "Perferendis inventore dignissimos aliquid."
    }
  ],
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 46504,
    "per_page": 10,
    "to": 10,
    "total": 465036
  },
  "links": {
    "first": "http://loclalhost/articles?page=1",
    "last": "http://loclalhost/articles?page=46504",
    "prev": null,
    "next": "http://loclalhost/articles?page=11"
  }
}
```