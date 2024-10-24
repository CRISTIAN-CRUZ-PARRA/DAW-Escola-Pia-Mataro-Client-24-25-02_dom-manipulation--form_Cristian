# Modern Way to Handle HTML Forms

This guide covers how to handle HTML forms in modern JavaScript, explaining form events like `submit`, how to prevent default actions, get form values, and add event listeners. It also explains how to protect against XSS attacks through sanitization.

## 1. Handling HTML Forms

### a) Prevent Default Form Submission

In HTML, submitting a form causes a page refresh by default. We can use JavaScript's `preventDefault()` to stop this behavior and handle form submission without reloading the page.

#### Example:

```javascript
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page refresh
  // Your custom form handling code
});
```

### b) Getting Form Values

To capture user input from form fields, use JavaScript's `document.getElementById()` or `document.querySelector()` methods. This allows you to access specific fields and retrieve their values.

#### Example:

```javascript
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Stop the default form action

  const name = document.getElementById("nameField").value;
  const email = document.getElementById("emailField").value;

  console.log("Name: " + name);
  console.log("Email: " + email);
});
```

### c) Getting Form Values Directly from `event.target`

Another modern way to get form values is directly from the `event.target` property. The `event.target` is a reference to the form element that triggered the event, and you can access form data using the `elements` collection of the form.

#### Example based on target name:

```javascript
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Stop the default form action

  const form = event.target; // Get the form element
  const name = form.nameField.value;
  const email = form.emailField.value;

  console.log("Name: " + name);
  console.log("Email: " + email);
});
```

#### Example based on target elements:

```javascript
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Stop the default form action

  const form = event.target; // Get the form element
  const name = form.elements["nameField"].value;
  const email = form.elements["emailField"].value;

  console.log("Name: " + name);
  console.log("Email: " + email);
});
```

In this example, we access the form element via `event.target` and retrieve the values using `form.elements["fieldName"].value`.

### d) Adding Event Listeners

In modern JavaScript, the preferred way to handle form actions is by adding event listeners. The `submit` event listener is commonly used to intercept form submission, allowing you to run custom code instead of the default behavior.

#### Example:

```javascript
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  // Your custom form handling logic
});
```

### e) Submit Event

The `submit` event is triggered when a form is submitted. This is where most form handling logic is implemented. By intercepting this event with an event listener, we can manage form data before it is sent to the server.

#### Example:

```javascript
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents default behavior

  // Handle the form submission here (e.g., form validation, data sanitization)
});
```

---

## 2. Sanitization to Avoid XSS Attacks

XSS (Cross-Site Scripting) attacks occur when an attacker injects malicious scripts into web applications that are then executed in the browser of unsuspecting users. These attacks are dangerous as they can steal cookies, session data, or even control the user's browser.

### What is an XSS Attack?

**XSS (Cross-Site Scripting)** is a type of security vulnerability in which an attacker injects malicious scripts (typically JavaScript) into a trusted website. This script is executed in the user's browser, often without them knowing.

For example, if user input isn't properly sanitized and displayed as HTML, an attacker could inject something like:

```html
<script>
  alert("XSS Attack!");
</script>
```

This would execute JavaScript code and display an alert box. In more dangerous cases, attackers could steal session cookies or redirect the user to malicious websites.

### Types of XSS Attacks:

1. **Stored XSS**: The script is stored on the server (e.g., in a database) and is executed whenever a user views the affected page.
2. **Reflected XSS**: The malicious script is part of a request (URL or form input) and is reflected in the response. It is executed immediately without being stored.
3. **DOM-based XSS**: The vulnerability is within the client-side code (JavaScript), where user input is directly inserted into the DOM without validation.

### 3. Different Ways to Sanitize Input to Avoid XSS

Sanitization is the process of cleaning or filtering user input to ensure it cannot execute harmful code. There are several ways to sanitize inputs in modern web development:

### a) Using `textContent` or `innerText`

When you use `innerHTML` to insert content into the DOM, it will render any HTML code, including potentially dangerous scripts. Instead, using `textContent`, `innerText` or `createTextNode()` ensures that the content is treated as plain text, not executable code.

#### Example:

```javascript
const userInput = '<script>alert("XSS Attack")</script>';
document.getElementById("output").textContent = userInput; // Safely displays text
```

## Conclusion

Proper handling of form submissions and input sanitization are critical to prevent XSS attacks. By using safe methods like `textContent` and `innerText`, escaping special characters, validating user input, or using libraries like DOMPurify, you can ensure that your web application remains secure against XSS vulnerabilities.
