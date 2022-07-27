# Webs-Workflow
This piece of software was made to enable the configuration and exectution of a workflow that consists of multiple steps.


## To create and exectute a workflow
Create a copy of src/workflows/templateWorkflow.ts and follow the steps in the file.

To run the workflow: ts-node ./src/workflows/fileName.ts (please change fileName to the new workflow.

## To create new workFlowStep
- Create a copy of src/workflowSteps/templateWorkflowStep.ts and fill in the neccesary methods.
- Add the new class to src\workFlowSteps\StepClasses.ts so that the new class is available for the workflows
- Add the new workFlowStep to a workflow

## To do
- Add tests for basic functionality 
- Add a SQLite / other method for execution logging
- Create a generic way for field validation (and type of)





