import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { getCurrentUser } from '../../actions/auth'
import { UserReducer } from '../../types/general'

interface PrivateRouteProps {
  component: any,
  authRed: UserReducer
  exact: boolean
  path: string
  getCurrentUser: () => void
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({component: Component, authRed: {isAuthenticated, loading}, getCurrentUser, ...rest}) => {
  useEffect(() => {
		getCurrentUser()
	}, [])
  
  return (
    <Route
    {...rest}
    render={props =>
      loading ? (
        <h2>Loading...</h2>
      ) : isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
  )
}

const mapStateToProps = (state: any) => ({
  authRed: state.authRed
})

export default connect(mapStateToProps, {getCurrentUser})(PrivateRoute)
