export async function typeY(arg: { count?: number }): Promise<{ count: number }> {
  console.log('CountArg:', arg.count);
  let count: number = 0;

  if (arg.count != undefined) count = arg.count + 1;
  console.log('count:', count);

  return { count };
}
