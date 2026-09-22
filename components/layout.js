import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

export const name = 'Aaron Paul D. Dizon';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="10 Things That Require Zero Talent" />
        <meta property="og:title" content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        {home && (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={styles.borderCircle}
              height={140}
              width={140}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}