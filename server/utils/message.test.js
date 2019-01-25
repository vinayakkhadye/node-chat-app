const expect = require('expect');

var {geneateMessage, geneateLocationMessage} = require('./mssage');

describe('geneateMessage',()=>{
    it('should generate correct message object',()=>{
        var from    = 'vinayak khadye';
        var text    = 'how are you';
        var message = geneateMessage(from,text);
        
        expect(message).toInclude({from,text});
        expect(message.receivedAt).toBeA('number');
    })
})

describe('geneateLocationMessage',()=>{
    it('should generate correct location message object',()=>{
        var from        = 'vinayak khadye';
        var latitude    = '19.067863700000004';
        var longitude   = '72.9991898';
        var url         = "https://www.google.com/maps?q=19.067863700000004,72.9991898";

        var message = geneateLocationMessage(from, latitude, longitude);

        expect(message).toInclude({from,url});
        expect(message.receivedAt).toBeA('number');
    })
})

