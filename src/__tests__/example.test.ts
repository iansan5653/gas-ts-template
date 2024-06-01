import { describe, expect, test } from '@jest/globals';
import { DOUBLE } from '../example'

describe('our example function DOUBLE', () => {
  test('should correctly return the doubled number', () => {
    expect(DOUBLE(128)).toEqual(256)
  });
});