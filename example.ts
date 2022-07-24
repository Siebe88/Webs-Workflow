import { WorkFlowStep, WorkFlow } from './Workflow';

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

async function test() {
  const result = await workFlow.run(workflowConfiguration);
  console.log(result);
}

test();
