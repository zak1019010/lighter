//Questions
Survey
  .StylesManager
  .applyTheme("default");

var json = {

      pages: [{
        name: "page1",
        elements: [{
          type: "dropdown",
          name: "Mentor/Mentee",
          title: "Are you interested in being a mentor or mentee?",
          isRequired: true,
          choices: [{
            value: "item1",
            text: "Mentor"
          }, {
            value: "item2",
            text: "Mentee"
          }, {
            value: "item3",
            text: "Both"
          }]
        }, {
          type: "checkbox",
          name: "question2",
          title: "Which tech field are you interested in?",
          isRequired: true,
          choices: [
            "Front-End Development",
            "Back-End Development",
            "Data Analytics",
            "Project Management",
            "Product Management",
            "Cybersecurity",
            "Hardware Engineering"
          ],
          choicesOrder: ""
        }, ]
      }]

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