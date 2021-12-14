# React with Typescipt

Hi!
This is the companion code repository for the Codementor React with Typescript talk.

[See the slides here!](https://docs.google.com/presentation/d/1ACTelpfBBJaythBcSZFKm-i0Ha68b9IDoqMkBRxRpn4/edit?usp=sharing)

## Setup

Run these somewhere on your computer to download this repository and install its requirements:

```shell
git clone https://github.com/sylvanasantos/react-ts-codementor
cd react-ts-codementor
npm i
```

You can then open the folder in your editor.
For example, with VS Code:

```shell
code .
```

## Running TypeScript Utils

It's generally easiest to install TypeScript globally:

```shell
npm i -g typescript
```

We recommend you then run TypeScript in "watch" mode on individual code examples by providing it the `-w` flag and a path to the example.
For example, to start TypeScript running on the first code util:

```shell
tsc -w utils/welcome
```

## Running the React Demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```shell
npm run start
```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### Type Checking the React Demo

Running `tsc` on its own will check the `src/` folder.

```shell
tsc -w
```
