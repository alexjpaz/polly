import { WorkbookService } from './WorkbookService';

import { promises as fs } from 'fs';

it('should load a valid workbook', async () => {
  const fakeData = {
   "name": "example",
   "phrases": []
  };
  const file = new File([JSON.stringify(fakeData)], {
    type: "text/plain"
  });

  const data = await WorkbookService.loadFromFile(file);

  expect(data).toEqual(fakeData);
});

it('should load example workbook', async () => {
  let content = await fs.readFile("./src/datasources/example_1.json");

  let fakeData = JSON.parse(content.toString());

  const file = new File([JSON.stringify(fakeData)], {
    type: "text/plain"
  });

  const data = await WorkbookService.loadFromFile(file);

  expect(data).toEqual(fakeData);
});


it('should throw errors', async () => {
  const file = new File([`zzz`], {
    type: "text/plain"
  });

  try {
    await WorkbookService.loadFromFile(file);
  } catch(e) {
    // noop
    return;
  }

  throw new Error("Should not get here");
});


it('should throw an error loading a file with no phrases', async () => {
  const file = new File([`{
      "name": "no phrases"
    }`], {
      type: "application/json"
    });

  try {
    await WorkbookService.loadFromFile(file);
  } catch(e) {
    expect(e.message).toContain("valid phrases");
    // noop
    return;
  }

  throw new Error("Should not get here");
});
