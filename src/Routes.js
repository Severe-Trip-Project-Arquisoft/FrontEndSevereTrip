import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  PostList as PostListView,
  UserList as UserListView,
  Account as AccountView,
  Hotels as HotelsView,
  PostInsert as PostInsertView,
  HotelDetail as HotelDetailView,
  DoingReservation as DoingReservationView,
  Reservations as ReservationsView,
  Favorites as FavoritesView,
  Cars as CarsView,
  CarDetail as CarDetailView,
  Restaurants as RestaurantsView,
  Flights as FlightsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  SignIn as SignIn
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/signin"
      />
      <RouteWithLayout
        component={SignIn}
        exact
        layout={MainLayout}
        path="/signin"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={PostListView}
        exact
        layout={MainLayout}
        path="/posts"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={HotelsView}
        exact
        layout={MainLayout}
        path="/hotels"
      />
      <RouteWithLayout
        component={PostInsertView}
        exact
        layout={MainLayout}
        path="/postInsert/:postType"
      />
      <RouteWithLayout
        component={HotelDetailView}
        layout={MainLayout}
        path="/hotelDetail/:postId"
      />
      <RouteWithLayout
        component={ReservationsView}
        exact
        layout={MainLayout}
        path="/reservations"
      />
      <RouteWithLayout
        component={DoingReservationView}
        exact
        layout={MainLayout}
        path="/doingReservations"
      />
      <RouteWithLayout
        component={FavoritesView}
        exact
        layout={MainLayout}
        path="/favorites"
      />
      <RouteWithLayout
        component={CarsView}
        exact
        layout={MainLayout}
        path="/cars"
      />
      <RouteWithLayout
        component={CarDetailView}
        layout={MainLayout}
        path="/carDetail/:postId"
      />
      <RouteWithLayout
        component={RestaurantsView}
        exact
        layout={MainLayout}
        path="/restaurants"
      />
      <RouteWithLayout
        component={FlightsView}
        exact
        layout={MainLayout}
        path="/flights"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found"/>
    </Switch>
  );
};

export default Routes;
