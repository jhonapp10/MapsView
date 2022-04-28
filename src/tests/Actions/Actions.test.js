const actions = require("../../actions/actions")


describe('Prueba Actions', () =>{


    test('actions default correctas', () =>{

        expect(actions).toEqual({
            LOADMARKET : 'LOADMARKET',
            SETLATMARKET : 'SETLATMARKET',
            SETLNGMARKET : 'SETLNGMARKET',
            SETZOOM: 'SETZOOM',
            SETPLACE: 'SETPLACE',
            SETPLACEID: 'SETPLACEID',


        })



    })
})