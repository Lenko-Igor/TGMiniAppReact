import { type FC } from 'react'
import { useTranslation  } from 'react-i18next'
import styles from './index.module.scss'
import DishOfDayCard from './DishOfDayCard';

const HomePage: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.content}>
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