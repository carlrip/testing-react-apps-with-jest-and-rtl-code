import React from "react";
import { getPerson } from "./personData";
import "./PersonPage.css";

export function PersonPage({ id }) {
  const [loading, setLoading] = React.useState(true);
  const [person, setPerson] = React.useState(undefined);
  React.useEffect(() => {
    let cancel = false;
    async function get() {
      const data = await getPerson(id);
      if (!cancel) {
        setPerson(data);
        setLoading(false);
      }
    }
    get();
    return () => {
      cancel = true;
    };
  }, [id]);

  if (loading) {
    return (
      <>
        <p>Loading ...</p>
        <p>Loading ...</p>
      </>
    );
  }

  return (
    <div className="person-page">
      <h3>{person.firstName + " " + person.lastName}</h3>
      <a href={`mailto:${person.email}`}>Email: {person.email}</a>
      <ul>
        {person.scores.map((score) => (
          <li key={score}>{score}</li>
        ))}
      </ul>
    </div>
  );
}
