
const generateUniqueiID = require('../../src/utils/generateUniqueId');




describe('Generate Unique ID', () =>{
    it('should generate an unique ID', ()=>{
        const id = generateUniqueiID();

        expect(id).toHaveLength(8);
    })
})