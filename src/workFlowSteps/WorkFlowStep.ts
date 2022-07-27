export abstract class WorkFlowStep {
  constructor() {}

  public async validate(arg: any) {
    console.log(`Validating: ${this.stepName}`);
    const res = this.validateStep(arg);
    console.log(`Successfully validated step: ${this.stepName}`);
    return res;
  }

  public async run(arg: any): Promise<any> {
    console.log(`Running: ${this.stepName}`);
    const res = this.runStep(arg);
    console.log(`Successfully executed step: ${this.stepName}`);
    return res;
  }

  abstract runStep(arg: any): Promise<any>;
  abstract validateStep(arg: any): Promise<any>;
  abstract get stepName(): string;

  //abstract get necessaryField(): string[]; // Because of dynamic naming this has not been implemented
}
