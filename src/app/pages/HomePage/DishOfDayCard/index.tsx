import React from 'react'
import styles from './index.module.scss'
import { Card } from 'antd'
import DishImage from '../../../../assets/images/dishes/dish_of_the_day.jpg'
import SoupDayImage from '../../../../assets/images/dishes/soup_day.webp'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const DishOfDayCard = () => {
    const { t } = useTranslation()

  return (
    <Card
        hoverable
        style={{ width: '100%' }}
        cover={<img alt="dish_of_the_day" src={SoupDayImage} />}
        className={styles.card}
    >
        <Card.Meta 
            className={styles.context}
            title={
                <h4 className={styles.title}>Europe Street beat</h4>
            } 
            description={
                <div className={styles.description}>
                    <p className={styles.text}>
                        Это пример текста, который будет ограничен до 4 строк с многоточием.
                        Это пример текста, который будет ограничен до 4 строк с многоточием.
                        Это пример текста, который будет ограничен до 4 строк с многоточием.
                        Это пример текста, который будет ограничен до 4 строк с многоточием.
                    </p>
                    <Link to={''} className={styles.link}>{`${t('label:more_details')}...`}</Link>
                </div>
            } />
    </Card>
  )
}

export default DishOfDayCard