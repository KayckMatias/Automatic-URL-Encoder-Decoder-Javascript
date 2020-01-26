var encode = $("#text_encode");
var decode = $("#text_decode");
$("#update").prop("checked", true);

$(document).ready(function(){
    if($("#update").is(":checked")){
        decode.removeAttr("disabled");
        encode.attr("disabled", true);
    }else{
        encode.removeAttr("disabled");
        decode.attr("disabled", true);
    }  

});
function changedEncode(){
    if($("#update").is(":checked")){
        encode.val(encodeURL($("#text_decode").val()));
    }else{
        decode.val(decodeURL($("#text_encode").val()));
    }
}

function changedSwitch(){
    if($("#update").is(":checked")){
        decode.removeAttr("disabled");
        encode.attr("disabled", true);
    }else{
        encode.removeAttr("disabled");
        decode.attr("disabled", true);
    }  
}

function encodeURL(string){
    var deURL = encodeURI(string);
    return deURL;
}

function decodeURL(string){
    var deURL = decodeURI(string);
    return deURL;
}