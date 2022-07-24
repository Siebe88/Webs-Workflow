// import { typeX } from './typeX';
export async function typeX({ foo, isSomething }: { foo: String; isSomething: Boolean }): Promise<any> {
  console.log('foo:', foo);
  console.log('isSomething', isSomething);

  return 'X';
}

export async function typeY(): Promise<any> {
  console.log('test');

  return 'X';
}

const steps: any = {};
steps.typeX = typeX;
steps.typeY = typeY;

// console.log(steps['typeX']({ foo: 'bar', isSomething: false }));

class WorkFlowStep {
  step: any;
  stepName: string;

  constructor(step: string) {
    this.step = steps[step];
    this.stepName = step;
  }
}

interface WorkflowConfiguration {
  type: string;
  data?: any;
}

class WorkFlow {
  public registerStep(workflowStep: WorkFlowStep) {
    this[workflowStep.stepName] = workflowStep.step;
  }

  public async run(workflowConfiguration: WorkflowConfiguration[]): Promise<number> {
    //first check if all steps are on the workflow, then not run at all
    for (const step of workflowConfiguration) {
      if (!this[step.type]) {
        throw new Error('Method does not exit in workflow');
      }
    }

    let context: any = {};
    for (const step of workflowConfiguration) {
      console.log('Processing step:', step.type);
      const res = await this[step.type](step.data);
      context = { ...context, ...res };
    }
    return 0;
  }
}

const workFlow = new WorkFlow();
workFlow.registerStep(new WorkFlowStep('typeX'));
workFlow.registerStep(new WorkFlowStep('typeY'));

const workflowConfiguration = [
  {
    type: 'typeX',
    data: { foo: 'bar', isSomething: false },
  },
  {
    type: 'typeY',
  },
  {
    type: 'typeY',
  },
  // {
  //   type: 'typeZ',
  //   data: { lorem: 'ipsum', someNumber: 12 },
  // },
];
// workFlow.run(workflowConfiguration).then((output) =>
//   console.log('result', output)
// );

const result = await workFlow.run(workflowConfiguration);

console.log(result);
