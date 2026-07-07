const Hoc = (Wrapper) => {
  let data = "Hiii";

  return () => {
    return <Wrapper data={data} />;
  };
};

export default Hoc;

/* 
! What is HOC?

In React, a Higher-Order Component (HOC) is a function that takes a component as an argument and returns a new, upgraded component

! Why Do We Use It?

We use HOCs to share common logic across multiple parts of an app so we don't have to type the exact same code repeatedly

Common real-world uses include:

Authentication: Checking if a user is logged in before showing a page.

Theming: Passing down dark mode or light mode styles automatically.

Loaders: Showing a spinning loading wheel while data is fetching from a server.
*/
