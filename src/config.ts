import { readJSONSync } from 'fs-extra/esm';
import path from 'node:path';

export interface Config {
  authCodes: AuthCodeUser[];
  users: User[];
  steamApiKey: string;
  logLevel?: string;
}

export interface AuthCodeUser {
  authCode: string;
  steamId64: string;
  oldestShareCode: string;
}

export interface User {
  username: string;
  password: string;
  secret: string;
}

const configDir = process.env['CONFIG_DIR'] || 'config';
const configFile = path.join(configDir, 'config.json');

export const config = readJSONSync(configFile, 'utf-8') as Config;
