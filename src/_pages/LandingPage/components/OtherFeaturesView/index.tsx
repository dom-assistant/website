import React from 'react';
import styles from './styles.module.css';
import Cards, { CardInterface } from './components/Cards';

const cards: CardInterface[] = [
  {
    title: 'Удаленный доступ',
    description:
      'Dom Assistant имеет шифрованный шлюз, для внешнего доступа к приложению.',
    to: 'docs/introduction#centralize',
    imagePath: 'img/pages/landing/software_engineer.svg',
  },
  {
    title: 'Гибкий',
    description:
      'Dom Assistant имеет не высокие требования к оборудованию и может быть запущен почти на всех известных контроллерах.',
    to: 'docs/introduction#flexible',
    imagePath: 'img/pages/landing/teaching.svg',
  },
  {
    title: 'Простота использования',
    description:
      'Наше приложение быстро устанавливается, самостоятельно обновляется.',
    to: 'docs/introduction#easy-to-use',
    imagePath: 'img/pages/landing/science.svg',
  },
  {
    title: 'Протестировано',
    description:
      'Dom Assistant имеет более 600 тестов, чтобы убедиться, что все работает как положено..',
    to: 'https://coveralls.io/github/agile-ts/agile?branch=master',
    imagePath: 'img/pages/landing/engineer.svg',
  },
  {
    title: 'Чистый javascript',
    description:
      'Dom Assistant написан на чистом javascript ( node.js + react ), что исключает необходимость в промежуточных технологиях.',
    to: 'docs/introduction#typescript',
    imagePath: 'img/pages/landing/typescript.svg',
  },
];

const OtherFeaturesView: React.FC = () => {
  return (
    <div className={styles.Container}>
      <Cards cards={cards} />
    </div>
  );
};

export default OtherFeaturesView;
