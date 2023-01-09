import React from "react";

export default function User({ user: { displayName } }) {
  return (
    <div>
      <span>{displayName}</span>
    </div>
  );
}
