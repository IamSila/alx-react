export default function getFullYear() {
    return Date.getFullYear();
}

// get footer value
export function getFooterCopy(isIndex) {
  if (isIndex === true) {
    return 'ALX';
  }
    return 'ALX main dashboard';
}

// a notification to display
export function getLatestNotification() {
  return (
    <p><strong>Urgent requirement</strong> - complete by EOD</p>
  );
}
