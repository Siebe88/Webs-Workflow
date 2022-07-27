import { WorkFlowStep } from '../workFlowSteps/WorkFlowStep';
import { WorkflowConfiguration } from './WorkflowConfiguration';

export class Workflow {
  workflowSteps: WorkFlowStep[] = [];
  workflowConfiguration: WorkflowConfiguration[] = [];

  public registerStep(workflowStep: WorkFlowStep) {
    //To make sure that there are not two identical  workflowSteps registered
    if (this.findStep(workflowStep.stepName))
      throw new Error(`WorkflowStep: ${workflowStep.stepName} has already been registered.`);

    this.workflowSteps.push(workflowStep);
    console.log('Successfully registered:', workflowStep.stepName);
  }

  private findStep(stepName: string): any {
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
    for (const step of this.workflowConfiguration) {
      if (!this.findStep(step.type)) {
        throw new Error(`Method: ${step.type} does not exit in workflow`);
      }
      // if()
    }

    return 0;
  }

  private async runSteps() {
    // let context: any = {};
    // for (const step of workflowConfiguration) {
    //   console.log('Processing step:', step.type);
    //   if (!step.data) step.data = {};
    //   const res = await this.workflowSteps[step.type]({ ...context, ...step.data });
    //   console.log('Res step:', res);
    //   context = { ...context, ...res };
    // }
    // return 0;
  }
}
