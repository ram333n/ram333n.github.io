//Task 4
let gallery  = {
    images : [
        {
            name : "square.jpg",
            path : "desktop/images/square.jpg",
            date : new Date()
        },

        {
            name : "circle.png",
            path : "desktop/pictures/circle.png",
            date : new Date(2022, 5, 5)
        },

        {
            name : "triangle.bmp",
            path : "desktop/projects/triangle.bmp",
            date : new Date(2021, 7, 4)
        },        

        {
            name : "",
            path : "",
            date : new Date()
        }
    ]
}

let jsonString = JSON.stringify(gallery);
console.log(jsonString);

let names = JSON.stringify(gallery.images, ["name"]);
console.log(names);

let withoutEmpty = JSON.stringify(gallery.images.filter(v => v.name));
console.log(withoutEmpty);

let parsed = JSON.parse(jsonString, 
    function(key, value) {
        return key === "date" ? new Date(value) : value;
    }
)

console.log(parsed);