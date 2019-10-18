import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  ProductList as ProductListView,
  UserList as UserListView,
  Account as AccountView,
  Hotels as HotelsView,
  HotelInsert as HotelInsertView,
  HotelDetail as HotelDetailView,
  DoingReservation as DoingReservationView,
  Reservations as ReservationsView,
  Favorites as FavoritesView,
  Cars as CarsView,
  CarInsert as CarInsertView,
  Restaurants as RestaurantsView,
  RestaurantInsert as RestaurantInsertView,
  Flights as FlightsView,
  FlightInsert as FlightInsertView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/products"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
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
        component={HotelInsertView}
        exact
        layout={MainLayout}
        path="/hotelInsert"
      />
      <RouteWithLayout
        component={HotelDetailView}
        exact
        layout={MainLayout}
        path="/hotelDetail"
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
        component={CarInsertView}
        exact
        layout={MainLayout}
        path="/carInsert"
      />
      <RouteWithLayout
        component={RestaurantsView}
        exact
        layout={MainLayout}
        path="/restaurants"
      />
      <RouteWithLayout
        component={RestaurantInsertView}
        exact
        layout={MainLayout}
        path="/restaurantInsert"
      />
      <RouteWithLayout
        component={FlightsView}
        exact
        layout={MainLayout}
        path="/flights"
      />
      <RouteWithLayout
        component={FlightInsertView}
        exact
        layout={MainLayout}
        path="/flightInsert"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
