1.What are featured Products??
=>/*Featured products are items that you highlight on your website or in your store. They may be new products, bestsellers, or items that you want to promote for a specific reason. For example, if you're running a sale, you may feature the products that are on sale */

2.public folder
=> #Understanding the public Folder
Serving Static Assets:

The public folder is meant for static assets that you want to be served directly by the web server.
When you build your React application, everything in the public folder is copied to the build directory and made available at the root of your web server.
Root URL Reference:

When you reference an asset from the public folder, you can use a relative path as if the public folder is the root of your project. This means that images/p1.jpg is understood to be /images/p1.jpg when your application is served.

# Why Full Path is Not Required
Root Path Assumption:
The React development server and the build output serve the contents of the public folder at the root URL (/). Therefore, any file inside public can be accessed with a path relative to this root URL.

3.How to extract parameter from url in react using react-router-dom
=>This package provides a react hook called useParams() by using this hook it provides the parameter present in the url
ex   const params =useParams();
now params contains the js object containing parameter

4.In backend inside package.json folder , add "type":"module" to use import instead of require.
other wise to import we have to use require for importing modules

5.  Use Case for proxy in React
In a typical React development setup, the proxy field is used to redirect API calls from the development server (usually localhost:3000) to your backend server (e.g., localhost:5000). This helps to avoid issues with CORS (Cross-Origin Resource Sharing) during development.
{
  "name": "frontend",
  "proxy": "http://localhost:5000",
  "version": "0.1.0",
  "private": true,
   ....
}
add proxy in frontend react package.json file
Assume you have a backend server that provides a products API endpoint at http://localhost:5000/api/products. When you set the proxy to http://localhost:5000 in your package.json, you can make API calls in your React application like this:

fetch('/api/products')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
With the proxy set, the development server redirects the request to http://localhost:5000/api/products.


6. npm i use-reducer-logger --force
import logger from 'use-reducer-logger'
This helps to see the reducer actions in console
=>for this wrap reducer in useReducer inside logger 
like this const []=useReducer(logger(reducer),);

7. react-bootstrap and bootstrap, react-router-bootstrap 

=>we can use Navbar from react-bootstrap  which requires container and to use routing in navbar use LinkContainer from react-router-bootstrap.