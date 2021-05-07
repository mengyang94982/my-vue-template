export function getFileType(filePath) {                 //获取文件类型(后缀名)
  let startIndex = filePath.lastIndexOf(".");
  if (startIndex != -1)
      return filePath.substring(startIndex + 1, filePath.length).toUpperCase();
  else return "";
}

export function getFileName(filePath) {              //获取文件名
  if (!filePath) {
      return "-";
  } else {
      return filePath.replace(/(.*\/)*([^.]+).*/gi, "$2");
  }
}

export function getFileSize(fileByte) {              //获取文件尺寸
  var fileSizeByte = fileByte;
  var fileSizeMsg = "";
  if (fileSizeByte < 1048576)
      fileSizeMsg = (fileSizeByte / 1024).toFixed(2) + "KB";
  else if (fileSizeByte == 1048576) fileSizeMsg = "1MB";
  else if (fileSizeByte > 1048576 && fileSizeByte < 1073741824)
      fileSizeMsg = (fileSizeByte / (1024 * 1024)).toFixed(2) + "MB";
  else if (fileSizeByte > 1048576 && fileSizeByte == 1073741824)
      fileSizeMsg = "1GB";
  else if (fileSizeByte > 1073741824 && fileSizeByte < 1099511627776)
      fileSizeMsg = (fileSizeByte / (1024 * 1024 * 1024)).toFixed(2) + "GB";
  else fileSizeMsg = ">1TB";
  return fileSizeMsg;
}