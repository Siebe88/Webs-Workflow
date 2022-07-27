import { WorkFlowStep } from '../WorkFlowStep';

export default class SetBaseValue extends WorkFlowStep {
  public async runStep(arg: { baseName: string; baseValue: number }): Promise<any> {
    return { [arg.baseName]: arg.baseValue };
  }

  public async validateStep(arg: { baseName: string; baseValue: number }): Promise<any> {
    if (!arg.baseName || !arg.baseValue)
      throw new Error(`Does not contain all necessary inputs arg: ${JSON.stringify(arg)}`);
    return { [arg.baseName]: arg.baseValue };
  }

  get stepName(): string {
    return 'setBaseValue';
  }
}
