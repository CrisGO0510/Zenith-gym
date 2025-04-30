import { Injectable } from '@nestjs/common';
import { envSchema, EnvType } from '../zod/env-type.zod';

@Injectable()
export class EnvService {
  private readonly vars: EnvType;

  public constructor() {
    const parsedEnv = envSchema.parse(process.env);
    const { API_PORT, API_PREFIX, DATABASE_URL } = parsedEnv;
    this.vars = {
      API_PORT,
      API_PREFIX,
      DATABASE_URL,
    };
  }

  public getVars(): EnvType {
    return this.vars;
  }
}
