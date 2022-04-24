import { notAuthInstance } from '../config/createInstance';

export const isMemberExist = async (memberEmail: string) =>
  await notAuthInstance.post('/api/v1/members/exist', { memberEmail });
