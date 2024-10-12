const fs = require("fs");
const path = require("path"); // For safer directory handling

function saveData(object, fileName="data.json") {
    const directoryPath = path.join(__dirname, 'data');
    const filePath = path.join(directoryPath, fileName);
if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
    }
const jsonData = JSON.stringify(object, null, 2);
    fs.writeFileSync(filePath, jsonData, 'utf-8');
}
function loadData(fileName) {
    const filePath = path.join(__dirname, 'data', fileName);
    if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${fileName}`);
    }
const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
}
module.exports = { saveData, loadData};