# Axon-CSS
This is the repository for the core Axon CSS configuration using Tailwind CSS. Include in a project and make the preset in Tailwind as defined in the README.

## Usage
The project should be fairly easy to use. Right now it only works with tailwind installed. Hopefully I will include an installer soon. 

Make sure you have Tailwind installed.

To use, first do an NPM install:
```
npm install https://github.com/Axon-Collective/Axon-CSS.git
```

Then add the following presets to your tailwind.config.js:
```
module.exports = {
  ...
  presets: [require('@axon-collective/axon-css/config')],
  ...
}
```
Finally, in your tailwind.css file (or wherever you include @tailwind) add the following before including Tailwind:
```
@import '~@axon-collective/axon-css/axon-main.css';
```

And if you would like to customize colors, use rgb values to set custome properties at the end of that Tailwind.css file as following:
```
:root{
    --primary:240, 90, 26;
}
```