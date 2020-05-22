import React from "react";
import { NextPage } from "next";
import Link from "next/link";

const Component: NextPage = () => (
  <ul>
    <li>
      <Link href="counter/easy">
        <a>easy</a>
      </Link>
    </li>
    <li>
      <Link href="counter/simple">
        <a>simple</a>
      </Link>
    </li>
  </ul>
);

export default Component;
