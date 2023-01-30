import React from "react";
import { Formik, Form, Field } from "formik";
import {options} from "../questions"

const Option = () => {
  const labels = [
    "Not at all like my child",
    "Little like my child",
    "Mostly like my child",
    "Exactly like my child",
  ];


  function check(arr) {
    let answerOfK = 0;
    let answerOfF = 0;
    let answerOfE = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].slice(1) === "K") {
        answerOfK += parseInt(arr[i]);
      } else if (arr[i].slice(1) === "F") {
        answerOfF += parseInt(arr[i]);
      } else {
        answerOfE += parseInt(arr[i]);
      }
    }
    console.log(
      answerOfK.toString().concat("K"),
      answerOfF.toString().concat("F"),
      answerOfE.toString().concat("E")
    );
  }


  return (
    <div>
      <h1 className="text-center">Quiz Title</h1>
      <Formik
        initialValues={[]}
        onSubmit={(values, { setSubmitting }) => {
          // handle form submission
          console.log(values);
          check(values)
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="container">
              {options.map((question) => (
                <div key={question.id}>
                  <h4>Q. {question.que}</h4>
                  <div className="row">
                    {question.option.map((answer, index) => (
                      <div className="col-md-6" key={answer.id}>
                        <div className="d-flex">
                          <Field
                            name={question.id}
                            type="radio"
                            value={answer.answer}
                            id={question.id}
                          />
                          <p className="m-1">{labels[index]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <hr />
                </div>
              ))}
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      {/* <input type="submit" defaultValue="Submit" className="text-center"/> */}
    </div>
  );
};

export default Option;
