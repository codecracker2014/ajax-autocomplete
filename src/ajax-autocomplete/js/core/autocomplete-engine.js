var $M_AjaxAutocompleteModule=(function(){
    function AbstractAutocomplete(welcomeText)
    {

        this.welcomeText=welcomeText || '';
    }
    AbstractAutocomplete.prototype.sayHello=function()
    {
        console.log(this.welcomeText);
    }
    return {
        core:AbstractAutocomplete
    }
})();