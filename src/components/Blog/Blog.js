import Accordion from "react-bootstrap/Accordion";

function BasicExample() {
  return (
    <div className="container mx-auto my-5">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How does react works?</Accordion.Header>
          <Accordion.Body>
            React uses a declarative paradigm that makes it easier to reason
            about your application and aims to be both efficient and flexible.
            It designs simple views for each state in your application, and
            React will efficiently update and render just the right component
            when your data changes
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Difference between props and state?
          </Accordion.Header>
          <Accordion.Body>
            Simply put, State is the local state of the component which cannot
            be accessed and modified outside of the component. It's equivalent
            to local variables in a function. Props, on the other hand, make
            components reusable by giving components the ability to receive data
            from their parent component in the form of props.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Usage of useEffect?</Accordion.Header>
          <Accordion.Body>
            By using this Hook, you tell React that your
            component needs to do something after render. React will remember
            the function you passed (we'll refer to it as our “effect”), and
            call it later after performing the DOM updates.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default BasicExample;
