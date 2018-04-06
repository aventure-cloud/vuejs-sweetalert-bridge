import swal from 'sweetalert2';
import lang from './languages';

export default {
    install: function (Vue, options) {

        let config = Object.assign({
            lang: 'it'
        }, options);

        let trans = (type, key) => {
            return lang[config.lang][type][key];
        };

        Object.defineProperty(Vue.prototype, '$alerts', {
            value: {
                swal: swal,

                success(options) {
                    let config = Object.assign({
                        title: trans('success', 'title'),
                        text: trans('success', 'message'),
                        type: 'success'
                    }, options);

                    return swal(config);
                },

                info(options) {
                    let config = Object.assign({
                        title: trans('info', 'title'),
                        text: trans('info', 'message'),
                        type: 'info'
                    }, options);

                    return swal(config);
                },

                error(options) {
                    let config = Object.assign({
                        title: trans('error', 'title'),
                        text: trans('error', 'message'),
                        type: 'error'
                    }, options);

                    return swal(config);
                },

                notify(type, options){
                    let config = Object.assign({
                        timer: 1500,
                        position: 'top-end',
                        showConfirmButton: false
                    }, options);

                    switch (type){
                        case 'info':
                            return this.info(config);
                        case 'error':
                            return this.error(config);
                        default:
                            return this.success(config);
                    }
                },

                confirm(callback, options) {
                    let config = Object.assign({
                        title: trans('confirm', 'title'),
                        text: trans('confirm', 'message'),
                        type: "question",
                        showCancelButton: true
                    }, options);

                    swal(config).then((res) => {
                        if (res.hasOwnProperty('value'))
                            return callback(res);
                        else
                            console.log("Action cancelled", res);
                    });
                }
            }
        });
    }
}