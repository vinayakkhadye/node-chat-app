const expect = require('expect');

var {geneateMessage} = require('./mssage');

describe('geneateMessage',()=>{
    it('should generate correct message object',()=>{
        var from    = 'vinayak khadye';
        var text    = 'how are you';
        var message = geneateMessage(from,text);

        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(message.receivedAt).toBeA('number');
    })
})

