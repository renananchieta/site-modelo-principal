import axios from "axios";
import store from "./store/index";
import router from "./router";

const api = axios.create({
    withCredentials: true,
    baseURL: `${process.env.VUE_APP_BASE_URL}/api`,
});

api.defaults.timeout = 50000;//50 segundos

//no modo debug envia o nome da tela em cada request para o segurança
api.interceptors.request.use(function (config) {
        if (process.env.VUE_APP_DEBUG //modo debug ativo
            && !store.state.usuario.obrigatorio.find(element => element === router.currentRoute.path)) {//não é rota obrigatória
            // config.headers["x-seguranca-tela"] = router.currentRoute.path
            config.headers["x-seguranca-tela"] = router.currentRoute.matched[1].path
        }
        return config
    }
);

api.interceptors.response.use(function (response) {
        //se houver este cabeçalho, então dá um alerta na tela
        if (process.env.VUE_APP_DEBUG && response.headers['x-seguranca-tela']) {
            store.commit('INCLUIR_DEPENDENCIA', {
                nomeTela: response.headers['x-seguranca-tela']
            })
        }
        return response
    },
    function (error) {

        switch (error.response.status) {

            case 300:
                if (process.env.VUE_APP_DEBUG) {
                    store.commit('EXIBIR_MODAL_NOVA_ACAO', {
                        modal: true,
                        depende: true,
                        uri: `api${error.response.config.url}`,
                        method: error.response.config.method,
                    })
                }
                return Promise.reject(error);
            case 307://Temporary Redirect (usado pelo segurança com cadastro incompleto do usuário)
                if (typeof error.response.data.url !== 'undefined') {
                    router.push(error.response.data.url)
                }
                return Promise.reject(error);
            case 401: //Não está logado
            case 419: //Sessão expirada
                if (window.location.pathname !== '/autenticacao')
                    alert('Sessão expirada. Faça o login e tente novamente.');
                return Promise.reject(error);
            case 403: //Sem permissão de acesso
                alert('Seu usuário não possui permissão para acessar o recurso solicitado');
                return Promise.reject(error);
            case 500:
                alert('Falha ao tentar executar seu pedido.');
                return Promise.reject(error);
            case 503: //Sistema em manutenção
                alert('Sistema em manutenção. Por Favor, tente mais tarde');
                return Promise.reject(error);
            default:
                // Allow individual requests to handle other errors
                return Promise.reject(error);
        }
    });

export default api;