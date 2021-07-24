console.log("spread demo");
const emp = {
    name: "Kavita",
    id: "12",
    deptName: "AI"
}

const dept = {
        deptid: "101",
        deptName: "Finance"
    }
    // const emp1 = {...emp,
    //     organization: "Intellect design"
    // };

const emp1 = {...dept, ...emp, organization: "Intellect design" };

console.log(emp);
console.log(emp1);