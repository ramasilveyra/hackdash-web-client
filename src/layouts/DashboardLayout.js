import React from 'react'
import 'styles/core.scss'
import DashboardHeader from 'components/DashboardHeader'

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Statelesss Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of it's props, so we can
// define it with a plain javascript function...
function DashboardLayout ({ children }) {
  return (
    <div className='container'>
      <DashboardHeader />
      <div className='view-container'>
        {children}
      </div>
    </div>
  )
}

DashboardLayout.propTypes = {
  children: React.PropTypes.element
}

export default DashboardLayout
