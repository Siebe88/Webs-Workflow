import { WorkFlowStep } from '../WorkFlowStep';

export default class SetBaseValue extends WorkFlowStep {
  public async runStep(arg: { baseName: string; baseValue: number }): Promise<any> {
    return { [arg.baseName]: arg.baseValue };
  }

  public async validateStep(arg: { baseName: string; baseValue: number }): Promise<any> {
    if (arg.baseName == undefined || arg.baseValue == undefined)
      throw new Error('Does not contain all necessary inputs');
    return 0;
  }

  get stepName(): string {
    return 'setBaseValue';
  }
}
