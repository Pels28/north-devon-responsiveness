import { Avatar, Select as NextSelect, SelectItem} from "@nextui-org/react";
import "react-phone-number-input/style.css";

import { Key } from "@/components/Dropdown";
import { ICountry, ICountryCode } from "@/resources/types/index";
import { PhoneNumberCountryOptions } from "@/utilities/listOptions";



interface ICountrySelectProps {
  value?: ICountryCode;
  onChange?: (value: ICountryCode) => void;
  onFocus?: () => void;
}


function CountrySelect({
  value,
  onChange,
  onFocus
}: ICountrySelectProps) {


  const handleSelectionChange = (key: Set<Key> | Key ) => {
    if(typeof key == "string" || typeof key == "number") {
      const opt = PhoneNumberCountryOptions[key as ICountryCode] as ICountry;
      onChange && onChange(opt.code as ICountryCode);
    } else {
      const value = key.values().next().value as string;
      onChange && onChange(value as ICountryCode);
    }
  }


  return (
    <NextSelect
      aria-label="Country Select"
      items={Object.values<ICountry>(PhoneNumberCountryOptions)}
      variant="bordered"
      classNames={{
        base: "max-w-16",
        trigger: "p-0 rounded-none border-none shadow-none h-fit min-h-7",
        popoverContent: "w-60",
        innerWrapper: "!pt-0"
      }}
      selectedKeys={value? new Set([value]) : undefined }
      onSelectionChange={handleSelectionChange}
      renderValue={(selectedList: { data: any; }[]) =>{        
        const country = selectedList[0]?.data;

        return (
          <Avatar 
            alt={country?.name} 
            className="w-6 h-6" 
            src={country?.flag??"/svg/international-phone-number.svg"}
            classNames={{
              img: country?.iso == "ZZ"? "object-contain" : ""
            }}
          />
        )
      }}  
      onFocus={onFocus}  
    >
      {(country: { iso: string; name: string | undefined; flag: string | undefined; code: any; }) =>(
        <SelectItem 
          key={country.iso} 
          value={country.iso}
          startContent={
            <Avatar 
              alt={country.name} 
              className="w-6 h-6" 
              src={country.flag}
              classNames={{
                img: country.iso == "ZZ"? "object-contain" : ""
              }}
            />
          }
          textValue={country.name}
        >
          {country.name} {country.code && `+${country.code}`}
        </SelectItem>
      )}
    </NextSelect>
  )
}

export default CountrySelect;