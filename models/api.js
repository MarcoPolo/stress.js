function api(hostTarget){
    this.hostTarget = hostTarget;
}

function apiWrapper(hostTarget){

    //constants
    var publicKey = '009DBDD9C9732F59445E831AEE65717A072FA96A2D7082E0425A3C2061EB6013';
    var secretKey = '11A112F200DD31331C5D538101E00E4A55F661F52F6F20E3FFA42E74A4FCC957';

    var checkSignature = function(reqObj, testSig, jsSHA){
        var signature = getSignature(reqObj, jsSHA);
        console.log(signature);
        console.log(testSig);
        return signature==testSig;
    }

    var callAPI = function(apiName, method, paramObj, jsSHA){
        requestObj = {
            "headers" : {
                "publicKey": publicKey
            },
            "method" : method,
            "parameters" : paramObj
        };

        var signature = getSignature(requestObj, jsSHA);
        var requestURL = this.hostTarget +'/'+ apiName + "?signature=" + signature;
        return {url:requestURL, reqObj :requestObj}

        
    }

    var calcHMAC = function(text, key, jsSHA){
        var shaObj = new jsSHA(text);
        return shaObj.getHMAC(key, "ASCII", "SHA-256", "HEX");
    }


    var getSignature = function(requestObj, jsSHA){
        var paramObjSer = JSON.stringify(requestObj),
            signature = calcHMAC(paramObjSer, secretKey, jsSHA);
        return signature;
    }

    api.prototype.checkSignature = checkSignature;
    api.prototype.callAPI = callAPI;
    return new api(hostTarget);

}

exports.apiWrapper = apiWrapper;
