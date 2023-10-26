import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import { MetaSEO } from '/src/theme/MetaSEO';
import Header from '/src/components/Workshops/header';
import ThemeSwitch from '/src/components/ThemeSwitch';
import styles from './styles.modules.scss';

export default function WorkshopPage() {
  return (
    <div className="custom-page noBG">
      <Layout>
        <MetaSEO img="og/company/investors.jpg" />
        <Header />
        <div className="container">
          <iframe
            className={styles.iframe}
            src="https://v2-embednotion.com/28b1ffbda6384401852e9031d172575b?v=de06eece3fb94a9392302faf0a44e3d4"
          ></iframe>
        </div>
      </Layout>
      <ThemeSwitch />
    </div>
  );
}
