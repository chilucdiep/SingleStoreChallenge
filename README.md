# Technical Challenge
<br />
### <div align="center"><img src="https://github.com/chilucdiep/SingleStoreChallenge/blob/main/images/ezgif.com-gif-maker%20(1).gif" width="100%"></div>

# About

To complete this challenge, I was expected to build a stand alone prototype web page in HTML/CSS/JavaScript.
The design along with the component interactions and the logical flow was provided in a design file on Figma.
All components (dropdown, button, etc.) are be built exactly according to the design specs.

# Table of Contents

1. [Technologies Used](#technologies)
2. [App Features](#features)
3. [Cool Things About the Code](#code)
4. [About the Developer](#about-me)
5. [Deployment](#deployment)


## <a name="technologies"></a>Technologies Used
- HTML
- SCSS
- JavaScript (Vanilla)
- [Font Awesome](https://fontawesome.com/)

## <a name="features"></a>App Features

- The first page the user will see is the "Book a Demo"page.This page renders a form that includes 3 fields: email, business size, and importance indicator.
- The first field (email) is a text field that validates that the user has entered a valid business email. This is checked using a JavaScript regex.
- The second field (business size) is a custom dropdown field that contains the following options: 1-10, 11-50, 51-100, 101-250, 250-1000, 1000+.
- The third field (importance indicator)is a radio-button set which contains 8 options. These options are mutually-exclusive.
- When the user clicks the submit button, the form checks for validity. If the user has made any errors while filling out the form, an appropriate error shows under the incorrect fields and the user is be required to fix the errors before continuing.
- Once the form is valid, clicking the submit button will transition the user to one of two possible pages. This decision is based on checking to see if the user selected one of the following options:
  * business size -> 1-10
  * importance indicator -> DocumentStorage, FullTextSearch, Price  
If the user selected any of the above options in either of the second or third fields, then that user is "unqualified" and is shown the unqualified lead page. If the user is not unqualified, then they are shown the qualified lead page.


## <a name="code"></a>Cool Things About the Code

- Semantic & well orgarnized HTML files.
- Clean SCSS file with table of content and well organized selectors and propreties.
- Easy to read and functional JavaScript files.

## <a name="about-me"></a>About The Developer

Hi! 👋 I'm Chi-Luc, a Frontend Developer currently working as a UX Designer in the Usage Analytics team at Coveo. I love to build accessible and easy to use UI's to solve real world problems.

## <a name="deployment"></a>Deployment

- Fork or clone this repo.
- Go to http://localhost:3000/ or run Go Live on Github  
