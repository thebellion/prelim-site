const Sequelize = require('sequelize');
const mysql = require("mysql2");


var employees = [
    {     
        imagePath: '/images/bellion.jpg',
        name: "Employee 1",
        jobTitle: "Job Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec pharetra enim. Ut augue massa, consectetur ultrices mollis ut, eleifend interdum nibh. Integer interdum vel nisi et aliquam. Aliquam faucibus felis nisi, quis commodo nunc dignissim id. Donec lacinia interdum arcu. Praesent semper felis ante, et hendrerit nulla porttitor eget. Donec mattis consequat mauris, ut iaculis justo malesuada ut. Curabitur laoreet lectus justo, sit amet vehicula tellus ultrices vel. ",
        twitter: "",
        facebook: "",
        linkedin: "",
    },
    {     
        imagePath: '/images/bellion.jpg',
        name: "Employee 2",
        jobTitle: "Job Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec pharetra enim. Ut augue massa, consectetur ultrices mollis ut, eleifend interdum nibh. Integer interdum vel nisi et aliquam. Aliquam faucibus felis nisi, quis commodo nunc dignissim id. Donec lacinia interdum arcu. Praesent semper felis ante, et hendrerit nulla porttitor eget.",
        twitter: "",
        facebook: "",
        linkedin: "",
    },
    {     
        imagePath: '/images/bellion.jpg',
        name: "Employee 3",
        jobTitle: "Job Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec pharetra enim. Ut augue massa, consectetur ultrices mollis ut, eleifend interdum nibh. Integer interdum vel nisi et aliquam. Aliquam faucibus felis nisi, quis commodo nunc dignissim id. Donec lacinia interdum arcu.",
        twitter: "",
        facebook: "",
        linkedin: "",
    },
    {
        imagePath: '/images/bellion.jpg',
        name: "Employee 4",
        jobTitle: "Job Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec pharetra enim. Ut augue massa, consectetur ultrices mollis ut, eleifend interdum nibh.",
        twitter: "",
        facebook: "",
        linkedin: "",
    },
    {
        imagePath: '/images/bellion.jpg',
        name: "Employee 5",
        jobTitle: "Job Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec pharetra enim. Ut augue massa, consectetur ultrices mollis ut, eleifend interdum nibh.",
        twitter: "",
        facebook: "",
        linkedin: "",
    },
    {
        imagePath: '/images/bellion.jpg',
        name: "Employee 5",
        jobTitle: "Job Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec pharetra enim. Ut augue massa, consectetur ultrices mollis ut, eleifend interdum nibh.",
        twitter: "",
        facebook: "",
        linkedin: "",
    },
];

const sequelize = new Sequelize('bellion', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306',
  
    pool: {
      max: 10,
      min: 0,
   
    },
  });
  
const Employee = sequelize.import('../models/sqlemployee');

sequelize
    .authenticate()
    .then(() => {
        
    
Employee.sync({force:true})
.then(() =>{
    return Employee.bulkCreate(employees)
});
    });