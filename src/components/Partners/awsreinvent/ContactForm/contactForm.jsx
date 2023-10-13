import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import Link from '@docusaurus/Link';

export default function ContactForm() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '8738733',
          formId: 'bc7699b1-28ad-4a9b-a66f-3926bcb18d81',
          target: '#hubspotForm',
        });
      }
    });
  }, []);

  return (
    <div className={styles.contactBackground} id="meetingForm">
      <div className="container">
        <div className={styles.contactContainer}>
          <div className={styles.contactSection}>
            <h2 className={styles.title}>Schedule a meeting</h2>
            <div id="hubspotForm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
