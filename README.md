# nycctPortTemplate
Template for portfolio projects for the NYCCT Web 1 class<br>
The purpose of this repository is to contain the template for use in the web design 1 classes.<br>
The template is responsive. Currently it possess three media queries, though only the largest and smallest are currently populated. 

<h1>Main Folder</h1>
<em>Templates</em><br>
<p>This folder contains all of the HTML, CSS, Javascript and PHP files that are custom made for this project. The project also makes use of the JQuery library hosted by google.</p>
<h1>Working Test Site</h1>
<em>livetest</em><br>
This folder contains a live, testable, linked version of the template files. An online, live version can be viewed at http://samples.pixeltao.com/ (right-click open in new tab)
<h1>How to Use These Files</h1>
<h2>HTML</h2>
<p>The HTML in this templates uses semantic tags almost exclusively.<br>
  The heirarchy used on each page assumes main>section>article. The main tag hold the majority of the content on each page. When necessary content inside of the main tag is divided using section tags and the content inside of section tags is held inside of article tags.<br>
  <strong>The Media Box:</strong> On the portfolio page the images are displayed inside a component that I have named the "media box". The media box is a figure with a image and figcaption tags inside of it. The figcaption is set to be hidden until mouse over at which point it slides up from the bottom of the frame. 
</p>
<h2>CSS</h2>
<p><strong>Grid System: </strong> This template is based on a 12 column grid. The naming convention for the grids is col1 through col12. You can pick any combination of columns that add up to 12, so you could have col6 side by side with another col6 or a col5 next to a col7, or three col4s side by side. </p>
<h2>Javascript</h2>
<p></p>
<h2>PHP</h2>
<p>This folder contains the PHP file named feedback.php to make the contact form functional. To use this file with the contact form you have two choices; 
  <ol>
    <li>You can either open the feedback.php file in a code editor and edit the urls of the contact form, success page and error page.</li>
    <li> Recreate the PHP file using the wizard that created it in the first place. The contact form was created using the free feedback form wizard from www.sitewizard.com. You can find the wizard here: https://www.thesitewizard.com/wizards/feedbackform.shtml (right-click open in new tab)</li>
  </ol>
</p>
<h1>Responsive Template</h1>
This template is responsive.<br>
This means that it is built using flexible grids and media queries to fit a large range of screen sizes well.<br>
This template uses a 12 column grid system which uses percent as the main unit of measure.<br>
Using media queries, the pages will shift layouts by adjusting css to adjust the layout of the content. Instead of chasing specific phone sizes (which will inevitably change) this template's media queries shift whenever the content requires it. In this way the content drives the design, not the need to fit arbitrary phone screen sizes.<br>
The smaller media query switches the layout to a hamburger (&#9776;) menu. 
