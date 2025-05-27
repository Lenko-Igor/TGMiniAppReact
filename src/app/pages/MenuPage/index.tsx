import React, { type FC } from 'react'
import styles from './index.module.scss'
import { Col, Row } from 'antd'
import { menuData } from '../../../utils/mockData/listMenu'
import GridCard from './GridCard'

const MenuPage: FC = () => {
  return (
      <Row className={styles.row} gutter={[8, 8]}>
        {menuData.map(({ id, section }) => (
          <Col key={id} span={12}>
            <GridCard titleKey={section.title} image={section.image} />
          </Col>
        ))}
</Row>
  )
}

export default MenuPage