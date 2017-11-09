import Login from '../store/containers/login';
import Regist from '../store/containers/regist';

const routes = [
    {
        name: 'login',
        path: '/login',
        component: Login,
        icon: 'login'   
    },
    {
        name: 'regist',
        path: '/regist',
        component: Regist,
        icon: 'regist' 
    }
]

export default routes;