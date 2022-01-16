import { createAction } from '@reduxjs/toolkit';

export const apiCallBegan = createAction('api/callBegan');
export const apiCallSucess = createAction('api/callSuccess');
export const apiCallAction = createAction('api/callFailed');
