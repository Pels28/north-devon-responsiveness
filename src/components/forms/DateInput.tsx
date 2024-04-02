"use client";

import React, { ReactNode, useState } from "react";
import clsx from "clsx";
import * as Popper from "@popperjs/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Input from "./Input";
import { Poppins } from "@/resources/fonts";
import { CalendarIcon } from "@/icons";
import { ClockIcon } from "@/icons";
import { FaRegCalendarAlt } from "react-icons/fa";



export interface IDateInputProps {
  value?: Date | null | [Date | null, Date | null];
  onChange?: (date: Date | null | [Date | null, Date | null]) => void;
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "date" | "datetime" | "monthOnly" | "yearOnly" | "timeOnly" | "monthYearOnly";
  prepend?: ReactNode | string | number;
  description?: string;
  onBlur?: (e: React.FocusEvent<any, Element>) => any;
  className?: string;
  error?: string;
  closeOnScroll?: boolean
  placement?: Popper.Placement,
  classes?: {
    popper?: string;
    wrapper?: string;
  }
  format?: string;
  yearOnly?: boolean
  monthYearOnly?: boolean;
  rangeVariant?: "start" | "end" | "both";
  min?: Date | null;
  max?: Date | null;
  excludedDates?: Array<Date>;
  showWeekNumbers?: boolean;
  excludedIntervalDated?: Array<{
    start: Date;
    end: Date;
  }>;
  initialValue?: Date;
  closeOnSelect?: boolean;
};

const DateInput = ({
  label, 
  name,
  id,
  value,
  onChange, 
  className,
  closeOnScroll = true,
  closeOnSelect = true,
  placement,
  classes,
  format = "dd/MM/yyyy",
  placeholder,
  variant,
  description,
  size,
  min,
  max,
  rangeVariant,
  excludedDates,
  disabled,
  showWeekNumbers,
  initialValue,
  onBlur,
  excludedIntervalDated = [],
  error,
  required,
  prepend
}:IDateInputProps) => {
  const [open, setOpen] = useState(false);
  const startDate = Array.isArray(value)? value[0] : undefined;
  const endDate = Array.isArray(value)? value[1] : undefined;
  const innerValue = Array.isArray(value)? 
    rangeVariant == "start"? startDate : 
      rangeVariant == "end"? endDate : 
        rangeVariant == "both"? startDate : endDate
    : value;


    const handleChange = (dates: [Date | null, Date | null] | Date | null) => {
      if(dates) 
        onChange && onChange(dates);
      if(closeOnSelect) setOpen(false)
  
    }
  

  return (
    <DatePicker
      id={id}
      open={open}
      className={clsx(className)}
      selectsStart={rangeVariant == "start"}
      selectsEnd={rangeVariant == "end"}
      selectsRange={rangeVariant == "both"}
      selected={innerValue}
      onChange={handleChange}
      // popperPlacement={placement}
      popperClassName={clsx(Poppins.className, "!z-10", classes?.popper)}
      calendarClassName={Poppins.className}
      dayClassName={() => clsx(Poppins.className, "text-secondary")}
      timeClassName={() => Poppins.className}
      monthClassName={() => Poppins.className}
      weekDayClassName={() => Poppins.className}
      shouldCloseOnSelect
      customInput={
        <Input 
          label={label}
          variant="underlined"
          append={
            <span onClick={() => setOpen(!open)}>
              {variant == "timeOnly"? (
                <ClockIcon className="w-5 h-5 cursor-pointer text-primary" />
              ) : (
                <FaRegCalendarAlt fill="#E9722B" color="primary" className="w-5 h-5 cursor-pointer" />
              )}
            </span>
          } 
          prepend={prepend}
          placeholder={placeholder}
          description={description}
          size={size}
          error={error}
          required={required}
        />
      }
      showYearPicker={variant == "yearOnly"}
      showMonthYearPicker={variant == "monthYearOnly"}
      showTimeSelectOnly={variant == "timeOnly"}
      showTimeSelect={variant == "timeOnly"}
      wrapperClassName={clsx("w-full", classes?.wrapper)}
      startDate={startDate}
      endDate={endDate}
      dateFormat={variant == "timeOnly"? "h:mm aa" : format}
      maxDate={max}
      minDate={min}
      minTime={min??undefined}
      maxTime={max??undefined}
      disabled={disabled}
      openToDate={initialValue}
      excludeDateIntervals={excludedIntervalDated}
      closeOnScroll={closeOnScroll}
      name={name}
      excludeDates={excludedDates}
      showWeekNumbers={showWeekNumbers}
      showPopperArrow={false}
      onBlur={onBlur}
      required={required}
      onInputClick={() => setOpen(!open)}
      onClickOutside={() => setOpen(!open)}
    />
  )
}

export default DateInput;