import { useCallback, useMemo, useState } from 'react'
import { Button } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined } from '@ant-design/icons'
import styles from '../index.module.scss'
import { useLocation } from 'react-router-dom'
import ROUTES from '../../../../utils/constants/routes'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const { pathname } = useLocation()
    const { t } = useTranslation()
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const TITLE = useMemo(() => ({
        [ROUTES.HOME]: t('titlePage:home'),
        [ROUTES.MENU]: t('titlePage:menu'),
        [ROUTES.BOOKING]: t('titlePage:booking'),
        [ROUTES.MORE]: t('titlePage:more'),
    }), [])

    const toggleCollapsed = useCallback(() => {
        setCollapsed(prev => !prev)
    }, []);

    return (
        <header>
            <div className={styles.container}>
                <Button
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    color="default" 
                    variant="text" 
                    onClick={toggleCollapsed} 
                    className={styles.button_menu}
                />
                <h1 className={styles.title_page}>
                    {TITLE[pathname] ?? ''}
                </h1>
                <Button
                    icon={<SearchOutlined />}
                    color="default" 
                    variant="text" 
                    className={styles.button_search}
                />
            </div>
        </header>
    )
}

export default Header