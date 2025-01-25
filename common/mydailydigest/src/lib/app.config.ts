export function setDNSPreConnectLink(cdnBaseUrl: string) {
  const preconnectLink = document.createElement('link');
  preconnectLink.rel = 'preconnect';
  preconnectLink.href = cdnBaseUrl;
  preconnectLink.crossOrigin = 'anonymous';
  document.head.appendChild(preconnectLink);

  const dnsPrefetchLink = document.createElement('link');
  dnsPrefetchLink.rel = 'dns-prefetch';
  dnsPrefetchLink.href = cdnBaseUrl;
  document.head.appendChild(dnsPrefetchLink);
}
