# Webs-Workflow

This piece of software was made to enable the configuration and execution of a workflow that consists of multiple steps.

## To create and execute a workflow

- Create a copy of src/workflows/templateWorkflow.ts and follow the steps in the file.
- Add the new workflow to src\workflows\index.ts so that the workflow is exported.
  To run the workflow: ts-node ./src/workflows/fileName.ts (please change fileName to the new workflow).

## To create new workFlowStep

- Create a copy of src/workflowSteps/templateWorkflowStep.ts and fill in the necessary methods.
- Add the new class to src\workFlowSteps\StepClasses.ts so that the new class is available for the workflows
- Add the new workFlowStep to a workflow

## To do

- Add tests for basic functionality
- Add a SQLite / other method for execution logging
- Create a generic way for field validation (and type of)
