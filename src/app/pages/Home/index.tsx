import React, { type FC } from 'react'
import { useTranslation  } from 'react-i18next'
import styles from './index.module.scss'

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {t('label:info')}

      </p>
    </div>
  )
}

export default Home