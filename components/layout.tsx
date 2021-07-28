import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import Logo from '../icons/icon-logo.png';
import { NAVIGATION } from '@lib/constants';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <header className="flex items-center justify-between flex-wrap">
        <div>
          <Link href="/">
            <a>
              <Image src={Logo} alt="Logo" />
            </a>
          </Link>
        </div>
        <div className="">
          {NAVIGATION.map(({ name, route }) => (
            <Link key={name} href={route}>
              <a className="">{name}</a>
            </Link>
          ))}
        </div>
      </header>
      <div>
        <main>
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
}
