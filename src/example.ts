import { Workflow, stepClasses, WorkflowConfiguration } from './index';

const workflow = new Workflow();
workflow.registerStep(new stepClasses.SetBaseValue());

const workflowConfiguration: WorkflowConfiguration[] = [
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
];

workflow.registerConfiguration(workflowConfiguration);

async function test() {
  const result = await workflow.run();
  // console.log(result);
}

test();
