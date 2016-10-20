var bio = {
    "name": "Lucas",
    "role": "Front-end Web Developer",
    "contacts" : {
        "mobile" : "201-747-1889",
        "email" : "lucas.zhao05@gmail.com",
        "github" : "https://github.com/lucaszhao",
        "location" : "Hoboken, NJ"
    },
    "welcomeMessage": "Hello! Welcome to my portfolio",
    "interests" : "Reading, Photography, Martial Arts, Programming",
    "skills": ["HTML5", "CSS3", "JavaScript", "BootStrap",
        "AngularJS", "Node.js", "Express.js", "MongoDB", "JQuery", "React.js",
        "AJAX", "JSON", "XML", "Backbone.js", "D3.js", "Angular Fusion Charts",
        "Jasmine","Mocha","Karma","Git", "MySQL","Oracle","SQL Server", "Agile",
        "Webstorm", "Eclipse"
    ],
    "display": function() {

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
        $("#topContacts,#footerContacts").append(formattedMobile);
        $("#topContacts,#footerContacts").append(formattedEmail);
        $("#topContacts,#footerContacts").append(formattedGithub);
        $("#topContacts,#footerContacts").append(formattedLocation);

        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);

        var formattedInterests = HTMLinterests.replace("%data%",bio.interests);
        $("#header").append(formattedInterests);

        $("#header").append(HTMLskillsStart);
        var formattedSkill = '';
        for(var m=0; m < bio.skills.length ; m++) {
            if (m !== bio.skills.length - 1) {
                formattedSkill = formattedSkill + bio.skills[m] + '    ,    ';
            } else {
                formattedSkill = formattedSkill + bio.skills[m];
            }
        }
        var skill = HTMLskills.replace("%data%",formattedSkill);
        $("#skills").append(skill);
    }
};

var education = {
    "schools" : [
        {
            "name" : "Georgia Institute of Technology",
            "location" : "Atlanta, GA",
            "degree" : "Master of Science (Distance Learning)",
            "majors" : ["Computer Science"],
            "dates" : "August,2016 - Present",
            "url" : "www.gatech.edu"
        },
        {
            "name" : "Stevens Institute of Technology",
            "location" : "Hoboken, NJ",
            "degree" : "Master of Science",
            "majors" : ["Information Systems"],
            "dates" : "August,2013 - May,2016",
            "url" : "www.stevens.edu"
        },
    ],
    "display" : function(){
        $('#education').append(HTMLschoolStart);
        for(var i = 0; i < education.schools.length; i++) {
            var formattedSchool = HTMLschoolName.replace("%data%",education.schools[i].name)
                + HTMLschoolDegree.replace("%data%",education.schools[i].degree)
                + HTMLschoolDates.replace("%data%",education.schools[i].dates)
                + HTMLschoolLocation.replace("%data%", education.schools[i].location);
            for (var j = 0; j < education.schools[i].majors.length; j++) {
                formattedSchool += HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
            }
            $('.education-entry').append(formattedSchool);
        }
    },
};

var work = {
    "jobs" : [
        {
            "client": "HSBC",
            "title": "UI Developer",
            "location" : "New York, NY",
            "dates" : "Jan 2016 -- Till Date",
            "description" : "HSBC Banking System"
        },
        {
            "client": "Deutsche Bank",
            "title": "Web Application Developer",
            "location" : "Jersey City, NJ",
            "dates" : "Oct 2014 -- Dec 2015",
            "description" : "Business Loan System"
        },
        {
            "client": "Bloomingdales.com",
            "title": "Front-end Developer",
            "location" : "New York, NY",
            "dates" : "Dec 2013 -- Sep 2014",
            "description" : "Internal Management System "
        },
        {
            "client": "Rakuten China Development Center Co., Ltd.",
            "title": "Web Developer",
            "location" : "Beijing, China",
            "dates" : "Feb 2012 -- Aug 2013",
            "description" : "Online Shopping Website Development"
        },
        {
            "client": "Bank of China",
            "title": "Front-end UI Developer",
            "location" : "Shenyang, China",
            "dates" : "May 2010 -- Jan 2012",
            "description" : "Online Banking Login"
        },
    ],
    "display": function() {
        $('#workExperience').append(HTMLworkStart);
        for(var i = 0; i < work.jobs.length; i++) {
            var formattedWork = HTMLworkClient.replace("%data%",work.jobs[i].client)
                + HTMLworkTitle.replace("%data%",work.jobs[i].title)
                + HTMLworkDates.replace("%data%",work.jobs[i].dates)
                + HTMLworkLocation.replace("%data%",work.jobs[i].location)
                + HTMLworkDescription.replace("%data%",work.jobs[i].description);
            $('.work-entry').append(formattedWork);
        }
    }
};

bio.display();

work.display();

education.display();

$('#mapDiv').append(googleMap);
