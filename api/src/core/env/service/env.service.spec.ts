import { Test, TestingModule } from '@nestjs/testing';
import { EnvService } from './env.service';
import { envSchema } from '../zod/env-type.zod';

describe('EnvService', () => {
  let service: EnvService;

  beforeEach(async () => {
    process.env = {
      API_PORT: '3000',
      API_PREFIX: '/api',
      DATABASE_URL: 'postgres://user:password@localhost:5432/db',
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvService],
    }).compile();

    service = module.get<EnvService>(EnvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should parse environment variables correctly', () => {
    const vars = service.getVars();
    expect(vars).toEqual({
      API_PORT: '3000',
      API_PREFIX: '/api',
      DATABASE_URL: 'postgres://user:password@localhost:5432/db',
    });
  });

  it('should throw an error if environment variables are invalid', () => {
    process.env = {
      API_PORT: 'invalid_port',
    };

    expect(() => {
      envSchema.parse(process.env);
    }).toThrow();
  });
});
