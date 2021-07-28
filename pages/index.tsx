import Link from 'next/link';
import { client } from '../lib/client';
import { Button } from '../components/Button';
import { ListItem } from '../lib/types';

export default function Home({ blog }) {
  return (
    <div>
      <Button />
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
