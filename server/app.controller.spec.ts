import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('Index', () => {
    it('should return undefined', () => {
      expect(appController.index()).toStrictEqual({ text: undefined });
    });
    it('should return text', () => {
      expect(appController.index('111')).toStrictEqual({ text: '111' });
    });
  });
});
