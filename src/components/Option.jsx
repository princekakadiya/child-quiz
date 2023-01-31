import React from "react";
import { Formik, Form, Field } from "formik";
import { options } from "../questions";

const Option = () => {
  const labels = [
    "Not at all like my child",
    "Little like my child",
    "Mostly like my child",
    "Exactly like my child",
  ];

  function check(arr) {
    let E = 0;
    let S = 0;
    let F = 0;
    let J = 0;
    let I = 0;
    let N = 0;
    let T = 0;
    let P = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].slice(1) === "E") {
        E += parseInt(arr[i]);
      } else if (arr[i].slice(1) === "S") {
        S += parseInt(arr[i]);
      } else if (arr[i].slice(1) === "F") {
        F += parseInt(arr[i]);
      } else if (arr[i].slice(1) === "J") {
        J += parseInt(arr[i]);
      } else if (arr[i].slice(1) === "I") {
        I += parseInt(arr[i]);
      } else if (arr[i].slice(1) === "N") {
        N += parseInt(arr[i]);
      } else if (arr[i].slice(1) === "T") {
        T += parseInt(arr[i]);
      } else {
        P += parseInt(arr[i]);
      }
    }
    console.log(
      E.toString().concat("E"),
      S.toString().concat("S"),
      F.toString().concat("F"),
      J.toString().concat("J"),
      I.toString().concat("I"),
      N.toString().concat("N"),
      T.toString().concat("T"),
      P.toString().concat("P")
    );
  }

  return (
    <div>
      <h1 className="text-center mt-5">Quiz Title</h1>
      <Formik
        initialValues={[]}
        onSubmit={(values, { setSubmitting }) => {
          // handle form submission
          console.log(values);
          check(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="container ">
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
                          <p className="m-2">{labels[index]}</p>
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
