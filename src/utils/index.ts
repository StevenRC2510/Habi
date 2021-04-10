/* eslint no-param-reassign: "error" */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from 'uuid';
import { LivingPlace, Apartment, Dictionary } from 'shared/entities';

export const convertStringToNumber = (value: string) => {
  return parseInt(value, 10);
};

export const formatCurrency = (countryCode: string, amount: number) => {
  const getTypeCurrency = {
    precision: 0,
    currencySymbol: '$',
  };
  const countryCurrency = {
    COP: {
      integerDivider: '.',
      decimalsDivider: ',',
    },
  };

  function formatter(priceAmount: number, precision: number) {
    const { integerDivider, decimalsDivider } = countryCurrency[countryCode as keyof typeof countryCurrency];
    const regex = /\B(?=(\d{3})+(?!\d))/g;
    let numberValue = priceAmount.toString();

    const [integer, decimals = ''] = numberValue.split('.');
    numberValue = integer.replace(regex, integerDivider);

    if (priceAmount % 1 !== 0 && precision > 0) {
      numberValue += `${decimalsDivider}${decimals.slice(0, precision)}`;
    }
    return numberValue;
  }

  const { currencySymbol, precision } = getTypeCurrency;
  const defaultValue = `${amount < 0 ? '-' : ''}${currencySymbol} ${formatter(Math.abs(amount), precision)}`;

  const renderValue: Record<string, string> = {
    COP: defaultValue,
  };

  return renderValue[countryCode] || defaultValue;
};

export const createActionTypes = (key: string, baseAction: string) => {
  return {
    [`${baseAction}`]: `${key}/${baseAction}`,
    [`${baseAction}_REQUEST`]: `${key}/${baseAction}_REQUEST`,
    [`${baseAction}_SUCCESS`]: `${key}/${baseAction}_SUCCESS`,
    [`${baseAction}_FAILURE`]: `${key}/${baseAction}_FAILURE`,
  };
};

export const convertObjectToArray = (object: Dictionary) => {
  return Object.keys(object).map(i => object[i]);
};

export const convertApartmentArrayToObject = (array: Apartment[]) => {
  return array.reduce((acc, { _id: id, ...rest }) => ({ ...acc, [id]: { _id: id, ...rest } }), {});
};

export const convertOwnerArrayToObject = (array: LivingPlace[]) => {
  return array.reduce(
    (acc, { _id: id, apartments, ...rest }) => ({
      ...acc,
      [id]: { ...rest, _id: id, apartments: convertApartmentArrayToObject(apartments) },
    }),
    {},
  );
};

export const generateDataWithUuid = (array: any[]) => {
  return array.map(data => {
    const dataWithUuId = { ...data, _id: uuidv4(), date: new Date() };
    return dataWithUuId;
  });
};

export const removeArrayApartment = (array: LivingPlace[], apartmentId: string) => {
  const result = array.map(data => {
    const apartmentsData = data.apartments.filter(({ _id: id }) => id !== apartmentId);
    return { ...data, apartments: apartmentsData };
  });
  return result;
};

export const concatTest = (array: Apartment[]) => {
  const newArray: Apartment[] = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(array[i]);
  }
  return newArray;
};
