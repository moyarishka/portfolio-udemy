import React from 'react'
import BaseLayout from 'components/layouts/BaseLayout'
import BasePage from 'components/BasePage'
import { authorizeUser, withAuth } from 'utils/auth0'

const OnlyAdminSSR = ({user, title}) => {
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>
        <h1>I am Secret page - Hello {user && user.nickname}</h1>
        <h2>{title}</h2>
      </BasePage>
    </BaseLayout>
  )
}

const getTitle = () => {
  return new Promise(res => {
    setTimeout(() => {
      res({title: 'My new Title'})
    }, 500)
  })
}

export const getServerSideProps = withAuth(async () => {
  const title = await getTitle()
  return title
})('admin')

export default OnlyAdminSSR
