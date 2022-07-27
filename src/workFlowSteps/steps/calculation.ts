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

  public async validateStep(arg: { baseName: string; calcValue: number; calType: string; context: any }): Promise<any> {
    const baseValue = arg.context[arg.baseName];

    if (!arg.baseName || !baseValue || !arg.calType || !arg.context)
      throw new Error(`Does not contain all necessary inputs arg: ${JSON.stringify(arg)}`);

    // For this simple step validate and run do the same but when writing to a system this step would be cancelled
    return { [arg.baseName]: eval(`${baseValue + arg.calType + arg.calcValue}`) };
  }

  get stepName(): string {
    return 'calculation';
  }
}
