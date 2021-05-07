//WebToDesk v1.0.0
//Sameera Damith (CodeStack)
//damith.sameera1@gmail.com
const shell = require('electron').shell

module.exports = [
    {
        label: 'Spero Exchange',
        submenu: [
            {label : 'Home', click : () => { require('./main')("home") }},
            {type: 'separator' },
            {label : 'Open SPERO site', click: () => { shell.openExternal('https://sperocoin.org') }},
            {type: 'separator' },
            {label : 'About', click : () => { require('./main')("about") }},
            {type: 'separator' },
            {role : 'quit'},
        ]
    },
    {
        label: 'Edit',
        submenu: [
            {role : 'undo'},
            {role : 'redo'},
            {role : 'cut'},
            {role : 'copy'},
            {role : 'paste'},
            {role : 'togglefullscreen'},
        ]
    },
    {
        label: 'View',
        submenu: [
            {role : 'reload'},
            {role : 'zoomIn'},
            {role : 'zoomOut'},
        ]
    },
]