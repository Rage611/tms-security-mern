import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'TMS Security Group';
const DEFAULT_OG_IMAGE = 'https://tmssecurity.in/Logo.webp';
const LOCALE = 'en_IN';

const SEOHead = ({ title, description, canonical, ogImage, ogType }) => {
  const image = ogImage || DEFAULT_OG_IMAGE;
  const type = ogType || 'website';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={LOCALE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEOHead;
