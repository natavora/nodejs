module.exports = function(data, error){
    if(error){
        console.error(error);
        return error;
    }
    else{
        console.log(data);
        return data;
    }
    
}