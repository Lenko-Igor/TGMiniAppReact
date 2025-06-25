import { useEffect, type FC } from 'react'
import { Button } from 'antd';

const tg = window.Telegram.WebApp;

const MorePage: FC = () => {
    const onCloseApp = () => {
        tg.close();
    }

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div>
            <Button type='primary' onClick={onCloseApp}>Close the App</Button>
        </div>
    )
}

export default MorePage