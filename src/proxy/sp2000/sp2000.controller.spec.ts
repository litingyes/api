import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { Sp2000Controller } from './sp2000.controller';

describe('Sp2000Controller', () => {
  let controller: Sp2000Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Sp2000Controller],
    }).compile();

    controller = module.get<Sp2000Controller>(Sp2000Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
