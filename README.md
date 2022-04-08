# clean-replit-auth
Cleaner replit authentication wrapper with 300% more options than the default one.

## Example
```html
<button id="authButton">Continue with Replit</button>

<script src="https://cdn.jsdelivr.net/gh/codingMASTER398/clean-replit-auth/auth.min.js"></script>
<script>
  repl_auth({
    id: 'authButton',
    width: 600,
    height: 750
  })
</script>
```
When you click on the `authButton`, a replit authentication popup window will appear, having the width of 600 pixels and height of 750 pixels.
The REPL_AUTH cookie will be saved and can be accessed backend.

## Settings
```js
repl_auth({
  id: 'authButton', // ID of the button
  width: 600, // Width of popup (default 350)
  height: 750, // Height of popup (default 500)
  onStartAuth: function(){}, // When the auth button has been clicked (default nothing)
  onAuth: function(){}, // When the authentication flow has completed, so you can reload the page or whatever (default reload)
  host: 'https://example.com/' // The host to pass to replit... don't know why you'd wanna change this. (default actual host)
})
```
You don't need any of these except `id`.

## Migrating from https://auth.util.repl.co/ to this
Say you have this:
```html
<script authed="alert('you authed!')" src="https://auth.util.repl.co/script.js"></script>
```
You can upgrade to clean-replit-auth easily:
```html
<button id="authButton">Continue with Replit</button>

<script src="https://cdn.jsdelivr.net/gh/codingMASTER398/clean-replit-auth/auth.min.js"></script>
<script>
  repl_auth({id: 'authButton'})
</script>
```
You'd notice that this is more code, but here are some reasons you should keep it around:

## Benifits
 - Much faster loading with jsdelivr's CDN
 - 3x the amount of settings
 - Smaller file, minimised as far as it can go
 - Allows for easier and better button styling
 - You can change the text of the button (this doesn't exist in the default Replit wrapper!)

## Acknowledgements
Yes, I did use https://auth.util.repl.co/ as a starting point, so thanks to them!
