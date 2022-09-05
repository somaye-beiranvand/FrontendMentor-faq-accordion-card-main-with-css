# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Links

- Solution URL: [solution URL on frontendmentor](https://www.frontendmentor.io/solutions/faq-accordion-card-solutionpure-css-rx2p5y5OF5)
- Live Site URL: [live site URL](https://somaye-beiranvand.github.io/faq-accordion-card-main-with-css/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [bootstrap](https://getbootstrap.com/) - For styles

### What I learned

```html
<!-- component::faq-item starts -->
<details class="sm-faq-item">
  <summary class="sm-faq-head">How many team members can I invite?</summary>
  <p class="sm-faq-body pt-3">
    You can invite up to 2 additional users on the Free plan. There is no limit
    on team members for the Premium plan.
  </p>
</details>
<!-- component::faq-item ends -->
```

```css
.sm-faq-item[open] .sm-faq-head::after {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
```

```javascript
$("details").on("click", function () {
  $(this).parent().siblings().children().removeAttr("open");
});
```

### Useful resources

- [resource 1](https://css-tricks.com/quick-reminder-that-details-summary-is-the-easiest-way-ever-to-make-an-accordion/) - This helped me learn how to use summary and details tags to make accordion.

## Author

- Frontend Mentor - [@somaye-beiranvand](https://www.frontendmentor.io/profile/somaye-beiranvand)
