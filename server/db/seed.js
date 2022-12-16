const { db, Student, Campus } = require ('./index')

const runSeed = async () => {

    const students = [{
        firstName: 'Atif',
        lastName: 'Hussaini',
        email: 'ahussaini314@gmail.com',
        image: '/atif.JPG',
        gpa: 3.3,
        campusId: 1
    },
    {
        firstName: 'Zenat',
        lastName: 'Hussaini',
        email: 'zenat.hussaini@my.rfums.org',
        image: '/zenat.jpg',
        gpa: 1.4,
        campusId: 2
    },
    {
        firstName: 'Michelle',
        lastName: 'Diaz',
        email: 'mariamichelle72@gmail.com',
        image: '/michelle.JPG',
        gpa: 3.8,
        campusId: 6
    },
    {
        firstName: 'Rumzi',
        lastName: 'Khan',
        email: 'rumzi.khan@gmail.com',
        image: '/rumzi.jpg',
        gpa: 3.75,
        campusId: 3
    },
    {
        firstName: 'Bushra',
        lastName: 'Hussaini',
        email: 'bhussaini89@yahoo.com',
        image: '/mom.jpg',
        gpa: 3.9,
        campusId: 4
    },
    {
        firstName: 'Syed',
        lastName: 'Hussaini',
        email: 'shussaini57@yahoo.com',
        image: '/dad.jpg',
        gpa: 2.7,
        campusId: 5
    },
    {
      firstName: 'Jewel',
      lastName: 'Gray',
      email: 'email0@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 0,
      campusId: 3
    },
    {
      firstName: 'Imogene',
      lastName: 'Smith',
      email: 'email1@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 15
    },
    {
      firstName: 'Barrett',
      lastName: 'Mckenzie',
      email: 'email2@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 12
    },
    {
      firstName: 'Isreal',
      lastName: 'Boyd',
      email: 'email3@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 7
    },
    {
      firstName: 'Nancy',
      lastName: 'Arnold',
      email: 'email4@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 2,
      campusId: 1
    },
    {
      firstName: 'Allie',
      lastName: 'Larson',
      email: 'email5@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 1,
      campusId: 5
    },
    {
      firstName: 'Lavern',
      lastName: 'Griffin',
      email: 'email6@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 4,
      campusId: 1
    },
    {
      firstName: 'Monte',
      lastName: 'Callahan',
      email: 'email7@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 2,
      campusId: 1
    },
    {
      firstName: 'Israel',
      lastName: 'Mitchell',
      email: 'email8@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 1,
      campusId: 15
    },
    {
      firstName: 'Gene',
      lastName: 'Vaughn',
      email: 'email9@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 1,
      campusId: 13
    },
    {
      firstName: 'Alan',
      lastName: 'Holder',
      email: 'email10@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 2,
      campusId: 19
    },
    {
      firstName: 'Marcos',
      lastName: 'Ryan',
      email: 'email11@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 1
    },
    {
      firstName: 'June',
      lastName: 'Mooney',
      email: 'email12@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 14
    },
    {
      firstName: 'Agustin',
      lastName: 'Pugh',
      email: 'email13@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 2,
      campusId: 5
    },
    {
      firstName: 'Kellie',
      lastName: 'Burke',
      email: 'email14@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 0,
      campusId: 14
    },
    {
      firstName: 'Leo',
      lastName: 'Vang',
      email: 'email15@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 1,
      campusId: 14
    },
    {
      firstName: 'Bernice',
      lastName: 'Burns',
      email: 'email16@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 4,
      campusId: 19
    },
    {
      firstName: 'Marcus',
      lastName: 'Osborne',
      email: 'email17@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 17
    },
    {
      firstName: 'Jeffry',
      lastName: 'Roth',
      email: 'email18@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 2,
      campusId: 14
    },
    {
      firstName: 'Malik',
      lastName: 'James',
      email: 'email19@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 0,
      campusId: 7
    },
    {
      firstName: 'Iva',
      lastName: 'Butler',
      email: 'email20@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 4,
      campusId: 2
    },
    {
      firstName: 'Hosea',
      lastName: 'Adams',
      email: 'email21@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 4,
      campusId: 14
    },
    {
      firstName: 'Celina',
      lastName: 'Lamb',
      email: 'email22@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 4,
      campusId: 9
    },
    {
      firstName: 'Sheri',
      lastName: 'Vega',
      email: 'email23@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 4,
      campusId: 11
    },
    {
      firstName: 'Carol',
      lastName: 'Rowland',
      email: 'email24@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 4,
      campusId: 19
    },
    {
      firstName: 'Mavis',
      lastName: 'Mcneil',
      email: 'email25@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 2,
      campusId: 9
    },
    {
      firstName: 'Courtney',
      lastName: 'Waters',
      email: 'email26@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 4,
      campusId: 19
    },
    {
      firstName: 'Ruby',
      lastName: 'Knox',
      email: 'email27@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 0,
      campusId: 8
    },
    {
      firstName: 'Dewayne',
      lastName: 'Cunningham',
      email: 'email28@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 1,
      campusId: 19
    },
    {
      firstName: 'Everette',
      lastName: 'Blackwell',
      email: 'email29@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 13
    },
    {
      firstName: 'Penny',
      lastName: 'Olsen',
      email: 'email30@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 1,
      campusId: 5
    },
    {
      firstName: 'Tracey',
      lastName: 'Barton',
      email: 'email31@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 7
    },
    {
      firstName: 'Jose',
      lastName: 'Carrillo',
      email: 'email32@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 1
    },
    {
      firstName: 'Russell',
      lastName: 'Mosley',
      email: 'email33@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 2,
      campusId: 11
    },
    {
      firstName: 'Mauricio',
      lastName: 'Henson',
      email: 'email34@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 4,
      campusId: 20
    },
    {
      firstName: 'Otis',
      lastName: 'Curtis',
      email: 'email35@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 0,
      campusId: 20
    },
    {
      firstName: 'Pamela',
      lastName: 'Ramsey',
      email: 'email36@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 4,
      campusId: 19
    },
    {
      firstName: 'Carlo',
      lastName: 'Moore',
      email: 'email37@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 2,
      campusId: 5
    },
    {
      firstName: 'Erick',
      lastName: 'Bird',
      email: 'email38@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 0,
      campusId: 9
    },
    {
      firstName: 'Jeromy',
      lastName: 'Rasmussen',
      email: 'email39@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 0,
      campusId: 13
    },
    {
      firstName: 'Jason',
      lastName: 'Guerrero',
      email: 'email40@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 8
    },
    {
      firstName: 'Graham',
      lastName: 'Gates',
      email: 'email41@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 4,
      campusId: 6
    },
    {
      firstName: 'Tanner',
      lastName: 'Robinson',
      email: 'email42@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 0,
      campusId: 20
    },
    {
      firstName: 'May',
      lastName: 'Woodward',
      email: 'email43@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 2,
      campusId: 11
    },
    {
      firstName: 'Mickey',
      lastName: 'Craig',
      email: 'email44@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 16
    },
    {
      firstName: 'Shawn',
      lastName: 'Myers',
      email: 'email45@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 4,
      campusId: 20
    },
    {
      firstName: 'Dan',
      lastName: 'Becker',
      email: 'email46@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 4,
      campusId: 2
    },
    {
      firstName: 'Vito',
      lastName: 'Kerr',
      email: 'email47@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 1,
      campusId: 17
    },
    {
      firstName: 'Humberto',
      lastName: 'Rivers',
      email: 'email48@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 2,
      campusId: 20
    },
    {
      firstName: 'Major',
      lastName: 'Mcintosh',
      email: 'email49@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 9
    },
    {
      firstName: 'Anthony',
      lastName: 'Spears',
      email: 'email50@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 13
    },
    {
      firstName: 'Ivan',
      lastName: 'Wolfe',
      email: 'email51@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 6
    },
    {
      firstName: 'Glenda',
      lastName: 'Henson',
      email: 'email52@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 20
    },
    {
      firstName: 'Michelle',
      lastName: 'Hull',
      email: 'email53@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 0,
      campusId: 1
    },
    {
      firstName: 'Rowena',
      lastName: 'Holder',
      email: 'email54@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 1,
      campusId: 8
    },
    {
      firstName: 'Caitlin',
      lastName: 'Stephens',
      email: 'email55@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 12
    },
    {
      firstName: 'Ines',
      lastName: 'Nolan',
      email: 'email56@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 4
    },
    {
      firstName: 'Russel',
      lastName: 'Donovan',
      email: 'email57@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 2
    },
    {
      firstName: 'Christie',
      lastName: 'Woodard',
      email: 'email58@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 0,
      campusId: 8
    },
    {
      firstName: 'Walter',
      lastName: 'Pena',
      email: 'email59@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 2,
      campusId: 4
    },
    {
      firstName: 'Martin',
      lastName: 'Santana',
      email: 'email60@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 4,
      campusId: 11
    },
    {
      firstName: 'Derrick',
      lastName: 'Villanueva',
      email: 'email61@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 2,
      campusId: 18
    },
    {
      firstName: 'Mandy',
      lastName: 'Grimes',
      email: 'email62@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 2,
      campusId: 11
    },
    {
      firstName: 'Carmine',
      lastName: 'Tucker',
      email: 'email63@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 4,
      campusId: 1
    },
    {
      firstName: 'Samuel',
      lastName: 'Crawford',
      email: 'email64@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 4
    },
    {
      firstName: 'Michale',
      lastName: 'Cole',
      email: 'email65@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 4,
      campusId: 8
    },
    {
      firstName: 'Davis',
      lastName: 'Riley',
      email: 'email66@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 4,
      campusId: 16
    },
    {
      firstName: 'Horace',
      lastName: 'Calderon',
      email: 'email67@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 1,
      campusId: 1
    },
    {
      firstName: 'Foster',
      lastName: 'Guerra',
      email: 'email68@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 1,
      campusId: 9
    },
    {
      firstName: 'Sofia',
      lastName: 'Mcguire',
      email: 'email69@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 0,
      campusId: 1
    },
    {
      firstName: 'Rafael',
      lastName: 'Wade',
      email: 'email70@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 10
    },
    {
      firstName: 'Ora',
      lastName: 'Schmidt',
      email: 'email71@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 16
    },
    {
      firstName: 'Boyd',
      lastName: 'Calhoun',
      email: 'email72@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 2,
      campusId: 18
    },
    {
      firstName: 'Casandra',
      lastName: 'Gillespie',
      email: 'email73@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 0,
      campusId: 7
    },
    {
      firstName: 'Dexter',
      lastName: 'Bruce',
      email: 'email74@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 10
    },
    {
      firstName: 'Mildred',
      lastName: 'Garcia',
      email: 'email75@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 15
    },
    {
      firstName: 'Guy',
      lastName: 'Parks',
      email: 'email76@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 2,
      campusId: 20
    },
    {
      firstName: 'Marcel',
      lastName: 'Matthews',
      email: 'email77@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 1,
      campusId: 8
    },
    {
      firstName: 'Geneva',
      lastName: 'Kent',
      email: 'email78@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 2,
      campusId: 2
    },
    {
      firstName: 'Sammy',
      lastName: 'Barry',
      email: 'email79@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 4,
      campusId: 4
    },
    {
      firstName: 'Laurie',
      lastName: 'Norman',
      email: 'email80@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 1
    },
    {
      firstName: 'Edwin',
      lastName: 'Little',
      email: 'email81@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 1,
      campusId: 14
    },
    {
      firstName: 'Chet',
      lastName: 'Melton',
      email: 'email82@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 18
    },
    {
      firstName: 'Quinton',
      lastName: 'Mcknight',
      email: 'email83@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 9
    },
    {
      firstName: 'Kim',
      lastName: 'Fernandez',
      email: 'email84@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 1,
      campusId: 10
    },
    {
      firstName: 'Amado',
      lastName: 'Gamble',
      email: 'email85@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 5
    },
    {
      firstName: 'Jasmine',
      lastName: 'Andrews',
      email: 'email86@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 0,
      campusId: 4
    },
    {
      firstName: 'Cristopher',
      lastName: 'Kaiser',
      email: 'email87@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 19
    },
    {
      firstName: 'Elton',
      lastName: 'Schaefer',
      email: 'email88@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 0,
      campusId: 3
    },
    {
      firstName: 'Will',
      lastName: 'Crosby',
      email: 'email89@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 2,
      campusId: 5
    },
    {
      firstName: 'Tessa',
      lastName: 'Jacobs',
      email: 'email90@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 12
    },
    {
      firstName: 'Margret',
      lastName: 'Friedman',
      email: 'email91@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 4,
      campusId: 3
    },
    {
      firstName: 'Linda',
      lastName: 'Valenzuela',
      email: 'email92@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 1,
      campusId: 16
    },
    {
      firstName: 'Britt',
      lastName: 'Branch',
      email: 'email93@example.com',
      image: 'https://thispersondoesnotexist.com/image',
      gpa: 3,
      campusId: 8
    }
];

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
    {
        name: 'The Pearl McCullough Primary School',
        address: 'Broomfield, CO'
      },
    {   name: 'Patriot Technical College', 
        address: 'Malden, MA' },
    { name: 'Stalin Girls School', address: 'Elizabeth, NJ' },
    { name: 'Valley County Nursery for Art', address: 'Logan, UT' },
    {
    name: "St Luther Dillon's Separatist School",
    address: 'Surprise, AZ'
    },
    { name: 'Andreas Islamic School', address: 'Daly City, CA' },
    { name: 'Truthful High', address: 'Muncie, IN' },
    { name: 'Valley Forest Elementary', address: 'Ankeny, IA' },
    { name: 'Otley Learning Institute', address: 'Deerfield Beach, FL' },
    { name: 'The Bernice Franklin High', address: 'Rock Hill, SC' },
    { name: 'Kent CE School', address: 'Greenfield, WI' },
    {
    name: 'The Nell Pearson Science Academy for Intelligent Talents',
    address: 'Joplin, MO'
    },
    { name: 'The Leola Craig Academy School', address: 'Harrisburg, PA' },
    { name: 'Andreas Shores Separatist School', address: 'Jackson, TN' }
];

    try { 
        await db.sync({force: true});
        await Promise.all(campuses.map(campus => Campus.create(campus)))
        await Promise.all(students.map(student => Student.create(student)));
        console.log("Seeding was successful!");
        process.kill(0);
    } catch (error) {
        console.log("There was a problem seeding the database", error)
        process.kill(0);
    }
}

runSeed();