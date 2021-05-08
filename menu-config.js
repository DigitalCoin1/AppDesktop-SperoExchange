//WebToDesk v1.0.0
//Sameera Damith (CodeStack)
//damith.sameera1@gmail.com
const shell = require('electron').shell

module.exports = [
    {
        label : 'Home',
        submenu: [
            {label : 'Home', click : () => { require('./main')("home") }},
            {role : 'quit'},
        ]
    },
    {
        label: 'Assets Info',
        submenu: [
            {label : 'Assets Info', click : () => { require('./main')("assetsinfo") }},
            {label : 'Fees and Discounts', click : () => { require('./main')("feesanddiscounts") }},
        ]
    },
    {
        label: 'Listing',
        submenu: [
            {label : 'Add Coin', click : () => { shell.openExternal('https://forms.gle/ZjhMBH5uT9fmZu7cA') }},
            {label : 'Voting', click : () => { require('./main')("voting") }},
            {label : 'Listing Policy', click : () => { require('./main')("listpolicy") }},
            {label : 'Delisting Policy', click : () => { require('./main')("delistpolicy") }},
        ]
    },
    {
        label: 'Accounts and Terms',
        submenu: [
            {label : 'User Agreement Term', click : () => { require('./main')("useragreeterm") }},
            {label : 'Privacy Policy', click : () => { require('./main')("privpolicy") }},
            {label : 'Account Types', click : () => { require('./main')("acctypes") }},
            {label : 'LBC', click : () => { require('./main')("lbc") }},
        ]
    },
    {
        label: 'Social Networks',
        submenu: [
            {label : 'Telegram Group', click: () => { shell.openExternal('https://t.me/spero_exchange') }},
            {label : 'Twitter', click: () => { shell.openExternal('https://twitter.com/Spero_Official') }},
        ]
    },
    {
        label: 'API',
        submenu: [
            {label : 'Documentation', click : () => { require('./main')("apidocs") }},
        ]
    },
    {
        label: 'Rankings',
        submenu: [
            {label : 'Coinpaprika', click: () => { shell.openExternal('https://coinpaprika.com/exchanges/spero/') }},
            {label : 'CoinMarketCap', click: () => { shell.openExternal('https://coinmarketcap.com/exchanges/spero/') }},
        ]
    },
    {
        label: 'SperoCoin',
        submenu: [
            {label : 'SPERO Official Site', click: () => { shell.openExternal('https://sperocoin.org') }},
            {type: 'separator' },
            {label : 'SPERO Explorer', click: () => { shell.openExternal('https://explorer.sperocoin.org') }},
        ]
    },
    {
        label: 'About',
        submenu: [
            {label : 'About', click : () => { require('./main')("about") }},
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