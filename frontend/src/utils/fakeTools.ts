// fake a cache so we don't slow down stuff we've already seen
// let fakeCache = {};
// https://stackoverflow.com/a/69198602
let fakeCache: { [id: string] : any; } = {};

async function fakeNetwork(key?:any) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 100);
  });
}

export async function fakeNetResult(id:string) {
  await fakeNetwork(`contact:${id}`);

  return "testdata1234567";
}