import { type FC } from 'react'
import styles from './index.module.scss'
import { Col, Row } from 'antd'
import { menuData } from '../../../utils/mockData/listMenu'
import GridCard from './GridCard'

const MenuPage: FC = () => (
    <Row className={styles.row} gutter={[8, 8]}>
      {menuData.map(({ id, section: { title, Icon } }) => (
        <Col key={id} span={12}>
          <GridCard title={title}>
            <Icon width={70} height={70} />
            </GridCard>
        </Col>
      ))}
    </Row>
  )

export default MenuPage