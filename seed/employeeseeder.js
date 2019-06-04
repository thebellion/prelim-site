
var Employee = require('../models/employee')

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bellion', {useNewUrlParser: true})

var employees = [
    new Employee({     
        imagePath: '/images/bellion.jpg',
        name: "Employee 1",
        jobTitle: "Job Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec pharetra enim. Ut augue massa, consectetur ultrices mollis ut, eleifend interdum nibh. Integer interdum vel nisi et aliquam. Aliquam faucibus felis nisi, quis commodo nunc dignissim id. Donec lacinia interdum arcu. Praesent semper felis ante, et hendrerit nulla porttitor eget. Donec mattis consequat mauris, ut iaculis justo malesuada ut. Curabitur laoreet lectus justo, sit amet vehicula tellus ultrices vel. Aenean facilisis enim sit amet mollis luctus. Ut non luctus mi. Nunc et sapien rutrum, efficitur ex nec, ornare nunc. Aliquam vel imperdiet quam, et viverra dolor. Sed sollicitudin nunc massa, et consequat orci accumsan non. Quisque viverra ex et convallis euismod.",
        twitter: "",
        facebook: "",
        linkedin: "",
    }),
    new Employee({     
        imagePath: '/images/bellion.jpg',
        name: "Employee 2",
        jobTitle: "Job Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec pharetra enim. Ut augue massa, consectetur ultrices mollis ut, eleifend interdum nibh. Integer interdum vel nisi et aliquam. Aliquam faucibus felis nisi, quis commodo nunc dignissim id. Donec lacinia interdum arcu. Praesent semper felis ante, et hendrerit nulla porttitor eget. Donec mattis consequat mauris, ut iaculis justo malesuada ut. Curabitur laoreet lectus justo, sit amet vehicula tellus ultrices vel. Aenean facilisis enim sit amet mollis luctus. Ut non luctus mi. Nunc et sapien rutrum, efficitur ex nec, ornare nunc. Aliquam vel imperdiet quam, et viverra dolor. Sed sollicitudin nunc massa, et consequat orci accumsan non. Quisque viverra ex et convallis euismod. ",
        twitter: "",
        facebook: "",
        linkedin: "",
    }),
    new Employee({     
        imagePath: '/images/bellion.jpg',
        name: "Employee 3",
        jobTitle: "Job Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec pharetra enim. Ut augue massa, consectetur ultrices mollis ut, eleifend interdum nibh. Integer interdum vel nisi et aliquam. Aliquam faucibus felis nisi, quis commodo nunc dignissim id. Donec lacinia interdum arcu. Praesent semper felis ante, et hendrerit nulla porttitor eget. Donec mattis consequat mauris, ut iaculis justo malesuada ut. Curabitur laoreet lectus justo, sit amet vehicula tellus ultrices vel. Aenean facilisis enim sit amet mollis luctus. Ut non luctus mi. Nunc et sapien rutrum, efficitur ex nec, ornare nunc. Aliquam vel imperdiet quam, et viverra dolor. Sed sollicitudin nunc massa, et consequat orci accumsan non. Quisque viverra ex et convallis euismod. ",
        twitter: "",
        facebook: "",
        linkedin: "",
    }),
    new Employee({
        imagePath: '/images/bellion.jpg',
        name: "Employee 4",
        jobTitle: "Job Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec pharetra enim. Ut augue massa, consectetur ultrices mollis ut, eleifend interdum nibh. Integer interdum vel nisi et aliquam. Aliquam faucibus felis nisi, quis commodo nunc dignissim id. Donec lacinia interdum arcu. Praesent semper felis ante, et hendrerit nulla porttitor eget. Donec mattis consequat mauris, ut iaculis justo malesuada ut. Curabitur laoreet lectus justo, sit amet vehicula tellus ultrices vel. Aenean facilisis enim sit amet mollis luctus. Ut non luctus mi. Nunc et sapien rutrum, efficitur ex nec, ornare nunc. Aliquam vel imperdiet quam, et viverra dolor. Sed sollicitudin nunc massa, et consequat orci accumsan non. Quisque viverra ex et convallis euismod. ",
        twitter: "",
        facebook: "",
        linkedin: "",
    }),
    new Employee({
        imagePath: '/images/bellion.jpg',
        name: "Employee 5",
        jobTitle: "Job Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec pharetra enim. Ut augue massa, consectetur ultrices mollis ut, eleifend interdum nibh. Integer interdum vel nisi et aliquam. Aliquam faucibus felis nisi, quis commodo nunc dignissim id. Donec lacinia interdum arcu. Praesent semper felis ante, et hendrerit nulla porttitor eget. Donec mattis consequat mauris, ut iaculis justo malesuada ut. Curabitur laoreet lectus justo, sit amet vehicula tellus ultrices vel. Aenean facilisis enim sit amet mollis luctus. Ut non luctus mi. Nunc et sapien rutrum, efficitur ex nec, ornare nunc. Aliquam vel imperdiet quam, et viverra dolor. Sed sollicitudin nunc massa, et consequat orci accumsan non. Quisque viverra ex et convallis euismod. ",
        twitter: "",
        facebook: "",
        linkedin: "",
    }),

];

var done = 0;
for (var i=0; i<employees.length; i++) {
    employees[i].save(function (err, result){
        if(err) {
            console.log(err)
            return
        }
        done++; //increment first since products.legnth doesnt start at 0
        if (done === employees.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
