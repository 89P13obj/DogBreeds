export class BreedHeight {
  imperial: string = '';
  metric: string = '';
}

export class BreedWeight {
  imperial: string = '';
  metric: string = '';
}

export class BreedImage {
  height: number = 0;
  id: string = '';
  url: string = '';
  width: number = 0;
}

export class BreedItem {
  bredFor: string = '';
  breedGroup: string = '';
  height: BreedHeight = new BreedHeight();
  id: number = 0;
  image: BreedImage = new BreedImage();
  lifeSpan: string = '';
  name: string = '';
  origin: string = '';
  referenceImageID: string = '';
  temperament: string = '';
  weight: BreedWeight = new BreedWeight();
}

export interface IBreed {
  list: BreedItem[];
}
