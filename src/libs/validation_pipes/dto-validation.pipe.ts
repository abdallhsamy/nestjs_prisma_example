import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  UnprocessableEntityException,
  ValidationPipe,
} from '@nestjs/common';

@Injectable()
export class DtoValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const validationPipe = new ValidationPipe({
      exceptionFactory: (errors) => {
        const result = errors.reduce((acc, error) => {
          const { property, constraints } = error;
          const key = Object.keys(constraints)[0];
          return {
            ...acc,
            [property]: [constraints[key]],
          };
        }, {});
        return new UnprocessableEntityException(result);
      },
      stopAtFirstError: true,
    });

    return validationPipe.transform(value, metadata);
  }
}
