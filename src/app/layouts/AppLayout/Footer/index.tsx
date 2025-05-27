import styles from '../index.module.scss'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import ROUTES from '../../../../utils/constants/routes'
import { BellOutlined, CalendarOutlined, HomeOutlined, MoreOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import IconPlate from '../../../../assets/icons/plate_icon.svg?react'

const Footer = () => {
    const { t } = useTranslation();
  return (
    <footer>
        <div className={styles.container}>
            <Link to={ROUTES.HOME} className={styles.link}>
                <HomeOutlined />
                <p>{t('label:home')}</p>
            </Link>
            <Link to={ROUTES.MENU} className={styles.link}>
                <IconPlate color={'var(--primary)'} />
                <p>{t('label:menu')}</p>
            </Link>
            <Button 
                icon={<BellOutlined />}
                color="default" 
                variant="text" 
                className={styles.button_call_waiter}
            />
            <Link to={ROUTES.BOOKING} className={styles.link}>
                <CalendarOutlined />
                <p>{t('label:booking')}</p>
            </Link>
            <Link to={ROUTES.MORE} className={styles.link}>
                <MoreOutlined />
                <p>{t('label:more')}</p>
            </Link>

        </div>
    </footer>
  )
}

export default Footer