import routes from './route';

const routeSummary = routes.reduce((acc, cur) => {
    if(cur.route){
        return acc.concat(cur.route);
    }
    else{
        return acc.concat(cur);
    }
}, []);

export default routeSummary;