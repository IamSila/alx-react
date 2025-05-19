import { getFullYear, getFooterCopy, getLatestNotification } from './utils';


test('returns the current year', () => {
    expect(getFullYear()).toBe(2025);
})

test('returns the lastest notifications', () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
})

test('checking the footer value', () => {
    expect(getFooterCopy(true)).toBe("ALX");
    expect(getFooterCopy(false)).toBe("ALX main dashboard");
})
