import { Workflow, stepClasses, WorkflowConfiguration } from '../index';

const workflow = new Workflow('Simple workflow');
workflow.registerStep(new stepClasses.SetBaseValue());
workflow.registerStep(new stepClasses.Calculation());

const workflowConfiguration: WorkflowConfiguration[] = [
  // {
  //   type: 'setBaseValue',
  //   data: { baseName: 'calc', baseValue: 5 },
  // },
  // Test for validation steps
  {
    type: 'setBaseValue',
    data: { baseName: 'calc' },
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
  await workflow.run();
}

test();
