import { Avatar } from "@nextui-org/avatar";
import { groupBy, snakeCase, sortBy, startCase, uniqBy } from "lodash";

import { SUPPORTED_COUNTRIES,  } from "@/resources/constants";
import { ISelectOption } from "@/components/forms/Select";
import { IRadioOption } from "@/components/RadioButton";
import { ICountry, ICountryCode } from "@/resources/types/index";



export const CountryOptions = SUPPORTED_COUNTRIES?.reduce<Array<ISelectOption>>((cum, cur) =>([
  ...cum,
  {
    id: cur.iso,
    label: cur.name,
    value: cur.iso,
    icon: (
      <Avatar
        alt={cur.name} 
        className="w-6 h-6" 
        src={cur.flag}
      />
    )
  }
]), []);

export const PhoneNumberCountryOptions: Record<ICountryCode, ICountry> = {
  "ZZ": {
    iso: "ZZ",
    name: "International",
    code: "",
    flag: "/svg/international-phone-number.svg"
  },
  ...SUPPORTED_COUNTRIES?.reduce<Record<ICountryCode, ICountry>>((cum, cur) => (
    {
      ...cum,
      [cur.iso]: {
        iso: cur.iso,
        name: cur.name,
        code: cur.code,
        flag: cur.flag
      }
    }
  ), []),
}

export const CountryStatesOptions = (countryIso: string) => {
  const country = SUPPORTED_COUNTRIES.find((country) => country.iso == countryIso);

  if(country) {
    const cityStates = country?.cities?.filter((city) => !!city.state);
    
    if(cityStates) {
      const states = sortBy(uniqBy(cityStates, "state"), "state") ;
      return states.reduce<Array<ISelectOption>>((cum, city) => ([
        ...cum,
        {
          id: snakeCase(city.state as string),
          label: city.state,
          value: city.state
        }
      ]), []);
    }
  }
}

export const StateCitiesOptions = (countryIso: string, state?: string) => {
  const country = SUPPORTED_COUNTRIES.find((country) => country.iso == countryIso);

  if(country) {
    const cityStates = country?.cities?.filter((city) => !!city.state);
    
    if(cityStates && state) {
      const citiesByState = groupBy(country.cities, "state");     
      return citiesByState[state].reduce<Array<ISelectOption>>((cum, city) => ([
        ...cum,
        {
          id: snakeCase(city.name),
          label: city.name,
          value: city.name
        }
      ]), []);
    } else {
      const cities = sortBy(uniqBy(country.cities, "name"), "name");
      return cities.reduce<Array<ISelectOption>>((cum, city) => ([
        ...cum,
        {
          id: snakeCase(city.name as string),
          label: city.name,
          value: city.name
        }
      ]), []);
    }
  }
}



