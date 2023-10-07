# Frontend Mentor - Multi-step form

![Design preview for the Multi-step form coding challenge](/public/assets/design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a good understanding of HTML, CSS and JavaScript.**

## The challenge

Your challenge is to build out this multi-step form and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

## My process

- Setup Routes and pages.
- Setup context and types. Create first page basic structure and setup React Form for tests.
- Create Form structure and types. Implement logic for controlls and form states.
- Separate types into types.tsx. Fill basic content and setup basic structure of steps.
- Create PersonalInfo with more validations. Create Appnavigation structure. Simulating post and checking for form.
- Refactor states into the context. Create Wrapper for all pages.
- Design Shared stylings mobile and desktop.
- Style Form on Step 1 "Personal Info". Add active and error states.
- Style Form on Step 2 "Select your plan". Add active states.
- Style Form on Step 3 "Pick Add Ons". Add active states.
- Refactor Forms to use values from useForm.
- Style Form on Step 4 "Finishing Up". Add active states.
- Style the "Thank you" page.
- Setup and change colors.
- Adding animations.
- Add active styles. Clean unnecessary files. Refactoring into smaller components. Fix typescript issues. Adding fonts.

### Built with

- [React](https://reactjs.org/) - JS library to create dynamic SPA.
- [Styled-Components](https://styled-components.com/) - For styles in the component.
- [React-Hook-Form](https://react-hook-form.com/) - Track and manage state of Forms. Validation and error handling.
- [React-Router](https://reactrouter.com/en/main/start/overview) - For routing in SPA and also many features for routes.
