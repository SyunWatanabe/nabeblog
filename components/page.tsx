import Head from 'next/head';
import { useRouter } from 'next/router';

import { SITE_NAME, SITE_URL } from '@lib/constants';

type Meta = {
  title: string | null;
  description: string | null;
  url?: string | null;
};

type Props = {
  meta: Meta;
  children: React.ReactNode;
};

export default function Page({ meta, children }: Props) {
  const router = useRouter();
  const title = meta.title || SITE_NAME;
  const url = meta.url || `${SITE_URL}${router.asPath}`;
  const description = meta.description || SITE_NAME;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {children}
    </div>
  );
}
