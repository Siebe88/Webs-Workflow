import { WorkFlowStep } from '../workFlowSteps/WorkFlowStep';
import { WorkflowConfiguration } from './WorkflowConfiguration';

export class Workflow {
  workflowSteps: WorkFlowStep[] = [];
  workflowConfiguration: WorkflowConfiguration[] = [];
  workflowName: string;

  constructor(workflowName: string) {
    this.workflowName = workflowName;
  }

  public registerStep(workflowStep: WorkFlowStep) {
    if (this.findStep(workflowStep.stepName)) {
      throw new Error(`WorkflowStep: ${workflowStep.stepName} has already been registered.`);
    }

    this.workflowSteps.push(workflowStep);
    console.log('Successfully registered:', workflowStep.stepName);
    return 0;
  }

  private findStep(stepName: string): WorkFlowStep | undefined {
    return this.workflowSteps.find((step) => step.stepName === stepName);
  }

  public registerConfiguration(workflowConfiguration: WorkflowConfiguration[]) {
    this.workflowConfiguration = workflowConfiguration;
    console.log('Successfully registered workflowConfiguration');
    return 0;
  }

  public async run(): Promise<number> {
    if (!this.workflowConfiguration) throw new Error('No workflowConfiguration has been registered');
    this.validateSteps();
    this.runSteps();
    return 0;
  }

  private async validateSteps() {
    console.log(`Started validating workflow: ${this.workflowName}`);
    for (const step of this.workflowConfiguration) {
      if (!this.findStep(step.type)) {
        throw new Error(`Method: ${step.type} does not exit in workflow`);
      }
      // if()
    }
    console.log(`Successfully validated workflow: ${this.workflowName}`);
    return 0;
  }

  private async runSteps() {
    console.log(`Started executing workflow: ${this.workflowName}`);
    let context: any = {};
    for (const stepConfig of this.workflowConfiguration) {
      console.log('Processing step:', stepConfig.type);
      const step = this.findStep(stepConfig.type);
      if (step === undefined) throw new Error('Step does not exist');

      if (!stepConfig.data) stepConfig.data = {};
      const res = await step.run({ ...stepConfig.data, context });
      console.log('Result:', res);
      context = { ...context, ...res };
      console.log('Successfully processed step:', stepConfig.type);
    }
    console.log('Successfully executed workflow:', this.workflowName);
    return 0;
  }
}
