export class WorkbookService {

  static async loadFromFile(file) {
    return new Promise((res, rej) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const text = e.target.result;
          const json = JSON.parse(text);

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
