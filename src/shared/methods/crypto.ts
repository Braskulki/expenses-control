import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export async function hashPass(password: string): Promise<string> {
  const hash = await bcrypt.hash(password, saltOrRounds);

  return hash;
}

export async function comparePass(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
