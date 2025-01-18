export function dataURLtoFile(dataURL: string, fileName: string): File {
  // Split the DataURL to get the Base64 string and MIME type
  const [header, base64String] = dataURL.split(',');
  const mimeType = header.match(/:(.*?);/)?.[1] || 'application/octet-stream';

  // Decode the Base64 string into binary data
  const binaryString = atob(base64String);
  const byteNumbers = new Uint8Array(binaryString.length);

  for (let i = 0; i < binaryString.length; i++) {
    byteNumbers[i] = binaryString.charCodeAt(i);
  }

  // Create and return the File object
  return new File([byteNumbers], fileName, { type: mimeType });
}
