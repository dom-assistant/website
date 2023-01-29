import React from 'react';
import styles from './styles.module.css';
import Spacer from '../../../../components/other/Spacer';
import SectionScroller, {
  SectionInterface,
} from './components/SectionScroller';
import PlainButton from '../../../../components/buttons/PlainButton';

const sections: SectionInterface[] = [
  {
    code: `
curl -sSL https://get.docker.com | sh // Установка Docker
sudo usermod -aG docker user // Добавьте user в группу docker
    `,
    codeWithComment: `
// Instantiate a global States with a single line of code
const MY_STATE = createState("Jeff"); // <-
MY_STATE.set("Frank"); // Update State value
    `,
    title: 'Установите Docker',
    description: 'Если Docker установлен, пропустите шаг',
    icon: 'zap',
  },
  {
    code: `
// Запуск Dom Assistant в часовом поясе Москвы и на порту 80
docker run -d \
--log-driver json-file \
--log-opt max-size=10m \
--cgroupns=host \
--restart=always \
--privileged \
--network=host \
--name gladys \
-e NODE_ENV=production \
-e SERVER_PORT=80 \
-e TZ=Europe/Moscow \
-e SQLITE_FILE_PATH=/var/lib/gladysassistant/gladys-production.db \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /var/lib/gladysassistant:/var/lib/gladysassistant \
-v /dev:/dev \
-v /run/udev:/run/udev:ro \
domassistant/dom-assistant:latest
    `,
    codeWithComment: `
// Dynamically bind State to UI-Components for reactivity
const myState = useAgile(MY_STATE);
    `,
    title: 'Запуск Dom Assistant',
    description: 'Автоматическая установка последнего стабильного релиза',
    icon: 'repeat',
  },
  {
    code: `
//Запуск Watchtower
docker run -d \
--name watchtower \
--restart=always \
-v /var/run/docker.sock:/var/run/docker.sock \
containrrr/watchtower \
--cleanup --include-restarting
    `,
    codeWithComment: `
    docker run -d \
    --name watchtower \
    --restart=always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    containrrr/watchtower \
    --cleanup --include-restarting
    `,
    title: 'Авто обновления',
    description: 'Вы можете использовать Watchtower для автоматического обновления Dom-Assistant, когда будет доступна новая версия. Для этого запустите контейнер Watchtower.',
    icon: 'server',
  },
];

const StraightforwardView: React.FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.HeaderContainer}>
          <h3 className={styles.Tagline}>Почему нас выбирают?</h3>
          <h1 className={styles.Title}>Простота и надежность</h1>
          <Spacer height={20} />
          <p className={styles.Description}>
            Один раз бесплатно установив платформу Dom Assistant вы избавляете себя от обновлений и контроля работоспособности.
          </p>
        </div>
        <Spacer height={60} />
        <SectionScroller sections={sections} startIndex={0} />
        <PlainButton
          to={'docs/introduction'}
          name={'Узнать больше'}
          className={styles.LearnMoreButton}
        />
      </div>
    </div>
  );
};

export default StraightforwardView;
