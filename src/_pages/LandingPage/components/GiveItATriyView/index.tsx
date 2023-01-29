import React from 'react';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Spacer from '../../../../components/other/Spacer';

const GiveItATryView: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className={styles.Container}>
      <h3 className={styles.Title}>Попробуйте бесплатно</h3>
      <Spacer height={40} />
      <div className={styles.Terminal}>
        <code>
        docker run -d \ <br/>
        --log-driver json-file \<br/>
        --log-opt max-size=10m \<br/>
        --cgroupns=host \<br/>
        --restart=always \<br/>
        --privileged \<br/>
        --network=host \<br/>
        --name gladys \<br/>
        -e NODE_ENV=production \<br/>
        -e SERVER_PORT=80 \<br/>
        -e TZ=Europe/Moscow \<br/>
        -e SQLITE_FILE_PATH=/var/lib/domassistant/dom-production.db \<br/>
        -v /var/run/docker.sock:/var/run/docker.sock \<br/>
        -v /var/lib/domassistant:/var/lib/domassistant \<br/>
        -v /dev:/dev \<br/>
        -v /run/udev:/run/udev:ro \<br/>
        domassistant/dom-assistant:latest<br/>
        </code>
      </div>
    </div>
  );
};

export default GiveItATryView;
