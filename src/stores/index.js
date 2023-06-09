import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/AuthReducer';
import { cartReducer } from './reducers/CartReducer';
import { customerReducer } from './reducers/CustomerReducer';
import ProductReducer  from './reducers/ProductReducer';
import { orderReducer } from './reducers/OrderReducer';
import { paymentReducer } from './reducers/PaymentReducer';
import { searchReducer } from './reducers/SearchReducer';
import { categoryReducer }  from './reducers/CategoryReducer';
import { reviewReducer }  from './reducers/ReviewReducer';
import { orderHistoryReducer } from './reducers/OrderHistoryReducer';
import VoiceToTextReducer from './reducers/VoiceToTextReducer';

const store = configureStore({
	reducer: {
		authReducer,
		cartReducer,
		customerReducer,
		ProductReducer,
		orderReducer,
		paymentReducer,
		searchReducer,
		categoryReducer,
		reviewReducer,
		VoiceToTextReducer,
		orderHistoryReducer
    // productMostSellerReducer,
    // productTopNewReducer
	}
});

export default store;