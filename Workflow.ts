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
        throw new Error('Method does not exit in workflow');
      }
    }

    let context: any = {};
    for (const step of workflowConfiguration) {
      console.log('Processing step:', step.type);
      const res = await this.workFlowSteps[step.type](step.data);
      context = { ...context, ...res };
    }
    return 0;
  }
}

export { WorkFlowStep, WorkFlow };
