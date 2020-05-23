import React from "react";
import { NextPage } from "next";
import Link from "next/link";

const Component: NextPage = () => (
  <ul>
    <li>
      <Link href="/fizz-buzz">
        <a>fizz-buzz</a>
      </Link>
    </li>
  </ul>
);
export default Component;
