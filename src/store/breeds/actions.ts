import {FETCH_BREEDS, GET_RANDOM_IMAGE, SAVE, UPDATE_IMAGE} from './constants';

import {BreedItem, BreedImage} from '../../models/IBreed';

export const save = (payload: BreedItem) => ({
  type: SAVE,
  payload,
});

export const fetchBreeds = () => ({
  type: FETCH_BREEDS,
});

export const getRandomImage = (payload: string) => ({
  type: GET_RANDOM_IMAGE,
  payload,
});

export const updateImage = (image: BreedImage, id: string) => ({
  type: UPDATE_IMAGE,
  payload: {image, id},
});
