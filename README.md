# Vuejs Sweetalert Bridge
Vuejs plugin to use sweetalert js lib in a smart way.


- **Author:** Valerio Barbera - [valerio@aventuresrl.com](mailto:valerio@aventuresrl.com)
- **Author Website:** [www.aventuresrl.com](target="_blank":https://www.aventuresrl.com)


## Install
`npm install vuejs-sweetalert-bridge --save`


## Integrate
```javascript
import AlertsPlugin from 'vuejs-sweetalert-bridge';
Vue.use(AlertsPlugin);
```


## Use
Inside your vuejs components:
```javascript
    methods: {
        save(){
            this.$alerts.confirm(() => {
                console.log('Action confirmed');
            });
        }
    }
```


## Raw swal object
If you need to use a raw swal instance:
```javascript
this.$alerts.swal();
```


## Use as notification
Main alerts types `success, info, error` can be used as notification:
```javascript
this.$alerts.notify('info', {title: 'More info!'});
```

Notification is success by default:
```javascript
this.$alerts.notify();
```