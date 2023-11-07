import { Outlet, NavLink } from "react-router-dom";

export function HomePage() {
  return <h1>Home</h1>;
}

export function AboutPage() {
  return <h1>About</h1>;
}

export function ContactUsPage() {
  return <h1>Contact Us</h1>;
}

export function AlwaysErrorPage() {
  throw new Error();
  return <h1>This will never show</h1>;
}

export function ErrorElement() {
  return <h1>Error</h1>;
}

export function MainLayout() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        S
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/nested">Nested</NavLink>
          </li>
          <li>
            <NavLink to="/nested/page1">Nested 1</NavLink>
          </li>
          <li>
            <NavLink to="/nested/page2">Nested 2</NavLink>
          </li>
        </ul>
      </div>
      <div style={{ flex: 5 }}>
        <Outlet />
      </div>
    </div>
  );
}

export function NestedPage() {
  return <h1>Nested</h1>;
}

export function NestedPage0() {
  return <h1>Nested default page</h1>;
}

export function NestedPage1() {
  return <h1>Nested 1</h1>;
}

export function NestedPage2() {
  return <h1>Nested 2</h1>;
}
