import React from "react";
import { UnorderList } from "../components/ContentBlock/styles";

export default function DatesContent() {
  return (
    <UnorderList>
      <li>
        <b>Tournament:</b> November 1st-3rd <i>(Saturday - Monday)</i>
      </li>
      <li>
        <b>General Registration open:</b> Soon!
      </li>
      <li>
        <b>Registration closed:</b> July 1st
      </li>
      {/* <li>
        <b>Women's Registration:</b> Still open
      </li> */}
      <li>
        <b>Invitations:</b> First week of July
      </li>
      <li>
        <b>2nd round of Invitations:</b> Last week July
      </li>
    </UnorderList>
  );
}
