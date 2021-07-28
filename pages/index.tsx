import Link from 'next/link';

import Page from '@components/page';
import Header from '@components/header';
import Layout from '@components/layout';
import { META_DESCRIPTION } from '@lib/constants';
import { client } from '@lib/client';
import { Button } from '@components/Button';
import { ListItem } from '@lib/types';

export default function Home({ blog }) {
  const meta = {
    title: 'nabeblog',
    description: META_DESCRIPTION,
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Home" description={meta.description} />
        <Button />
        <div>
          <ul>
            {blog.map((blog) => (
              <li key={blog.id}>
                <Link href={`/blog/${blog.id}`}>
                  <a>{blog.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </Page>
  );
}

export const getStaticProps = async () => {
  const data: ListItem = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};
