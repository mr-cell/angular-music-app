# angular-music-app
music app created on angularjs course


https://addons.mozilla.org/pl/firefox/addon/angscope-simple-angularjs-s/ - wtyczka do firefoxa

uzycie zmiennej o tak:
(z navbar.html) <li ui-sref-active="active" ng-repeat="state in ::states"> 
'::' powoduje, że angular obserwuje tą zmienną tylko do czasu, kiedy jest undefined. 
W momencie inicjalizacji - przestaje obserwować. Przydatne przy ograniczaniu ilości watcherów (performance).
Tylko dla AngularJS >= 1.3.x !!

Sprawdzanie ilości watcherów: jsbin.com/pequbu (fajny kod do dodania do snippets w FF czy Chrome)

Snippety: pod Chrome od razu, pod FF plugin - https://addons.mozilla.org/pl/firefox/addon/scratchpad-snippets