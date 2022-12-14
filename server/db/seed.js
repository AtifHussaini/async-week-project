const { db, Student, Campus } = require ('./index')

const runSeed = async () => {

    const students = [{
        firstName: 'Atif',
        lastName: 'Hussaini',
        email: 'ahussaini314@gmail.com',
        image: '/atif.JPG',
        gpa: 3.3
    },
    {
        firstName: 'Zenat',
        lastName: 'Hussaini',
        email: 'zenat.hussaini@my.rfums.org',
        image: '/zenat.jpg',
        gpa: 1.4
    },
    {
        firstName: 'Michelle',
        lastName: 'Diaz',
        email: 'mariamichelle72@gmail.com',
        image: '/michelle.JPG',
        gpa: 3.8
    },
    {
        firstName: 'Rumzi',
        lastName: 'Khan',
        email: 'rumzi.khan@gmail.com',
        image: '/rumzi.jpg',
        gpa: 3.75
    },
    {
        firstName: 'Bushra',
        lastName: 'Hussaini',
        email: 'bhussaini89@yahoo.com',
        image: '/mom.jpg',
        gpa: 3.9
    },
    {
        firstName: 'Syed',
        lastName: 'Hussaini',
        email: 'shussaini57@yahoo.com',
        image: '/dad.jpg',
        gpa: 2.7
    }];

    const campuses = [{
        name: "Michigan State University",
        address: "East Lansing, MI",
        description: "Michigan State University is a public land-grant research university in East Lansing, Michigan. It was founded in 1855 as the Agricultural College of the State of Michigan, the first of its kind in the United States.",
        image: '/michiganState.png'
    },
    {
        name: "University of Michigan",
        address: "Ann Arbor, MI",
        description: "The University of Michigan is a public research university in Ann Arbor, Michigan. Founded in 1817 by an act of the old Michigan Territory as the Catholepistemiad or the School of Universal Knowledge, the university is the oldest in Michigan; it was established 20 years before the territory became a state.",
        image: '/michigan.png'
    },
    {
        name: "University of California, San Diego",
        address: "San Diego, CA",
        description: "The University of California, San Diego (UCSD) is a public land-grant research university in San Diego, California. Established in 1960 near the pre-existing Scripps Institution of Oceanography, UC San Diego is the southernmost of the ten campuses of the University of California, and offers over 200 undergraduate and graduate degree programs, enrolling 33,096 undergraduate and 9,872 graduate students.",
        image: '/ucsd.png'
    },
    {
        name: "University of Karachi",
        address: "Karachi, Pakistan",
        description: "The University of Karachi is a public research university located in Karachi, Sindh, Pakistan. Established in June 1951 by an act of Parliament and as a successor to the University of Sindh, the university is a Sindh Government University and designed by Mohsin Baig as its chief architect.",
        image: '/karachi.png'
    },
    {
        name: "University of Hyderabad",
        address: "Hyderabad, India",
        description: "The University of Hyderabad is a top ranking public central research university located in Hyderabad, Telangana, India. Founded in 1974, this mostly residential campus has more than 5,000 students and 400 faculty, from several disciplines.",
        image: '/hyderabad.png'
    },
    {
        name: "Rhode Island College",
        address: "Providence, Rhode Island",
        description: "Rhode Island College is a public college in Providence, Rhode Island. The college was established in 1854 as the Rhode Island State Normal School, making it the second oldest institution of higher education in Rhode Island after Brown University.",
        image: '/rhodeIsland.png'
    },
];

    try { 
        await db.sync({force: true});
        await Promise.all(students.map(student => Student.create(student)));
        await Promise.all(campuses.map(campus => Campus.create(campus)))
        console.log("Seeding was successful!");
        process.kill(0);
    } catch (error) {
        console.log("There was a problem seeding the database", error)
        process.kill(0);
    }
}

runSeed();

// Is there an ability to add campusId to each of these, versus hard-coding the foreign key in