import { WorkFlowStep } from './workFlowSteps/WorkFlowStep';

interface WorkflowConfiguration {
  type: string;
  data?: any;
}

export class WorkFlow {
  workFlowSteps: WorkFlowStep[] = [];

  public registerStep(workflowStep: WorkFlowStep) {
    //To make sure that there are not two identical  workflowSteps registered
    if (this.findStep(workflowStep.stepName))
      throw new Error(`WorkflowStep: ${workflowStep.stepName} has already been registered.`);

    this.workFlowSteps.push(workflowStep);
  }

  private findStep(stepName: string): any {
    return this.workFlowSteps.find((step) => step.stepName === stepName);
  }

  public async run(workflowConfiguration: WorkflowConfiguration[]): Promise<number> {
    // First step is to validate

    return 0;
  }

  private async validateSteps() {}

  // public async run(workflowConfiguration: WorkflowConfiguration[]): Promise<number> {
  //   //first check if all steps are on the workflow and that if they have a validation step that data is validated
  //   // if this fails then not run at all
  //   // TODO add feature to determine if steps should be executed or not (impact )
  //   for (const step of workflowConfiguration) {
  //     if (!this.workFlowSteps[step.type]) {
  //       throw new Error(`Method: ${step.type} does not exit in workflow`);
  //     }
  //     // if()
  //   }

  //   let context: any = {};
  //   for (const step of workflowConfiguration) {
  //     console.log('Processing step:', step.type);
  //     if (!step.data) step.data = {};
  //     const res = await this.workFlowSteps[step.type]({ ...context, ...step.data });
  //     console.log('Res step:', res);
  //     context = { ...context, ...res };
  //   }
  //   return 0;
  // }
}
