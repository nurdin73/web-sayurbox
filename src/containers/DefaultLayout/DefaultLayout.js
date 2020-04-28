import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container, Label } from 'reactstrap';

import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import { connect } from 'react-redux';
import { getProfile } from '../../_actions/profile';

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  componentDidMount() {
    // this.props.getprofile()
  }
  componentWillMount() {
    this.props.getprofile()
  }

  render() {
    const {profile, error} = this.props.profile
    const check = localStorage.getItem('token') === undefined ? '' : localStorage.getItem('token')
    console.log(profile);
    
    if(error) {
      return (
        <div>
          <Label>{profile.message}</Label>
        </div>
      )
    }
    if (profile.status === "error") {
      return (
        <div>
          <Label>{ profile.message }</Label>
        </div>
      )
    } else {
      return (
        <div className="app">
          <AppHeader fixed>
            <Suspense  fallback={this.loading()}>
              <DefaultHeader nameProfile={profile.data === undefined ? 'undefined' : profile.data.name} onLogout={e=>this.signOut(e)}/>
            </Suspense>
          </AppHeader>
          <div className="app-body">
            <AppSidebar fixed display="lg">
              <AppSidebarHeader />
              <AppSidebarForm />
              <Suspense>
              <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
              </Suspense>
              <AppSidebarFooter />
              <AppSidebarMinimizer />
            </AppSidebar>
            <main className="main">
              <AppBreadcrumb appRoutes={routes} router={router}/>
              <Container fluid>
                <Suspense fallback={this.loading()}>
                  <Switch>
                    {routes.map((route, idx) => {
                      return route.component ? (
                        <Route
                          key={idx}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          render={props => (
                            <route.component {...props} />
                          )} />
                      ) : (null);
                    })}
                    <Redirect from="/" to="/login" />
                  </Switch>
                </Suspense>
              </Container>
            </main>
            {/* <AppAside fixed>
              <Suspense fallback={this.loading()}>
                <DefaultAside />
              </Suspense>
            </AppAside> */}
          </div>
          <AppFooter>
            <Suspense fallback={this.loading()}>
              <DefaultFooter />
            </Suspense>
          </AppFooter>
        </div>
      );
    }
    
  }
}
const mapStateToProps = state => {
  return {
    profile : state.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getprofile: () => {
      dispatch(getProfile())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
