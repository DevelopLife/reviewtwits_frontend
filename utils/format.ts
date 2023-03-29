export const formattedImageUrl = (url?: string) =>
  url && `${process.env.NEXT_PUBLIC_SERVER_URL}/request-images/${url}`;
