export const generateSiteData = objArray => {
  let resultEn = {};
  let resultFi = {};

  objArray['language']['elements'].map(obj => {
    resultEn[obj.title] = obj.en;
  });
  objArray['language']['elements'].map(obj => {
    resultFi[obj.title] = obj.fi;
  });

  return { en: resultEn, fi: resultFi };
};
