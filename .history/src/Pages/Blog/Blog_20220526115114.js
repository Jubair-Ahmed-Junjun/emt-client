import React from "react";
import { Card } from "react-bootstrap";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import blog4 from "../../assets/images/blog5.png";
const Blog = () => {
  return (
    <div className="container mt-5">
      <>
        <Card>
          <Card.Img
            style={{ height: "500px", weight: "100px" }}
            variant="top"
            src={blog1}
          />
          <Card.Body>
            <Card.Text>
              <h1 className="text-3xl">
                How will you improve the performance of a React Application?
              </h1>
              <h1 className="text-2xl">
                Improve the performance of a React Application
              </h1>
              <div>
                <ul className="list-[upper-roman]">
                  <li>Keeping component state local where necessary.</li>
                  <li>
                    Memoizing React components to prevent unnecessary
                    re-renders.
                  </li>
                  <li>Code-splitting in React using dynamic import()</li>
                  <li>Windowing or list virtualization in React.</li>
                  <li>Lazy loading images in React.</li>
                </ul>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card.Img
          style={{ height: "350px", weight: "150px" }}
          mt-3
          variant="top"
          src={blog2}
        />
        <Card.Body>
          <Card.Text>
            <h1 className="text-3xl font-bold">
              What are the different ways to manage a state in a React
              application?
            </h1>
            <h4 className="text-2xl">
              Ways to manage a state in a React application
            </h4>
            <br />
            <ul className="list-disc">
              <li> Use useReducer for Complex State</li>
              <li> Custom Hooks </li>
              <li> Global State Management</li>
              <li> Use Data Fetching Libraries(React Query)</li>
            </ul>
          </Card.Text>
        </Card.Body>

        <Card>
          <Card.Body>
            <Card.Text>
              <h1 className="text-3xl">
                {" "}
                Why you do not set the state directly in React?{" "}
              </h1>
              <br />
              Basically, When we update the state of a component all it's
              children are going to be rendered as well. or our entire component
              tree rendered. but when i say our entire component tree is
              rendered that doesn’t mean that the entire DOM is updated. when a
              component is rendered we basically get a react element, so that is
              updating our virtual dom. React will then look at the virtual DOM,
              it also has a copy of the old virtual DOM, that is why we
              shouldn’t update the state directly, so we can have two different
              object references in memory, we have the old virtual DOM as well
              as the new virtual DOM. then react will figure out what is changed
              and based on that it will update the real DOM accordingly .
              <br />
            </Card.Text>
          </Card.Body>
          <Card.Img style={{ height: "550px" }} variant="bottom" src={blog3} />
        </Card>
        <Card className="mt-3">
          <Card.Body>
            <Card.Text>
              <h1> What is a unit test? Why should write unit tests?</h1>
              <br />
              <h2>UNIT TESTING: </h2>
              UNIT TESTING is a type of software testing where individual units
              or components of a software are tested. The purpose is to validate
              that each unit of the software code performs as expected. Unit
              Testing is done during the development (coding phase) of an
              application by the developers. Unit Tests isolate a section of
              code and verify its correctness. A unit may be an individual
              function, method, procedure, module, or object.
              <br />
              <br />
              <h2>Why should write unit tests:</h2>
              Unit tests help to fix bugs early in the development cycle and
              save costs. It helps the developers to understand the testing code
              base and enables them to make changes quickly Good unit tests
              serve as project documentation Unit tests help with code re-use.
              Migrate both your code and your tests to your new project. Tweak
              the code until the tests run again.
            </Card.Text>
          </Card.Body>
          <Card.Img
            style={{ height: "400px", weight: "200px" }}
            variant="bottom"
            src={blog4}
            className="mb-1"
          />
        </Card>
      </>
    </div>
  );
};

export default Blog;
