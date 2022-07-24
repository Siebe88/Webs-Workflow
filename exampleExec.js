const workflow = new Workflow();
workflow.registerStep(new WorkflowStep('typeX'));
// workflow.registerStep(new WorkflowStep('typeY'));
// workflow.registerStep(new WorkflowStep('typeZ'));
const workflowConfiguration = [
  {
    type: 'typeX',
    data: { foo: 'bar', isSomething: false },
  },
  {
    type: 'typeY',
  },
  // {
  //   type: 'typeY',
  // },
  // {
  //   type: 'typeZ',
  //   data: { lorem: 'ipsum', someNumber: 12 },
  // },
];
const output = workflow.run(workflowConfiguration);
console.log(output);
// Executing Workflow
// Processing step 'type-X'
// Processing step 'type-Y'
// Processing step 'type-Y'
// Processing step 'type-Z'
