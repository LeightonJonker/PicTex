# PicTex
> A web application that gets the key ideas from a short text (for example, a social media status update) and searches for images related to those ideas. It then allows the user to put that text onto the image and customise it with a variety of font sizes, colours and styles.

+ Last updated: 04/07/18
+ Languages: 
    + Java
    + TypeScript
    + HTML
    + CSS

#### Table of Contents
1. [Authors](#Authors)
2. [Dependencies](#Dependencies)
3. [Running the application](#Running-the-application)
    + [Maven (Backend)](#Maven-backend)
        + [Maven API](#Maven-api)
    + [Angular (Frontend)](#Angular-frontend)
4. [Future Work](#Future-work)
5. [Special Thanks](#Special-thanks)


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
