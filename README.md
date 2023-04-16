# Honeycomb Design (Responsive) for React

A lightweight and flexible honeycomb UI design that allows you to build fully functional, advanced honeycomb design with minimal javascript and markup.
This library is built using react JS (for performance) and adheres to latest ECMAScript specs.
Supports IE10+, all major browsers and even mobile.

# Demo
![Screenshot](./docs/Honeycomb_demo.png)

## Inspiration

This is a module that I built originally to solve many of the headaches and complexities around building, flexible
and scalable honeycomb UI.

This library has been used and adopted on many projects, including:

* [truzlyindia.com](http://www.truzlyindia.com)


## Installation

You can install as an npm package if using a build system like [Browserify](http://browserify.org/). 

```
npm install @imshyamsundar/ui-react-honeycomb@1.0.0
```

## Usage
```javascript
import { Honeycomb } from "@imshyamsundar/ui-react-honeycomb";

function App() {
    const item = [
        {
            image: "https://www.truzlyindia.com/wp-content/uploads/2020/11/ti-startup.jpg",
            link: {
                href: "https://www.truzlyindia.com/private-limited-company/",
                target: "_blank"
            },
            text: "Start up"
        },
        {
            image: "https://www.truzlyindia.com/wp-content/uploads/2020/11/ti-ip.jpg", 
            link: {
                href: "https://www.truzlyindia.com/trademark-registration/",
                target: "_blank"
            },
            text: "Intellectual Property"
        }
    ]
    render() {
        return (
           <Honeycomb props={item} />
        );
    }
};
```
### Props
| Name        | value       | Description                                                      |
| ----------- | ----------- | ---------------------------------------------------------------- |
| image       | String      | Can be a direct link                                             |
| link        | Object      | Object contains href: String (or) null, target: String (or) null |
| text        | String      | Text appears inside the honeycomb                                |

# License

Distributed under the MIT License. See `LICENSE` for more information.

