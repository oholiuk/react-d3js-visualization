export const generateSiteData = objArray => {
  let resultEn = {};
  let resultFi = {};
  objArray['en']['elements'].map(obj => {
    resultEn[obj.title] = obj.description;
  });
  objArray['fi']['elements'].map(obj => {
    resultFi[obj.title] = obj.description;
  });

  return { en: resultEn, fi: resultFi };
};
