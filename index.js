console.log("Index.js is loaded");
const isAuthenticated = true;
if(isAuthenticated)
{
    history.replaceState(null, document.title, location.href);
}