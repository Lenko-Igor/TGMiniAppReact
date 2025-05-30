import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.scss'

type IGridCard = React.PropsWithChildren<{
    title: string
}>

const GridCard: FC<IGridCard> = ({ title, children }) => {
    const { t } = useTranslation()
    
    return (
        <div className={styles.grid_card}>
            {children}
            <h3 className={styles.title}>{t(title)}</h3>
        </div>
    )
}

export default GridCard