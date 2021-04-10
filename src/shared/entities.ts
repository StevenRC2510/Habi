export type ApartmentOwner = Readonly<{
  _id: string;
  fullName: string;
  phone: string;
  email: string;
}>;

export type Apartment = Readonly<{
  _id: string;
  area: string;
  rooms: string;
  price: number;
  address: string;
  city: string;
  location: string;
  date: string;
  favorite?: boolean;
}>;

export type LivingPlace = Readonly<{
  _id: string;
  owner: ApartmentOwner;
  apartments: Apartment[];
}>;

export type ApartmentTransformed = Readonly<{
  apartments: {
    [key: string]: Apartment;
  };
}>;

export type LivingPlaceList = Readonly<{
  list: LivingPlace[];
}>;

export type LivingPlaceFilters = Readonly<{
  date: Date;
  location: string;
  sort: boolean;
}>;

export type Filters = Readonly<{
  location: string;
  date: string;
}>;

export type Dictionary = Readonly<{
  [key: string]: any;
}>;

export type Favorites = Readonly<{
  list: Apartment[];
}>;
