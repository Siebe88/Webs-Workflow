export async function typeY(arg: { count?: number }): Promise<{ count: number }> {
  console.log('CountArg:', arg.count);
  let count: number = 0;

  if (arg.count != undefined) count = arg.count + 1;
  console.log('count:', count);

  return { count };
}

import { WorkFlowStep } from '../WorkFlowStep';

export default class Calculation extends WorkFlowStep {
  public async runStep(arg: { baseName: string; calcValue: number; calType: string; context: any }): Promise<any> {
    const baseValue = arg.context[arg.baseName];
    return { [arg.baseName]: eval(`${baseValue + arg.calType + arg.calcValue}`) };
  }

  public async validateStep(arg: { baseName: string; baseValue: number }): Promise<any> {
    if (arg.baseName == undefined || arg.baseValue == undefined)
      throw new Error('Does not contain all necessary inputs');
    return { [arg.baseName]: arg.baseValue };
  }

  get stepName(): string {
    return 'calculation';
  }
}
