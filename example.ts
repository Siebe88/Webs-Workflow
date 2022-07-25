import { WorkFlowStep, WorkFlow } from './Workflow';

const workFlow = new WorkFlow();
workFlow.registerStep(new WorkFlowStep('typeX'));
workFlow.registerStep(new WorkFlowStep('typeY'));
workFlow.registerStep(new WorkFlowStep('setBaseValue'));

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
  {
    type: 'setBaseValue',
    data: { baseName: 'calc', baseValue: 5 },
  },
  // {
  //   type: 'calculation',
  //   data: { baseValue: 'calc', calculation: '+', number: 3 },
  // },
  // {
  //   type: 'calculation',
  //   data: { baseValue: 'calc', calculation: '*', number: 10 },
  // },

  // Does not exists and if not exist do not run workflow
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
