import { notAuthInstance } from '../config/createInstance';
import { SignUpApiParams, SignUpApiResponse } from './types';

export const isMemberExist = async (memberEmail: string) =>
  await notAuthInstance.post('/api/v1/members/exist', { memberEmail });

export const signUpApi = async ({ email, password, studentId, name, nickname }: SignUpApiParams) =>
  await notAuthInstance.post<SignUpApiResponse>('/api/v1/members/sign', {
    email,
    password,
    studentId,
    name,
    nickname,
  });
