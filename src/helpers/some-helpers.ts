import { BreedItem, BreedImage } from '../models/IBreed';

function prepareBreed(item: any): BreedItem {
  return {
    id: item.id,
    bredFor: item.bred_for,
    breedGroup: item.breed_group,
    height: item.height,
    image: item.image,
    lifeSpan: item.life_span,
    name: item.name,
    origin: item.origin,
    referenceImageID: item.reference_image_id,
    temperament: item.temperament,
    weight: item.weight,
  };
}
function prepareImage(item: any): BreedImage {
  return {
    id: item.id,
    height: item.height,
    url: item.url,
    width: item.width,
  };
}

export { prepareBreed, prepareImage };
