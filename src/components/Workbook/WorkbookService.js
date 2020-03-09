export class WorkbookService {
  static validateWorkbook(data) {
    if(!data.phrases) {
      throw new Error("Workbook does not have any valid phrases");
    }
  }

  static async loadFromFile(file) {
    return new Promise((res, rej) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const text = e.target.result;
          const json = JSON.parse(text);

          WorkbookService.validateWorkbook(json);

          return res(json);
        } catch(e) {
          return rej(e);
        }
      };

      reader.onerror = rej;

      reader.readAsText(file);
    });
  }
}
