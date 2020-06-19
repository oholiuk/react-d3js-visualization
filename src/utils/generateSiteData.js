export const generateSiteData = (objArray, lang) => {
  let result = {};

  objArray.map(obj => {
    result[obj.title] = lang === 'en' ? obj.en : obj.fi;

    return true;
  });

  return result;
};
