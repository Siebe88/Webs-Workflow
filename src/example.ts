import { Workflow, stepClasses, WorkflowConfiguration } from './index';

const workflow = new Workflow('Simple workflow');
workflow.registerStep(new stepClasses.SetBaseValue());
workflow.registerStep(new stepClasses.Calculation());

const workflowConfiguration: WorkflowConfiguration[] = [
  {
    type: 'setBaseValue',
    data: { baseName: 'calc', baseValue: 5 },
  },
  {
    type: 'calculation',
    data: { baseName: 'calc', calcValue: 3, calType: '+' },
  },
  {
    type: 'calculation',
    data: { baseName: 'calc', calcValue: 10, calType: '*' },
  },
];

workflow.registerConfiguration(workflowConfiguration);

async function test() {
  const result = await workflow.run();
  // console.log(result);
}

test();
