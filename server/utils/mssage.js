var geneateMessage  =(from, text) => {
    return {
        from,
        text,
        receivedAt: new Date().getTime()
    }
}

module.exports  = {geneateMessage};