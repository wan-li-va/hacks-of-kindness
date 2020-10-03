/*! For license information please see 11.f410596c.chunk.js.LICENSE.txt */
(this.webpackJsonpwics=this.webpackJsonpwics||[]).push([[11],{65:function(e,t,n){"use strict";n.r(t);n(48);var r,i,o=n(32),s=n(22),a=n(1),c=n(50),u=n(31),l=n.n(u),d=((r={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["only-available-in-window"]="This method is available in a Window context.",r["only-available-in-sw"]="This method is available in a service worker context.",r["permission-default"]="The notification permission was not granted and dismissed instead.",r["permission-blocked"]="The notification permission was not granted and blocked instead.",r["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",r["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",r["token-subscribe-failed"]="A problem occurred while subscribing the user to FCM: {$errorInfo}",r["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",r["token-unsubscribe-failed"]="A problem occurred while unsubscribing the user from FCM: {$errorInfo}",r["token-update-failed"]="A problem occurred while updating the user from FCM: {$errorInfo}",r["token-update-no-token"]="FCM returned no token when updating the user to push.",r["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",r["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",r["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",r["invalid-vapid-key"]="The public VAPID key must be a string.",r["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",r),p=new s.ErrorFactory("messaging","Messaging",d),f="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4";function h(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,Object(a.__spread)(t))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function g(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length),i=0;i<n.length;++i)r[i]=n.charCodeAt(i);return r}!function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(i||(i={}));function b(e){return Object(a.__awaiter)(this,void 0,void 0,(function(){var t,n,r=this;return Object(a.__generator)(this,(function(i){switch(i.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(t=i.sent(),!t.map((function(e){return e.name})).includes("fcm_token_details_db"))return[2,null];i.label=2;case 2:return n=null,[4,Object(c.openDb)("fcm_token_details_db",5,(function(t){return Object(a.__awaiter)(r,void 0,void 0,(function(){var r,i,o,s;return Object(a.__generator)(this,(function(a){switch(a.label){case 0:return t.oldVersion<2?[2]:t.objectStoreNames.contains("fcm_token_object_Store")?[4,(r=t.transaction.objectStore("fcm_token_object_Store")).index("fcmSenderId").get(e)]:[2];case 1:return i=a.sent(),[4,r.clear()];case 2:if(a.sent(),!i)return[2];if(2===t.oldVersion){if(!(o=i).auth||!o.p256dh||!o.endpoint)return[2];n={token:o.fcmToken,createTime:null!==(s=o.createTime)&&void 0!==s?s:Date.now(),subscriptionOptions:{auth:o.auth,p256dh:o.p256dh,endpoint:o.endpoint,swScope:o.swScope,vapidKey:"string"===typeof o.vapidKey?o.vapidKey:h(o.vapidKey)}}}else(3===t.oldVersion||4===t.oldVersion)&&(n={token:(o=i).fcmToken,createTime:o.createTime,subscriptionOptions:{auth:h(o.auth),p256dh:h(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:h(o.vapidKey)}});return[2]}}))}))}))];case 3:return i.sent().close(),[4,Object(c.deleteDb)("fcm_token_details_db")];case 4:return i.sent(),[4,Object(c.deleteDb)("fcm_vapid_details_db")];case 5:return i.sent(),[4,Object(c.deleteDb)("undefined")];case 6:return i.sent(),[2,v(n)?n:null]}}))}))}function v(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return"number"===typeof e.createTime&&e.createTime>0&&"string"===typeof e.token&&e.token.length>0&&"string"===typeof t.auth&&t.auth.length>0&&"string"===typeof t.p256dh&&t.p256dh.length>0&&"string"===typeof t.endpoint&&t.endpoint.length>0&&"string"===typeof t.swScope&&t.swScope.length>0&&"string"===typeof t.vapidKey&&t.vapidKey.length>0}var w="firebase-messaging-store",y=null;function _(){return y||(y=Object(c.openDb)("firebase-messaging-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(w)}}))),y}function m(e){return Object(a.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(a.__generator)(this,(function(i){switch(i.label){case 0:return t=j(e),[4,_()];case 1:return[4,i.sent().transaction(w).objectStore(w).get(t)];case 2:return(n=i.sent())?[2,n]:[3,3];case 3:return[4,b(e.appConfig.senderId)];case 4:return(r=i.sent())?[4,k(e,r)]:[3,6];case 5:return i.sent(),[2,r];case 6:return[2]}}))}))}function k(e,t){return Object(a.__awaiter)(this,void 0,void 0,(function(){var n,r,i;return Object(a.__generator)(this,(function(o){switch(o.label){case 0:return n=j(e),[4,_()];case 1:return r=o.sent(),[4,(i=r.transaction(w,"readwrite")).objectStore(w).put(t,n)];case 2:return o.sent(),[4,i.complete];case 3:return o.sent(),[2,t]}}))}))}function O(e){return Object(a.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(a.__generator)(this,(function(i){switch(i.label){case 0:return t=j(e),[4,_()];case 1:return n=i.sent(),[4,(r=n.transaction(w,"readwrite")).objectStore(w).delete(t)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function j(e){return e.appConfig.appId}function S(e,t){return Object(a.__awaiter)(this,void 0,void 0,(function(){var n,r,i,o,s,c;return Object(a.__generator)(this,(function(a){switch(a.label){case 0:return[4,K(e)];case 1:n=a.sent(),r=C(t),i={method:"POST",headers:n,body:JSON.stringify(r)},a.label=2;case 2:return a.trys.push([2,5,,6]),[4,fetch(I(e.appConfig),i)];case 3:return[4,a.sent().json()];case 4:return o=a.sent(),[3,6];case 5:throw s=a.sent(),p.create("token-subscribe-failed",{errorInfo:s});case 6:if(o.error)throw c=o.error.message,p.create("token-subscribe-failed",{errorInfo:c});if(!o.token)throw p.create("token-subscribe-no-token");return[2,o.token]}}))}))}function M(e,t){return Object(a.__awaiter)(this,void 0,void 0,(function(){var n,r,i,o,s,c;return Object(a.__generator)(this,(function(a){switch(a.label){case 0:return[4,K(e)];case 1:n=a.sent(),r=C(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)},a.label=2;case 2:return a.trys.push([2,5,,6]),[4,fetch(I(e.appConfig)+"/"+t.token,i)];case 3:return[4,a.sent().json()];case 4:return o=a.sent(),[3,6];case 5:throw s=a.sent(),p.create("token-update-failed",{errorInfo:s});case 6:if(o.error)throw c=o.error.message,p.create("token-update-failed",{errorInfo:c});if(!o.token)throw p.create("token-update-no-token");return[2,o.token]}}))}))}function T(e,t){return Object(a.__awaiter)(this,void 0,void 0,(function(){var n,r,i,o,s;return Object(a.__generator)(this,(function(a){switch(a.label){case 0:return[4,K(e)];case 1:n=a.sent(),r={method:"DELETE",headers:n},a.label=2;case 2:return a.trys.push([2,5,,6]),[4,fetch(I(e.appConfig)+"/"+t,r)];case 3:return[4,a.sent().json()];case 4:if((i=a.sent()).error)throw o=i.error.message,p.create("token-unsubscribe-failed",{errorInfo:o});return[3,6];case 5:throw s=a.sent(),p.create("token-unsubscribe-failed",{errorInfo:s});case 6:return[2]}}))}))}function I(e){return"https://fcmregistrations.googleapis.com/v1/projects/"+e.projectId+"/registrations"}function K(e){var t=e.appConfig,n=e.installations;return Object(a.__awaiter)(this,void 0,void 0,(function(){var e;return Object(a.__generator)(this,(function(r){switch(r.label){case 0:return[4,n.getToken()];case 1:return e=r.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+e})]}}))}))}function C(e){var t=e.p256dh,n=e.auth,r=e.endpoint,i=e.vapidKey,o={web:{endpoint:r,auth:n,p256dh:t}};return i!==f&&(o.web.applicationPubKey=i),o}function D(e,t,n){return Object(a.__awaiter)(this,void 0,void 0,(function(){var r,i,o,s;return Object(a.__generator)(this,(function(a){switch(a.label){case 0:if("granted"!==Notification.permission)throw p.create("permission-blocked");return[4,R(t,n)];case 1:return r=a.sent(),[4,m(e)];case 2:return i=a.sent(),o={vapidKey:n,swScope:t.scope,endpoint:r.endpoint,auth:h(r.getKey("auth")),p256dh:h(r.getKey("p256dh"))},i?[3,3]:[2,N(e,o)];case 3:if(function(e,t){var n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&i&&o}(i.subscriptionOptions,o))return[3,8];a.label=4;case 4:return a.trys.push([4,6,,7]),[4,T(e,i.token)];case 5:return a.sent(),[3,7];case 6:return s=a.sent(),console.warn(s),[3,7];case 7:return[2,N(e,o)];case 8:return Date.now()>=i.createTime+6048e5?[2,E({token:i.token,createTime:Date.now(),subscriptionOptions:o},e,t)]:[2,i.token];case 9:return[2]}}))}))}function P(e,t){return Object(a.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(a.__generator)(this,(function(i){switch(i.label){case 0:return[4,m(e)];case 1:return(n=i.sent())?[4,T(e,n.token)]:[3,4];case 2:return i.sent(),[4,O(e)];case 3:i.sent(),i.label=4;case 4:return[4,t.pushManager.getSubscription()];case 5:return(r=i.sent())?[2,r.unsubscribe()]:[2,!0]}}))}))}function E(e,t,n){return Object(a.__awaiter)(this,void 0,void 0,(function(){var r,i,o;return Object(a.__generator)(this,(function(s){switch(s.label){case 0:return s.trys.push([0,3,,5]),[4,M(t,e)];case 1:return r=s.sent(),i=Object(a.__assign)(Object(a.__assign)({},e),{token:r,createTime:Date.now()}),[4,k(t,i)];case 2:return s.sent(),[2,r];case 3:return o=s.sent(),[4,P(t,n)];case 4:throw s.sent(),o;case 5:return[2]}}))}))}function N(e,t){return Object(a.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(a.__generator)(this,(function(i){switch(i.label){case 0:return[4,S(e,t)];case 1:return n=i.sent(),r={token:n,createTime:Date.now(),subscriptionOptions:t},[4,k(e,r)];case 2:return i.sent(),[2,r.token]}}))}))}function R(e,t){return Object(a.__awaiter)(this,void 0,void 0,(function(){var n;return Object(a.__generator)(this,(function(r){switch(r.label){case 0:return[4,e.pushManager.getSubscription()];case 1:return(n=r.sent())?[2,n]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:g(t)})]}}))}))}function x(e){return"object"===typeof e&&!!e&&"google.c.a.c_id"in e}var A=function(){function e(e){var t=this;this.firebaseDependencies=e,this.isOnBackgroundMessageUsed=null,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",(function(e){e.waitUntil(t.onPush(e))})),self.addEventListener("pushsubscriptionchange",(function(e){e.waitUntil(t.onSubChange(e))})),self.addEventListener("notificationclick",(function(e){e.waitUntil(t.onNotificationClick(e))}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.setBackgroundMessageHandler=function(e){if(this.isOnBackgroundMessageUsed=!1,!e||"function"!==typeof e)throw p.create("invalid-bg-handler");this.bgMessageHandler=e},e.prototype.onBackgroundMessage=function(e){var t=this;return this.isOnBackgroundMessageUsed=!0,this.bgMessageHandler=e,function(){t.bgMessageHandler=null}},e.prototype.getToken=function(){var e,t;return Object(a.__awaiter)(this,void 0,void 0,(function(){var n;return Object(a.__generator)(this,(function(r){switch(r.label){case 0:return this.vapidKey?[3,2]:[4,m(this.firebaseDependencies)];case 1:n=r.sent(),this.vapidKey=null!==(t=null===(e=null===n||void 0===n?void 0:n.subscriptionOptions)||void 0===e?void 0:e.vapidKey)&&void 0!==t?t:f,r.label=2;case 2:return[2,D(this.firebaseDependencies,self.registration,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return P(this.firebaseDependencies,self.registration)},e.prototype.requestPermission=function(){throw p.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw p.create("use-vapid-key-after-get-token");if("string"!==typeof e||0===e.length)throw p.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(){throw p.create("only-available-in-window")},e.prototype.onMessage=function(){throw p.create("only-available-in-window")},e.prototype.onTokenRefresh=function(){throw p.create("only-available-in-window")},e.prototype.onPush=function(e){return Object(a.__awaiter)(this,void 0,void 0,(function(){var t,n,r,i;return Object(a.__generator)(this,(function(o){switch(o.label){case 0:return(t=function(e){var t=e.data;if(!t)return null;try{return t.json()}catch(n){return null}}(e))?[4,F()]:(console.debug("FirebaseMessaging: failed to get parsed MessagePayload from the PushEvent. Skip handling the push."),[2]);case 1:return function(e){return e.some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))}(n=o.sent())?[2,U(n,t)]:(r=!1,t.notification?[4,V(W(t))]:[3,3]);case 2:o.sent(),r=!0,o.label=3;case 3:return!0===r&&!1===this.isOnBackgroundMessageUsed||this.bgMessageHandler&&(i=function(e){var t={from:e.from,collapseKey:e.collapse_key};return function(e,t){if(!t.notification)return;e.notification={};var n=t.notification.title;n&&(e.notification.title=n);var r=t.notification.body;r&&(e.notification.body=r);var i=t.notification.image;i&&(e.notification.image=i)}(t,e),function(e,t){if(!t.data)return;e.data=t.data}(t,e),function(e,t){if(!t.fcmOptions)return;e.fcmOptions={};var n=t.fcmOptions.link;n&&(e.fcmOptions.link=n);var r=t.fcmOptions.analytics_label;r&&(e.fcmOptions.analyticsLabel=r)}(t,e),t}(t),"function"===typeof this.bgMessageHandler?this.bgMessageHandler(i):this.bgMessageHandler.next(i)),[2]}}))}))},e.prototype.onSubChange=function(e){var t,n;return Object(a.__awaiter)(this,void 0,void 0,(function(){var r;return Object(a.__generator)(this,(function(i){switch(i.label){case 0:return e.newSubscription?[3,2]:[4,P(this.firebaseDependencies,self.registration)];case 1:return i.sent(),[2];case 2:return[4,m(this.firebaseDependencies)];case 3:return r=i.sent(),[4,P(this.firebaseDependencies,self.registration)];case 4:return i.sent(),[4,D(this.firebaseDependencies,self.registration,null!==(n=null===(t=null===r||void 0===r?void 0:r.subscriptionOptions)||void 0===t?void 0:t.vapidKey)&&void 0!==n?n:f)];case 5:return i.sent(),[2]}}))}))},e.prototype.onNotificationClick=function(e){var t,n;return Object(a.__awaiter)(this,void 0,void 0,(function(){var r,o,s,c,u;return Object(a.__generator)(this,(function(a){switch(a.label){case 0:return(r=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n.FCM_MSG)?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),(o=function(e){var t,n,r,i=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action;if(i)return i;return x(e.data)?self.location.origin:null}(r))?(s=new URL(o,self.location.href),c=new URL(self.location.origin),s.host!==c.host?[2]:[4,H(s)]):[2]):[2];case 1:return(u=a.sent())?[3,4]:[4,self.clients.openWindow(o)];case 2:return u=a.sent(),[4,(l=3e3,new Promise((function(e){setTimeout(e,l)})))];case 3:return a.sent(),[3,6];case 4:return[4,u.focus()];case 5:u=a.sent(),a.label=6;case 6:return u?(r.messageType=i.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,[2,u.postMessage(r)]):[2]}var l}))}))},e}();function W(e){var t,n=Object(a.__assign)({},e.notification);return n.data=((t={}).FCM_MSG=e,t),n}function H(e){return Object(a.__awaiter)(this,void 0,void 0,(function(){var t,n,r,i,o,s,c;return Object(a.__generator)(this,(function(u){switch(u.label){case 0:return[4,F()];case 1:t=u.sent();try{for(n=Object(a.__values)(t),r=n.next();!r.done;r=n.next())if(i=r.value,o=new URL(i.url,self.location.href),e.host===o.host)return[2,i]}catch(l){s={error:l}}finally{try{r&&!r.done&&(c=n.return)&&c.call(n)}finally{if(s)throw s.error}}return[2,null]}}))}))}function U(e,t){var n,r;t.isFirebaseMessaging=!0,t.messageType=i.PUSH_RECEIVED;try{for(var o=Object(a.__values)(e),s=o.next();!s.done;s=o.next()){s.value.postMessage(t)}}catch(c){n={error:c}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}function F(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function V(e){var t,n=e.actions,r=Notification.maxActions;return n&&r&&n.length>r&&console.warn("This browser only supports "+r+" actions. The remaining actions will not be displayed."),self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}var B=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",(function(e){return t.messageEventListener(e)}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.messageEventListener=function(e){return Object(a.__awaiter)(this,void 0,void 0,(function(){var t,n;return Object(a.__generator)(this,(function(r){switch(r.label){case 0:return(t=e.data).isFirebaseMessaging?(this.onMessageCallback&&t.messageType===i.PUSH_RECEIVED&&("function"===typeof this.onMessageCallback?this.onMessageCallback(function(e){return delete e.messageType,delete e.isFirebaseMessaging,e}(Object.assign({},t))):this.onMessageCallback.next(Object.assign({},t))),x(n=t.data)&&"1"===n["google.c.a.e"]?[4,this.logEvent(t.messageType,n)]:[3,2]):[2];case 1:r.sent(),r.label=2;case 2:return[2]}}))}))},e.prototype.getVapidKey=function(){return this.vapidKey},e.prototype.getSwReg=function(){return this.swRegistration},e.prototype.getToken=function(e){return Object(a.__awaiter)(this,void 0,void 0,(function(){return Object(a.__generator)(this,(function(t){switch(t.label){case 0:return"default"!==Notification.permission?[3,2]:[4,Notification.requestPermission()];case 1:t.sent(),t.label=2;case 2:if("granted"!==Notification.permission)throw p.create("permission-blocked");return[4,this.updateVapidKey(null===e||void 0===e?void 0:e.vapidKey)];case 3:return t.sent(),[4,this.updateSwReg(null===e||void 0===e?void 0:e.serviceWorkerRegistration)];case 4:return t.sent(),[2,D(this.firebaseDependencies,this.swRegistration,this.vapidKey)]}}))}))},e.prototype.updateVapidKey=function(e){return Object(a.__awaiter)(this,void 0,void 0,(function(){return Object(a.__generator)(this,(function(t){return e?this.vapidKey=e:this.vapidKey||(this.vapidKey=f),[2]}))}))},e.prototype.updateSwReg=function(e){return Object(a.__awaiter)(this,void 0,void 0,(function(){return Object(a.__generator)(this,(function(t){switch(t.label){case 0:return e||this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:t.sent(),t.label=2;case 2:if(!e&&this.swRegistration)return[2];if(!(e instanceof ServiceWorkerRegistration))throw p.create("invalid-sw-registration");return this.swRegistration=e,[2]}}))}))},e.prototype.registerDefaultSw=function(){return Object(a.__awaiter)(this,void 0,void 0,(function(){var e,t;return Object(a.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=this,[4,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"})];case 1:return e.swRegistration=n.sent(),this.swRegistration.update().catch((function(){})),[3,3];case 2:throw t=n.sent(),p.create("failed-service-worker-registration",{browserErrorMessage:t.message});case 3:return[2]}}))}))},e.prototype.deleteToken=function(){return Object(a.__awaiter)(this,void 0,void 0,(function(){return Object(a.__generator)(this,(function(e){switch(e.label){case 0:return this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:e.sent(),e.label=2;case 2:return[2,P(this.firebaseDependencies,this.swRegistration)]}}))}))},e.prototype.requestPermission=function(){return Object(a.__awaiter)(this,void 0,void 0,(function(){var e;return Object(a.__generator)(this,(function(t){switch(t.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(e=t.sent()))return[2];throw"denied"===e?p.create("permission-blocked"):p.create("permission-default")}}))}))},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw p.create("use-vapid-key-after-get-token");if("string"!==typeof e||0===e.length)throw p.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw p.create("invalid-sw-registration");if(this.swRegistration)throw p.create("use-sw-after-get-token");this.swRegistration=e},e.prototype.onMessage=function(e){var t=this;return this.onMessageCallback=e,function(){t.onMessageCallback=null}},e.prototype.setBackgroundMessageHandler=function(){throw p.create("only-available-in-sw")},e.prototype.onBackgroundMessage=function(){throw p.create("only-available-in-sw")},e.prototype.onTokenRefresh=function(){return function(){}},e.prototype.logEvent=function(e,t){return Object(a.__awaiter)(this,void 0,void 0,(function(){var n;return Object(a.__generator)(this,(function(r){switch(r.label){case 0:return n=function(e){switch(e){case i.NOTIFICATION_CLICKED:return"notification_open";case i.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}(e),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return r.sent().logEvent(n,{message_id:t["google.c.a.c_id"],message_name:t["google.c.a.c_l"],message_time:t["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)}),[2]}}))}))},e}();function L(e){return p.create("missing-app-config-values",{valueName:e})}var q={isSupported:G};function G(){return self&&"ServiceWorkerGlobalScope"in self?"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}l.a.INTERNAL.registerComponent(new o.Component("messaging",(function(e){var t=e.getProvider("app").getImmediate(),n={app:t,appConfig:function(e){var t,n;if(!e||!e.options)throw L("App Configuration Object");if(!e.name)throw L("App Name");var r=e.options;try{for(var i=Object(a.__values)(["projectId","apiKey","appId","messagingSenderId"]),o=i.next();!o.done;o=i.next()){var s=o.value;if(!r[s])throw L(s)}}catch(c){t={error:c}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return{appName:e.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}(t),installations:e.getProvider("installations").getImmediate(),analyticsProvider:e.getProvider("analytics-internal")};if(!G())throw p.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new A(n):new B(n)}),"PUBLIC").setServiceProps(q))}}]);
//# sourceMappingURL=11.f410596c.chunk.js.map