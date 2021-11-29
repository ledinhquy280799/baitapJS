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

function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, function(l) {
      return l.toUpperCase();
    });
}

function filterStudentValid(arr) {
    return arr.filter(obj => {
        if ((obj.firstName.indexOf("a") !== -1 || obj.firstName.indexOf("A") !== -1)
        && obj.firstName.length >= 3)
        {
            obj.firstName = titleCase(obj.firstName)
            obj.lastName = titleCase(obj.lastName)
            return obj
        }
    })
}

console.log(filterStudentValid(students));
