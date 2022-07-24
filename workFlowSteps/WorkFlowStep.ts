import { typeX } from './typeX';
import { typeY } from './typeY';

const steps: any = {};
steps.typeX = typeX;
steps.typeY = typeY;

export class WorkFlowStep {
  step: any;
  stepName: string;

  constructor(step: string) {
    this.step = steps[step];
    this.stepName = step;
  }
}
