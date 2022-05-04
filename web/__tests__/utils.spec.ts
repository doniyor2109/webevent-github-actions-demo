import { expect, it } from 'vitest';
import { Utils } from '../utils';

it('generates unique number', () => {
  const random1 = Utils.uuid();
  const random2 = Utils.uuid();

  expect(random1).not.eq(random2);
});

it('pluralize words', () => {
  expect(Utils.pluralize(1, 'apple')).eq('apple');
  expect(Utils.pluralize(2, 'apple')).eq('apples');
});
