export async function typeX({ foo, isSomething }: { foo: String; isSomething: Boolean }): Promise<any> {
  console.log('foo:', foo);
  console.log('isSomething', isSomething);

  return 'X';
}
