/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51KrWZ4KIplwJBzUQtCZXn4dgJGYWe1Sr1LYDyNw7G3UKA5llSz2ApwIB9V2XF8YPzQnsuhASvRZdD7gZFftqqaQ800NIti5WqE'
  );
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + charge credit card
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id,
    // });
    window.location.replace(`${session.data.session.url}`);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
