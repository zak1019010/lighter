//Questions
Survey
  .StylesManager
  .applyTheme("default");

var json = {
pages: [
{
name: "page1",
elements: [
{
 type: "dropdown",
 name: "question1",
 title: "Are you interested in being a mentor or mentee?",
 isRequired: true,
 choices: [
  {
   value: "item1",
   text: "Mentor"
  },
  {
   value: "item2",
   text: "Mentee"
  },
  {
   value: "item3",
   text: "Both"
  }
 ]
},
{
 type: "dropdown",
 name: "question3",
 title: "What is your age range?",
 isRequired: true,
 choices: [
  {
   value: "item1",
   text: "16-19"
  },
  {
   value: "item2",
   text: "20-24"
  },
  {
   value: "item3",
   text: "25-30"
  },
  {
   value: "item4",
   text: "31-35"
  },
  {
   value: "item5",
   text: "36-40"
  },
  {
   value: "item6",
   text: "41-45"
  },
  {
   value: "item7",
   text: "46+"
  }
 ]
},
{
 type: "checkbox",
 name: "question2",
 title: "Which tech field are you interested in?",
 isRequired: true,
 choices: [
  {
   value: "item1",
   text: "Front End Development"
  },
  {
   value: "item2",
   text: "Back End Development"
  },
  {
   value: "item3",
   text: "Full Stack Development"
  },
  {
   value: "item4",
   text: "Project Development"
  },
  {
   value: "item5",
   text: "Product Development"
  },
  {
   value: "item6",
   text: "Data Analytics"
  },
  {
   value: "item7",
   text: "Cybersecurity"
  },
  {
   value: "item8",
   text: "Hardware Engineering"
  }
 ]
},
{
 type: "checkbox",
 name: "question4",
 title: "What are your current goals with LightHER?",
 isRequired: true,
 choices: [
  {
   value: "item1",
   text: "Finding a mentor"
  },
  {
   value: "item2",
   text: "Finding a mentee"
  },
  {
   value: "item3",
   text: "Finding a Full-Time"
  },
  {
   value: "item5",
   text: "Finding an Internship"
  },
  {
   value: "item6",
   text: "Finding a freelance gig"
  },
  {
   value: "item4",
   text: "Hire employees"
  },
  {
   value: "item7",
   text: "Hire a freelancer"
  },
  {
   value: "item8",
   text: "Explore a career change"
  },
  {
   value: "item9",
   text: "Make new friends"
  }
 ]
}
]
}
],
    };

    window.survey = new Survey.Model(json);

    survey
      .onComplete
      .add(function(result) {
        document
          .querySelector('#surveyResult')

      });

    $("#surveyElement").Survey({
      model: survey
    });
