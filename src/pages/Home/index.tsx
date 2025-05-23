import React, { type FC } from 'react'
import { useTranslation  } from 'react-i18next'

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <div>{t('label:info')}</div>
  )
}

export default Home