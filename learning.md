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

