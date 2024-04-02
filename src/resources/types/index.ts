import {CountryCode} from "libphonenumber-js";




export interface IconType {
  className?: string;
}

export type ICountryCode = CountryCode & "ZZ"; 


export interface ICountry {
  name: string;
  iso: string;
  code?: string;
  flag?: string;
}




export interface ISupportedCountry {
  name: any | string;
  iso: any;
  code: ReturnType<any>;
  flag: string;
  cities?: Array<{
    name: string;
    state?: string;
  }>
}

