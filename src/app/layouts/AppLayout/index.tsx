import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../../components/Loading'
import Footer from './Footer'
import Header from './Header'
import { Layout } from 'antd'
import styles from './index.module.scss'

const AppLayout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Layout className={styles.layout}>
        <Header />
        <main>
          <div className={styles.container}>
            <Outlet />
          </div>
        </main>
        <Footer />
      </Layout>
    </Suspense>
  )
}

export default AppLayout