app.filter('sort', function() {
    return function(x,y) {
        //if(x.length == 0) return x;
        if(y){
           return  x.sort(function(a, b){return a.title-b.title});
        }
        return x;

    };
});