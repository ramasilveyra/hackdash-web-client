import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import styles from 'styles/components/_dashboard-header.scss'

// Module constants
const ActiveStyle = styles['DashboardHeader__active']

export default class DashboardNavbar extends Component {
  static propTypes = {
    user: PropTypes.object,
    dashboard: PropTypes.object,
    onLoginClick: PropTypes.func.isRequired
  }

  render () {
    const { user, dashboard, onLoginClick } = this.props
    return (
      <ul className='nav navbar-nav navbar-right'>
        <li><Link to={`/dashboards/${dashboard}`} activeClassName={ActiveStyle}>Dashboard</Link></li>
        <li><Link to={`/dashboards/${dashboard}/about`} activeClassName={ActiveStyle}>About</Link></li>
        { user ? <li><Link to='/users/{user.id}' activeClassName={ActiveStyle}>My Account</Link></li> : null }
        { !user ? <li><a href='#' onClick={onLoginClick}>Login</a></li> : null }
      </ul>
    )
  }
}
