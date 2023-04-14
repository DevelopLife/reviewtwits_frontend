export function checkPreviousHostnameEqualMyHostName() {
  const previousFrom = document?.referrer;
  const previousHostname = new URL(previousFrom)?.hostname;

  return previousHostname === 'reviewtwits.shop';
}
