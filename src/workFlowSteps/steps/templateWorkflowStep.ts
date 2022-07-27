import { WorkFlowStep } from '../WorkFlowStep';

export default class SetBaseValue extends WorkFlowStep {
  public async runStep(arg: {}): Promise<any> {
    return {};
  }

  public async validateStep(arg: {}): Promise<any> {
    // Check if necessary fields are available during execution
    if (!arg) throw new Error(`Does not contain all necessary inputs arg: ${JSON.stringify(arg)}`);
    return {};
  }

  get stepName(): string {
    return 'template';
  }
}
