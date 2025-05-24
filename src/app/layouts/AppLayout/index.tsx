import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../../components/Loading'

const AppLayout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <header>AppLayout</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </Suspense>
  )
}

export default AppLayout