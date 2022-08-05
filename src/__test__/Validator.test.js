import Validator from "../js/Validator";

test('Validator a-z', () => {
   const login = new Validator("Anamorphosee")
    expect(login.validateUsername()).toBe(true);
})

test('Validator _', () => {
    const login = new Validator("_Anamorphosee")
     expect(login.validateUsername()).toBe(false);
 })

 test('Validator 123', () => {
    const login = new Validator("123Anamorphosee")
     expect(login.validateUsername()).toBe(false);
 })
 