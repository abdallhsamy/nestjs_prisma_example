import { Injectable } from "@nestjs/common";
import { CreateArticleDto } from "./dto/create-article.dto";
import { UpdateArticleDto } from "./dto/update-article.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {
  }

  create(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({
      data: createArticleDto
    });
  }

  findAll(page = 1, perPage = 10) {
    const skip = (page - 1) * perPage;

    return this.prisma.article.findMany({
      where: {
        published: true
      },
      select: {
        id: true,
        title: true
      },
      skip,
      take: perPage
    });
  }


  findDrafts() {
    return this.prisma.article.findMany({
      where: {
        published: false
      },
      select: {
        id: true,
        title: true
      }
    });
  }

  findOne(id: number) {
    return this.prisma.article.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        title: true,
        description: true,
        body: true
      }
    });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: {
        id
      },
      data: updateArticleDto
    });
  }

  remove(id: number) {
    return this.prisma.article.delete({
      where: {
        id
      }
    });
  }
}
