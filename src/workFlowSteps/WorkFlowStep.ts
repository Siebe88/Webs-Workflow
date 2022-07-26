export abstract class WorkFlowStep {
  constructor() {}

  validate(arg: any) {
    console.log(`Validating: ${this.stepName}`);
    this.validateStep(arg);
  }

  run(arg: any) {
    console.log(`Running: ${this.stepName}`);
    this.runStep(arg);
  }

  abstract runStep(arg: any): Promise<any>;
  abstract validateStep(arg: any): Promise<any>;
  abstract get stepName(): string;
}
