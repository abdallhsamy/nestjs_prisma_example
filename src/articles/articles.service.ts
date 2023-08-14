import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Pagination } from '../libs/utils/pagination.util';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  create(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({
      data: createArticleDto,
    });
  }

  async findAll(page = 1, perPage = 10, uri = 'articles') {
    const where = {
      published: true,
    };

    const select = {
      id: true,
      title: true,
    };

    const args = {
      where,
      select,
      skip: (page - 1) * perPage,
      take: perPage,
    };

    const [data, total] = await Promise.all([
      this.prisma.article.findMany(args),
      this.prisma.article.count({ where }),
    ]);

    const lastPage = Math.ceil(total / perPage);

    const links = Pagination.generateLinks(uri, page, lastPage);

    const meta = Pagination.generateMeta(page, perPage, total);

    return { data, meta, links };
  }

  findDrafts() {
    return this.prisma.article.findMany({
      where: {
        published: false,
      },
      select: {
        id: true,
        title: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.article.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        description: true,
        body: true,
      },
    });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: {
        id,
      },
      data: updateArticleDto,
    });
  }

  remove(id: number) {
    return this.prisma.article.delete({
      where: {
        id,
      },
    });
  }
}
