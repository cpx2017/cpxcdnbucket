var LatencyRes = function LatencyCheck(mtd, target) {
    var Ms = 0
    var InTErval = setInterval(function(){ 
        Ms += 1
     }, 1);
    fetch(target, {
        method: mtd, // or 'PUT'
        })
        .then(response => response.json())
        .then(data => {
            clearInterval(InTErval)
        })
        .catch((error) => {
            clearInterval(InTErval)
            Ms = 0
    });
    return Ms
}