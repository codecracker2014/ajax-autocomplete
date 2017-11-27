$M_AjaxAutocompleteModule=(function(Module){
    function Autocomplete(options)
    {
        Module.core.call(this,options);   
    }
    Autocomplete.prototype=new Module.core();
    Autocomplete.prototype.constructor=Autocomplete;

    Module.ajax=Autocomplete;
    return Module;
        
})($M_AjaxAutocompleteModule);