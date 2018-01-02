import swal from 'sweetalert2';

export default {
    install: function (Vue) {

        Object.defineProperty(Vue.prototype, '$alerts', {
            value: {
                swal: swal,

                success(options) {
                    let config = Object.assign({
                        title: 'Ottimo lavoro',
                        text: 'Tutte le informazioni sonon state salvate correttamente.',
                        type: 'success'
                    }, options);

                    return swal(config);
                },

                info(options) {
                    let config = Object.assign({
                        title: 'Info',
                        text: null,
                        type: 'info'
                    }, options);

                    return swal(config);
                },

                error(options) {
                    let config = Object.assign({
                        title: 'Oops!',
                        text: 'Il server potrebbe aver riscontrato un errore prima di eseguire l\'operazione richiesta.',
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
                        title: 'Sei sicuro?',
                        text: '"OK" per confermare, "Cancel" per annullare.',
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