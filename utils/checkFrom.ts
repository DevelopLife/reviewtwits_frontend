export function checkPreviousHostnameEqualMyHostName() {
  const previousFrom = document?.referrer;

  if (previousFrom) {
    const previousHostname = new URL(previousFrom)?.hostname;
    return previousHostname === 'reviewtwits.shop';
  }

  return true;
}
