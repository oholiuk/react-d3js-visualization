import Papa from 'papaparse';

async function fetchCsv(csvFilePath) {
  const response = await fetch(csvFilePath);
  const reader = response.body.getReader();
  const result = await reader.read();
  const decoder = new TextDecoder('utf-8');
  const csv = await decoder.decode(result.value);

  return csv;
  // return fetch(csvFilePath).then(response => {
  //   let reader = response.body.getReader();

  //   let decoder = new TextDecoder('utf-8');

  //   return reader.read().then(result => {
  //     return decoder.decode(result.value);
  //   });
  // });
}

export const getCsvData = async csvFilePath => {
  let csvData = await fetchCsv(csvFilePath);

  Papa.parse(csvData, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    complete: result => {
      console.log(result.data);
      return result.data;
    }
  });
};
