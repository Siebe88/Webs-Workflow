export abstract class WorkFlowStep {
  constructor() {}

  public async validate(arg: any) {
    console.log(`Validating: ${this.stepName}`);
    return this.validateStep(arg);
  }

  public async run(arg: any): Promise<any> {
    console.log(`Running: ${this.stepName}`);
    return this.runStep(arg);
  }

  abstract runStep(arg: any): Promise<any>;
  abstract validateStep(arg: any): Promise<any>;
  abstract get stepName(): string;
}
