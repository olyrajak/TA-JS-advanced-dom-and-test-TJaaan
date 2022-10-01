const {
    getFullName,

} = require("./index");

//Full Name
test("'Arya' and 'Stark' to equal Arya Stark", () => {
    expect(getFullName("Arya", "Stark")).toBe("Arya Stark");
});