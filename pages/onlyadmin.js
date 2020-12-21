import React from 'react'
import BaseLayout from 'components/layouts/BaseLayout'
import BasePage from 'components/BasePage'
import withAuth from 'hoc/withAuth'

const OnlyAdmin = ({ user, loading }) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <h1>I am Admin page - Hello {user.name}</h1>
      </BasePage>
    </BaseLayout>
  )
}

// function withAuth(Component) {
//   return function(props) {
//     return <Component title="Hello World!" {...props} />
//   }
// }

// const withAuth = Component => props =>
//   <Component title="Hello World!" {...props} />


export default withAuth(OnlyAdmin)('admin')
