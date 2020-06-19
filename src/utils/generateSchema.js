export const generateSchema = sheetsData => {
  let result = [];
  for (let [sheetName, sheetData] of Object.entries(sheetsData)) {
    result.push({
      sheet_name: sheetName,
      columns: sheetData.columnNames,
      rows: sheetData.elements.map(row => Object.values(row))
    });
  }

  return result;
};
