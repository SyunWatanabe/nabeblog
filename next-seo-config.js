export default {
  defaultTitle: 'nabeblog',
  canonical: 'https://example.com',
  openGraph: {
    url: 'https://example.com',
    title: 'Open Graph Title',
    description: 'Open Graph Description',
    site_name: 'nabeblog',
    type: 'website',
    images: [
      {
        url: 'http://via.placeholder.com/350x150',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
        type: 'image/jpeg',
      },
      {
        url: 'http://via.placeholder.com/350x150',
        width: 900,
        height: 800,
        alt: 'Og Image Alt Second',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
