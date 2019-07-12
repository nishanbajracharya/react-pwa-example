declare module 'UserProps' {
  interface IAddress {
    city: string;
    state: string;
    country: string;
    zipCode: string;
    countryCode: string;
    streetAddress: string;
  }

  export interface IProps {
    id: number;
    email: string;
    phone: string;
    lastName: string;
    address: IAddress;
    firstName: string;
    profileImage: string;
  }
}
