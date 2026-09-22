import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  const zeroTalentList = [
    'Being On Time',
    'Making An Effort',
    'Being High Energy',
    'Having A Positive Attitude',
    'Being Passionate',
    'Using Good Body Language',
    'Being Coachable',
    'Doing A Little Extra',
    'Being Prepared',
    'Having A Strong Work Ethic',
  ];

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.padding1px}>
        <p className={utilStyles.headingLg}>10 Things That Require Zero Talent</p>
        <ul className={utilStyles.list}>
          {zeroTalentList.map((item, index) => (
            <li key={index} className={utilStyles.listItem}>
              {item}
            </li>
          ))}
        </ul>
        <p className={utilStyles.lightText}>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">
            our Next.js tutorial
          </a>
          .)
        </p>
      </section>
    </Layout>
  );
}