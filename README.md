#Thought Piece: Violence of the New

###Introduction
This is another microsite for seymourpowell. The site is an article written by Richard Seymour, but is also a template for further thought pieces. The site is built such that it can easily be altered for a new article. I've used 'Mustache' so in the future, almost all content can easily be interchanged by simply changing a json file.

###Introduction
![](/templates/images/screenshot.png)

###Technologies
* HTML
* CSS
* Javascript & JQuery
* Mustache
* Punch (static site generator)

###Installation

Clone the repsitory:
```
$ git clone git@github.com:guspowell/thought_piece.git
```
Change into the repository:
```
$ cd thought_piece
```
Install Punch:
```
$ npm install -g punch
```
Run the punch server:
```
$ punch s
```
Visit site locally: http://localhost:9009/

###Future Alterations
* The colour scheme for the whole site is defined within the @color variable located in templates/css/main.less. Change this to the desired color and all the overlays, backgrounds and text will change with it.
* Most content (apart from the article copy) can be substituted in the json file (contents/index.json).
* The main article copy needs to be inputted manually in the templates/\_index.mustache file. This will also require you to add line breaks where necessary using `<br>` and `<br><br>`.
* Reposition any quotes and images within the \_index.mustache file to ensure they are positioned correctly in relation to the aritcle copy.
<br>
