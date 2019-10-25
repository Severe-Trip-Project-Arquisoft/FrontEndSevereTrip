import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

import { API } from 'HTTPRequests';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {useParams, useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {}
}));



const InsertPT = props => {
  const { className, ...rest } = props;

  const {postType} = useParams();
  var titleCard ="Insert a new "+postType.toString();

  let history = useHistory();

  const classes = useStyles();
  const [values, setValues] = useState({
    serviceName: '',
    address: '',
    postalCode:'',
    email: '',
    phone: 1,
    price: 0.0,
    latitude: 0.0,
    longitude: 0.0,
    city: '',
    country: '',
    description: ''
  });

  const [state, setState] = useState({
    hotelfreeparking:false,
    hotelrestauran:false,
    hotelbusinessCenterInternetAccess:false,
    hotelbreakfastAvailable:false,
    hotellaundryService:false,
    hotelconferenceFacilities:false,
    hotelmeetingRooms:false,
    hotelinternet:false,
    hotelfreeInternet:false,
    hotelnonSmokingRooms:false,
    hotelsuites:false,
    hotelroomsFamilies:false,
    hotelroomService:false,
    hotelsafeBox:false,
    hotelflatScreenTV:false,
    restaurantChineseFood:false,
    restaurantItalianfood:false,
    restaurantIndianfood:false,
    restaurantFrenchfood:false,
    restaurantThailandfood:false,
    restaurantSpainfood:false,
    restaurantAmericanfood:false,
    restaurantMexicofood:false,
    restaurantMiddleEasternfood:false,
    restaurantAustraliafood:false,
    restaurantArgentinefood:false,
    restaurantPerufood:false,
    restaurantColombianfood:false,
    restaurantRussiafood:false,
    restaurantEuropeanfood:false,
    restaurantContemporaryfood:false,
    restaurantMediterraneanFood:false,
    restaurantLocalfood:false,
    restaurantVeganFoodOptions:false,
    restaurantFoodGlutenFreeOptions:false,
    restaurantfreeparking:false,
    restaurantServealcohol:false,
    restaurantAcceptDigitalPayments:false,
    restaurantPrivateEvents:false,
    flightFirstclass:false,
    flightExecutiveclass:false,
    flightPremiumEconomyClass:false,
    flightTouristclass:false,
    flightAerolineasArgentinas:false,
    flightAeroméxico:false,
    flightAirCanada:false,
    flightAirEuropa:false,
    flightAirFrance:false,
    flightAmericanAirlines:false,
    flightAvianca:false,
    flightAviorAirlines:false,
    flightConviasa:false,
    flightCopaAirlines:false,
    flightCubana:false,
    flightDelta:false,
    flightIberia:false,
    flightInterjet:false,
    flightJetBlue:false,
    flightKLM:false,
    flightLATAM:false,
    flightLufthansa:false,
    flightSpirit:false,
    flightTurkishAirlines:false,
    flightUnitedAirlines:false,
    flightVivaAir:false,
    flightWingo:false,
    flightEasyFly:false,
    flightSatena:false,
    rentCar5seats:false,
    rentCar4doors:false,
    rentCar1largesuitcase:false,
    rentCar1smallsuitcase:false,
    rentCarAirconditioning:false,
    rentCarManualtransmission:false,
    rentCarAutomatictransmission:false,
    rentCarFuelPolicyFullFull:false,
    rentCarFuelPolicyFullEmpty:false,
    rentCarFuelpolicyEmptyEmpty:false,
    rentCarCancellation:false,
    rentCarChangesinthereservation:false,
    rentCarCoverageincaseoftheft:false,
    rentCarPartialCollisionCoverage:false,
    rentCarUnlimitedmileage:false,
    rentCarMeetGreetatlocalairport:false
  });

  const lTag = Object.entries(state);
  var auxTagType =  [];

  for (var i = 0; i < lTag.length; i++) {
	if(lTag[i][0].includes(postType)){
		var tag = [lTag[i][0],lTag[i][1],i];
		auxTagType.push(tag);
	}
  } 

  var tagDesciption =[
    "Free parking",
    "Restaurant",
    "Business Center Internet Access",
    "Breakfast Available",
    "Laundry Service",
    "Conference Facilities",
    "Meeting Rooms",
    "Internet",
    "Free Internet",
    "Non Smoking Rooms",
    "Suites",
    "Rooms Families",
    "Room Service",
    "SafeBox",
    "Flat Screen TV",
    "Chinese Food",
    "Italian food",
    "Indian food",
    "French food",
    "Thailand food",
    "Spain food",
    "American food",
    "Mexico food",
    "Middle Eastern food",
    "Australia food",
    "Argentine food",
    "Peru food",
    "Colombian food",
    "Russia food",
    "European food",
    "Contemporary food",
    "Mediterranean Food",
    "Local food",
    "Vegan Food Options",
    "Food Gluten Free Options",
    "free parking",
    "Serve alcohol",
    "Accept Digital Payments",
    "Private Events",
    "First class",
    "Executive class",
    "Premium Economy Class",
    "Tourist class",
    "Aerolineas Argentinas",
    "Aeroméxico",
    "Air Canada",
    "Air Europa",
    "Air France",
    "American Airlines",
    "Avianca",
    "Avior Airlines",
    "Conviasa",
    "Copa Airlines",
    "Cubana",
    "Delta",
    "Iberia",
    "Interjet",
    "JetBlue",
    "KLM",
    "LATAM",
    "Lufthansa",
    "Spirit",
    "Turkish Airlines",
    "United Airlines",
    "Viva Air",
    "Wingo",
    "EasyFly",
    "Satena",
    "5 seats",
    "4 doors",
    "1 large suitcase",
    "1 small suitcase",
    "Air conditioning",
    "Manual transmission",
    "Automatic transmission",
    "Fuel Policy Full / Full",
    "Fuel Policy Full / Empty",
    "Fuel policy Empty / Empty",
    "Cancellation",
    "Changes in the reservation",
    "Coverage in case of theft",
    "Partial Collision Coverage (CDW)",
    "Unlimited mileage",
    "Meet & Greet at local airport"
  ];

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    setState({ ...state, [event.target.name]: event.target.checked });
  };



  const handleSubmit = event => {
        event.preventDefault();



	var arraytags =  [];

	for (var i = 0; i < lTag.length; i++) {
		if(lTag[i][1]){
			var tag = {
			description : tagDesciption[i],
			name : lTag[i][0]
			}
			arraytags.push(tag);
		}
	}

	var data = {
		providerId: "0123558",
		name: values.serviceName,
		serviceType: postType,
		address: values.address,
		postalCode: values.postalCode,
		city: values.city,
		telephone: values.phone,
		latitude: values.latitude,
	        longitude: values.longitude,
		description: values.description,
		commentIds: [],
		price: values.price,
		tags:arraytags
	}

//	    var dataPost = JSON.stringify(data);
//      console.log('DATA I ',data.telephone);
//      console.log('form submission data',data);
      API.postProvider.createPost(data);
      history.push("/posts");
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          subheader="The information must be complete"
          title={titleCard}
        />
        <Divider />
        <CardHeader
          title="Information"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
	      md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Name of service"
                margin="dense"
                name="serviceName"
                onChange={handleChange}
                required
                value={values.serviceName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	      md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Address"
                margin="dense"
                name="address"
                onChange={handleChange}
                required
                value={values.address}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	      md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Latitude"
                margin="dense"
                name="latitude"
                onChange={handleChange}
                type="number"
		required
                value={values.latitude}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	      md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Longitude"
                margin="dense"
                name="longitude"
                onChange={handleChange}
                type="number"
		required
                value={values.longitude}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	      md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Postal Code"
                margin="dense"
                name="postalCode"
                onChange={handleChange}
                required
                value={values.postalCode}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	      md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                margin="dense"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	      md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                margin="dense"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	      md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Average service price $"
                margin="dense"
                name="price"
                onChange={handleChange}
                type="number"
                value={values.price}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	      md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="City"
                margin="dense"
                name="city"
                onChange={handleChange}
                required
                value={values.city}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
	      md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Country"
                margin="dense"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>
	    <Grid
              item
	      md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Description"
                margin="dense"
                name="description"
                onChange={handleChange}
                value={values.description}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardHeader
          title="Services and Features"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            




                  {auxTagType.map((post, index) => (

			    <Grid
			      item
			      md={4}
			      sm={6}
			      xs={12}
			    >

				<FormControlLabel
				    control={<Checkbox
					name={auxTagType[index][0]}
					onChange={handleChange}
					/>}
				  />

				<label>
				    {tagDesciption[auxTagType[index][2]]}
				</label>

			    </Grid>



                  ))}

          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
	    type="submit"
            color="primary"
            variant="contained"
	    onClick={handleSubmit}
          >
            Save Post
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

InsertPT.propTypes = {
  className: PropTypes.string
};

export default InsertPT;
