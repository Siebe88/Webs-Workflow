import { Workflow, stepClasses, WorkflowConfiguration } from '../index';

const workflowName = 'template';

// Please change the workflow instance name when exporting
const workflow = new Workflow(workflowName);

//Register steps (see src/workflowSteps/steps for all available steps)
workflow.registerStep(new stepClasses.SetBaseValue());
workflow.registerStep(new stepClasses.Calculation());

// Configure in which sequence the steps need to be executed
// The same step can be executed multiple times
const workflowConfiguration: WorkflowConfiguration[] = [
  {
    type: 'setBaseValue',
    data: { baseName: 'calc', baseValue: 5 },
  },
  {
    type: 'calculation',
    data: { baseName: 'calc', calcValue: 3, calType: '+' },
  },
];

// Makes it possible to export the workflow
export default workflow.registerConfiguration(workflowConfiguration);

// Runs the workflow for testing / simple executions
async function test() {
  await workflow.run();
}

test();
