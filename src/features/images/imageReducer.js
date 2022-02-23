import { createAction, createReducer } from '@reduxjs/toolkit'

const addImageAction = createAction('images/add');
const addMultipleImagesAction = createAction('images/addMultiple')
const setImageIndexAction = createAction('images/setIndex')
const setShowInstructionsAction = createAction('images/showInstructions')

const initialState = { value: [], index: 0, showInstructions: true }

const imageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addImageAction, (state, action) => {
      const imageUrl = action.payload;
      return {
        value : [imageUrl, ...state.value],
        index: state.index,
        showInstructions : state.showInstructions 
      }
    })
    .addCase(addMultipleImagesAction, (state, action) => {
      const imagesUrl = action.payload;
      return {
        ...state,
        value : [...imagesUrl, ...state.value]
      }
    }).addCase(setImageIndexAction, (state, action) => {
      const imageIndex = action.payload;
      return {
        ...state,
        index: imageIndex
      }
    }).addCase(setShowInstructionsAction, (state, action) => {
      const showInstructions = action.payload;
      return {
        ...state,
        showInstructions: showInstructions
      }
    })
});

export const addImage = addImageAction;
export const addMultipleImages = addMultipleImagesAction;
export const setImageIndex = setImageIndexAction;
export const setShowInstructions = setShowInstructionsAction;

export default imageReducer;