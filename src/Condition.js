import React from 'react';

//conditional rendering

function AdminPanel() {
  return (
    <div>
      <h3>Hello User</h3>
      <p>You are welcome</p>
    </div>
  );
}

function LoginForm() {
  return (
    <div>
      <h3>Hello</h3>
      <p>Please log in</p>
    </div>
  );
}

export default function Condition() {
  let isLoggedIn = false;
  let page = isLoggedIn ? <AdminPanel /> : <LoginForm />;

  return <div>{page}</div>;
}
