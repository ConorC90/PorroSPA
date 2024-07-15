import React from "react";
import { UnorderList } from "../components/ContentBlock/styles";

export default function DatesContent() {
  return (
    <UnorderList>
      <li>
        <b>Tournament:</b> November 1st-3rd <i>(Friday - Sunday)</i>
      </li>
      <li>
        <b>Registration open:</b> May 1st
      </li>
      <li>
        <b>Men's Registration closed:</b> July 1st
      </li>
      <li>
        <b>Woman's Registration:</b> Still open
      </li>
      <li>
        <b>Invitations:</b> First week of July
      </li>
      <li>
        <b>2nd round of Invitations:</b> Last week July
      </li>
      <li>
        <b>Payment deadline:</b> July 31st
      </li>
    </UnorderList>
  );
}
