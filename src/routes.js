import React from "react";
//links
export const linkPageHome = "/";
export const linkPageProfile = "/profile";
export const linkSignup = "/signup";
export const linkLogin = "/login";
//linknames
export const linkNamePageHome = "Home";
export const linkNamePageDashboard = "Dashboard";
export const linkNamePageProfile = "Profile";
export const linkNameSignup = "Sign Up";
export const linkNamesCreateAMeeting = "Create a Meeting";
export const linkNamesMeeting = "Meeting";
export const linkNamesPreMeeting = "Pre Meeting";
export const linkNameForgotPassword = "Forgot Password";
//imports
const PageProfile = React.lazy(() => import("./components/views/PageProfile"));
const routes = [
  {
    path: linkPageProfile,
    exact: true,
    name: linkNamePageProfile,
    component: PageProfile,
  },
];

export default routes;
