var geneateMessage  =(from, text) => {
    return {
        from,
        text,
        receivedAt: new Date().getTime()
    }
}
var geneateLocationMessage  =(from, latitude, longitude) => {
    return {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        receivedAt: new Date().getTime()
    }
}

module.exports  = {geneateMessage, geneateLocationMessage};