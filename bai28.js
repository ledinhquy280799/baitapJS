students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]

function findIndividualStudent(arr)
{
    var filterObj = arr.filter(function(e) {
        return e.lastName.indexOf("Do") !== -1;
    })
    return filterObj;
}

console.log(findIndividualStudent(students));