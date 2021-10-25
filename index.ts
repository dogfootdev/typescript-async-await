let startTime = new Date().getTime();
async function test() {
  const { SchemaLink } = await import('apollo-link-schema');
  console.log('async time : ' + (new Date().getTime() - startTime));
}
console.log('start time : ' + (new Date().getTime() - startTime));
test();
console.log('end time : ' + (new Date().getTime() - startTime));
