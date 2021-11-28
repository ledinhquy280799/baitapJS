students = [
    {
        id: "T3HXX1",
        firstName: "Ngan",
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

function sortByName(arr)
{
    return arr.sort(function(a, b){
        if(a.firstname < b.firstname) { return -1; }
        if(a.firstname > b.firstname) { return 1; }
        return 0;
    })
}

console.log(sortByName(students));