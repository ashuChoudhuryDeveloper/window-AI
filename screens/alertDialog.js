const prompt = require("electron-prompt");

function input(mainWindow, title, label, value) {
    return prompt({
        title: title,
        label: label,
        
        value: value,
        inputAttrs: {
            type: 'text',
        },
        type: 'input',
        resizable: true,

    }, mainWindow);
}

module.exports = {input};
