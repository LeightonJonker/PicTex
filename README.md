# PicTex
> A web application that gets the key ideas from a short text (for example, a social media status update) and searches for images related to those ideas. It then allows the user to put that text onto the image and customise it with a variety of font sizes, colours and styles.

+ Last updated: 04/07/18
+ Languages: 
    + Java
    + TypeScript
    + HTML
    + CSS

#### Table of Contents
- [PicTex](#pictex)
            - [Table of Contents](#table-of-contents)
    - [Authors](#authors)
    - [Dependencies](#dependencies)
    - [Running the application](#running-the-application)
        - [Maven (Backend)](#maven-backend)
            - [*Maven API*](#maven-api)
        - [Angular (Frontend)](#angular-frontend)
    - [Issues](#issues)
        - [Frontend](#frontend)
        - [Backend](#backend)
    - [Future Work](#future-work)
    - [Special Thanks](#special-thanks)


## Authors
+ Leighton Jonker: <ljon139@aucklanduni.ac.nz>
+ William Chao: <wcha609@aucklanduni.ac.nz>

## Dependencies
+ [Maven](https://maven.apache.org/download.cgi)
+ [Java 1.8+](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
+ [NodeJS 8.11.3](https://nodejs.org/en/)
+ Angular CLI 6.0.8
    + Install Angular via NodeJS using the command:
    ```
    npm install -g @angular/cli
    npm install @angular-devkit/build-angular
    ```

## Running the application

### Maven (Backend)
Open the terminal and navigate to the root of the backend folder `"/BackEnd/"` then run the commands
```
mvn clean install
mvn spring-boot:run
```
You only need to do `mvn clean install` once to download and install the dependencies. The API is hosted at `localhost:8080`.

#### *Maven API*
+ `/api/processText?text` - returns keywords of the text in plain text.

### Angular (Frontend)
Open the terminal and navigate to the root of the PicTexApp folder `"/PicTexApp/"` then run the command `npm start`. The website is hosted on `localhost:4200`.

## Issues
### Frontend
1. Color Picker (Highest priority)
2. Tags need cross button - Done
3. Text appearing on the photo (with default select)
4. +- on font size - Done
5. don't need to list all fonts, use dropdown - Done
6. placement of all font functionality together
7. picture selection
8. main photo larger  - now using medium (500 on longest side)
9. weighting of keywords represented in selection of photos
10. hide top line
11. automatically reload - remove reload
12. save - change to move to/save as?
    1.  print out as stickers?
13. option where user adds own photo

### Backend
1. Ambiguity and refinement
2. Including synonyms
3. Overarching categories/hierarchy e.g. dog rather than golden retriever
4. look @ pinterest searching on tags
5. n-grams or quote marks, or automatically choose subset
6. weighting weighting algorithm based on keywords

+ novelty is high res photos

## Future Work
+ Automatically select the "best" font colour for given image
+ Automatically determine the "best" place to put the text for given image
+ Use more sources for images
+ Create a social platform to share these images
+ Language processor that can "correct" or interpret gramatically incorrect texts
+ Incorporate the use of Machine Learning to learn about the way a user writes to get better results
+ Rank keywords

## Special Thanks
+ Gill Dobbie (Primary Supervisor)
+ Danielle Lottridge (Secondary Supervisor)
+ Stanford NLP
+ Flickr
