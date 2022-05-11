# change project from css to scss
1. install sass globally
### > npm install -g sass
2. rename styles.css to styles.scss
3. change all component imports and rename css files
4. in angular.json file in styles : change src/styles.css to src/styles.scss
5. in angular.json change above under test also
6. in angular.json change
      "schematics": {
        "@schematics/angular:application": {
          "strict": true
        }
        
      },

      to this

            "schematics": {
        "@schematics/angular:application": {
          "strict": true
        },
        "@schematics/angular:component": {
          "style": "scss"
        }
        
      },

## Global Vs Encapsulated styles in angular

@Component({
    encapsulation: ViewEncapsulation.none
})

will turn off custom class generators for each angular component

## 
::ng-deep .mat-button-wrapper{
    background-color: green;
}

will apply background color style to all button elements as ::ng-deep has been used
  "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",


  # Color system in angular

  1. Primary: Default,darker,lighter
  2. Accent: Default,darker,lighter
  3. Warn: Default,darker,lighter

  ##Pallete from 50,100,200 to 900 and A100,A200,A400,A700
  Default is 500
  Lighter is 200
  Darker is 800