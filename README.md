FOR DEVELOPMENT
In a terminal, at the root of the project type: "yarn";
wait for the packages to be built, then build the app by typing: "yarn run web-watch";
In a different terminal, at the root of the project type: "node server";
Open a browser window and navigate to: "http://localhost:3004";

GENERAL EXPLANATION
The app is written in Typescript, uses the Angular(2+) framework and the Angular Material UI library. the modules are built by using Webpack.

MEDIAN PANEL EXPLANATION
The panel task is to calculate the running median of different entries. The key features are:

1) The function isEven()

private isEven(n) {
        return n % 2 == 0;
    }

It returns true if the number passed as parameter is even. It does that by finding the modulus of the parameter and comparing it to the value zero. 

2) An "integer" check on the numbers typed as requested in the specs

Number.isInteger(this.nrOfElements)

It uses the Number.isInteger() function provided by Javascript.

3) The function that truncates the result to the first digit after the decimal comma

 private toFixed(num: number, fixed: number): string {
        let re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
        return num.toString().match(re)[0];
    }

The function takes as parameters "num" which is the number to process and "fixed" the number of digits required after the comma.
It turns the number into a string and it matches it to the RegExp "re" and returns the first entry of the obtained result (.match(re) would return a result similar to ["1.5", index: 0, input: "1.5"]).
The regex is tested and found at the page: https://stackoverflow.com/questions/4187146/truncate-number-to-two-decimal-places-without-rounding

MOUSE PANEL EXPLANATION
The panel distinguishes the meaning of the word "mouse" in two different sentences. The UI is almost ready, but there wasn't time to go further. I would have probably used a ML framework for text classification as explained, for instance, in the following article:
https://machinelearnings.co/tensorflow-text-classification-615198df9231