import { WorkbookService } from './WorkbookService';

it('should load json', async () => {
  const file = new File([`{
   "foo": "bar"
  }`], {
    type: "text/plain"
  });

  const data = await WorkbookService.loadFromFile(file);

  expect(data).toEqual({
    "foo": "bar"
  });
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
