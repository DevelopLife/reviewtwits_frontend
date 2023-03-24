export const formattedImageUrl = (url: string) =>
  `${process.env.NEXT_PUBLIC_SERVER_URL}/request-images/${url}`;
