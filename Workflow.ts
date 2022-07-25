import { WorkFlowStep } from './workFlowSteps/WorkFlowStep';

interface WorkflowConfiguration {
  type: string;
  data?: any;
}

class WorkFlow {
  workFlowSteps: any = {};

  public registerStep(workflowStep: WorkFlowStep) {
    this.workFlowSteps[workflowStep.stepName] = workflowStep.step;
  }

  public async run(workflowConfiguration: WorkflowConfiguration[]): Promise<number> {
    //first check if all steps are on the workflow, then not run at all
    for (const step of workflowConfiguration) {
      if (!this.workFlowSteps[step.type]) {
        throw new Error(`Method: ${step.type} does not exit in workflow`);
      }
    }

    let context: any = {};
    for (const step of workflowConfiguration) {
      console.log('Processing step:', step.type);
      if (!step.data) step.data = {};
      const res = await this.workFlowSteps[step.type]({ ...context, ...step.data });
      console.log('Res step:', res);
      context = { ...context, ...res };
    }
    return 0;
  }
}

export { WorkFlowStep, WorkFlow };
