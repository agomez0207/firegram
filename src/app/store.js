import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../features/images/imageReducer';

export default configureStore({
    reducer: {
        image: imageReducer,
    },
});