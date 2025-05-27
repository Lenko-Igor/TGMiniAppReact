import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'

interface IGridCard {
    titleKey: string
    image: string
}

const GridCard: FC<IGridCard> = ({ titleKey, image }) => {
    const { t } = useTranslation()
    
    return (
        <div 
            className={styles.grid_card}
            style={{
                background: `url(${image}) no-repeat center`,
                backgroundSize: 'cover',
            }}
        >
            <h3 className={styles.title}>{t(titleKey)}</h3>
        </div>
    )
}

export default GridCard