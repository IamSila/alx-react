export default function getFullYear() {
    return Date.getFullYear();
}

export function getFooterCopy(isIndex) {
  if (isIndex === true) {
    return 'ALX';
  }
    return 'ALX main dashboard';
}
