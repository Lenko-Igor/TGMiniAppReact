import { type FC } from 'react'
import { useTranslation  } from 'react-i18next'
import styles from './index.module.scss'
import DishOfDayCard from './DishOfDayCard';


const HomePage: FC = () => {
  const tg = window.Telegram.WebApp;
  const { t } = useTranslation();

  const userName = tg.initDataUnsafe?.user?.username

  return (
    <div className={styles.content}>
      <h2>{`${t('label:welcome')}, ${userName}!`}</h2>
      <div className={styles.block}>
        <h2 className={styles.title}>{t('title:dish_of_day')}</h2>
        <DishOfDayCard />
      </div>
      <div className={styles.block}>
        <h2 className={styles.title}>{t('title:dish_of_day')}</h2>
        <DishOfDayCard />
      </div>
      <div className={styles.block}>
        <h2 className={styles.title}>{t('title:dish_of_day')}</h2>
        <DishOfDayCard />
      </div>
      <div className={styles.block}>
        <h2 className={styles.title}>{t('title:dish_of_day')}</h2>
        <DishOfDayCard />
      </div>
    </div>
  )
}

export default HomePage