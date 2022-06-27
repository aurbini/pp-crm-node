const xlsx = require('xlsx');
const path = require('path');

const exportExcel = (data, workSheetColumnNames, workSheetName, filePath) => {
  const workBook = xlsx.utils.book_new();
  const workSheetData = [workSheetColumnNames, ...data];
  const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
  xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
  xlsx.writeFile(workBook, path.resolve(filePath));
};

const exportUsersToExcel = (
  resData,
  workSheetColumnNames,
  workSheetName,
  filePath
) => {
  const data = resData.map((data) => {
    const arr = [];
    for (const key in data) {
      arr.push(data[key]);
    }
    return arr;
  });
  console.log(data);
  exportExcel(data, workSheetColumnNames, workSheetName, filePath);
};

module.exports = exportUsersToExcel;
