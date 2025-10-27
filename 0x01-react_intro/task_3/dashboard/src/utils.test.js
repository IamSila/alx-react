import { getFullYear, getFooterCopy, getLatestNotifications } from './utils';

test('it returns correct year', () => {
  expect(getFullYear()).toBe(2025);
});

test('correct footer', () => {
  expect(getFooterCopy(true)).toBe('ALX');
  expect(getFooterCopy(false)).toBe('ALX main dashboard');
});

test("returns right notification", () => {
  expect(getLatestNotifications()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});