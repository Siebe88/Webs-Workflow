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

workFlow.run(workflowConfiguration).then((output) => console.log('result', output));
