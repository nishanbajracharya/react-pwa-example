declare module 'UserProps' {
  interface Address {
    city: string;
    state: string;
    country: string;
    zipCode: string;
    countryCode: string;
    streetAddress: string;
  }

  export interface Props {
    id: number;
    email: string;
    phone: string;
    lastName: string;
    address: Address;
    firstName: string;
    profileImage: string;
  }
}
