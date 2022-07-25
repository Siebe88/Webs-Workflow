//TODO find a way to return value in a dynamic way
export async function setBaseValue(arg: { baseName: string; baseValue: number }): Promise<any> {
  return { [arg.baseName]: arg.baseValue };
}

//Make a separate function to validate data before running everything
export async function setBaseValueValidation(arg: { baseName: string; baseValue: number }): Promise<any> {
  if (arg.baseName == undefined || arg.baseValue == undefined) throw new Error('Does not contain all necessary inputs');
  return 0;
}
