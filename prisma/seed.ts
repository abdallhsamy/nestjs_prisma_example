import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

// initialize Prisma Client
const prisma = new PrismaClient();

const fakePost = (): any => ({
  title: faker.lorem.sentence(),
  body: faker.lorem.paragraph(),
  description: faker.lorem.sentence(),
  published: faker.helpers.arrayElement([false, true])
});

// create dummy articles
async function main() {
  for (let i = 0; i < 1000000; i++) {
    const post = fakePost();

    await prisma.article.upsert({
      where: { title: post.title },
      update: {},
      create: post
    });
  }
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
