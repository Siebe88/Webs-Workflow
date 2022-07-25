import { typeX } from './typeX';
import { typeY } from './typeY';
import { setBaseValue, setBaseValueValidation } from './setBaseValue';

const steps: any = {};
steps.typeX = typeX;
steps.typeY = typeY;
steps.setBaseValue = setBaseValue;

const validation: any = {};
validation.setBaseValue = setBaseValueValidation;

export class WorkFlowStep {
  step: Function;
  validation: Function;
  stepName: string;

  constructor(step: string) {
    this.step = steps[step];
    this.validation = validation[step];
    this.stepName = step;
  }
}
