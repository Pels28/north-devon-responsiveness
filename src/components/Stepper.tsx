import clsx from "clsx";
import { ReactNode } from "react";
import Heading from "./Heading";
import { Poppins } from "@/resources/fonts";

interface IStep {
  label: string;
  description?: string;
  icon?: ReactNode;
  passed?: boolean;
}

interface IStepperProps {
  steps?: Array<IStep>;
  activeStep?: number;
  setActiveStep?: (active: number) => void;
  className?: string;
  disableSwitchOnclick?: boolean;
};

export function Stepper({
  steps = [],
  activeStep = 0,
  className,
  setActiveStep,
  disableSwitchOnclick
}: IStepperProps) {   


  return(
    <div className={clsx("w-full text-secondary", Poppins.className, className)}>
      <div className={clsx(
        "grid gap-2 my-1",
        {[`grid-cols-${steps.length}`]: steps.length}
        // "grid-cols-8"
      )}>
        {steps.map((step, index) =>(
          <div 
            key={`step-${index}`} 
            onClick={() => {
              !disableSwitchOnclick && setActiveStep && setActiveStep(index)
            }}
            className={clsx("group", {"cursor-pointer": !disableSwitchOnclick})}
          >
            <div className={clsx(
              "w-full rounded-md border-3",
              {"border-primary-light": activeStep == index},
              {"border-primary": activeStep > index}
            )}></div>
            <div className="pt-3 flex items-center justify-start w-full">
              {step.icon && (
                <div>{step.icon}</div>
              )}
              <div className="flex-grow">
                <h3 className="font-semibold text-sm group-hover:text-">{step.label}</h3>
                {step.description && (<p className="opacity-50 text-xs">{step.description}</p>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}