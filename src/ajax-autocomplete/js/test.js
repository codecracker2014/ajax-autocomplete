(function($) {

        var ChosenAutocomplete=function(_elemtnt,options)
        {
            console.log(_elemtnt);
            this.element=_elemtnt;
            this.jqElement=$(_elemtnt);
            this.setupHtml();
            this.registerObservers();
        }
        ChosenAutocomplete.prototype.setupHtml=function()
        {
            console.log("Setting up");
            this.width=this.jqElement.width();
            this.jqElement.hide();
            var containerAttr={
                id:this.element.id+'_container',
                class:'container chzn-container chzn-container-multi',
                css:{
                    width:this.width
                }
            }
            this.container=$("<div />",containerAttr);
            var searchFieldAttr={
                id:this.element.id+'_searchField',
                class:'search-field',
                css:{
                    width:'100%'
                }
            }
            this.searchField=$("<input />",searchFieldAttr);
            var selectedListAttr={
                class:'chzn-choices '
            }
            this.selectedList=$("<ul>",selectedListAttr);
            this.searchFieldLi=$("<li>",{class:'search-field'});
            this.searchFieldLi.append(this.searchField);
            this.selectedList.append(this.searchFieldLi);
            this.container.append(this.selectedList);
            this.resultList=$("<ul>",{
                                        class:' chzn-results results-list'
                                    });
            this.resultsContainer=$("<div />",{class:'chzn-drop'});
            this.resultsContainer.append(this.resultList);
            $(this.element).after(this.container);
        }

        ChosenAutocomplete.prototype.registerObservers = function() {
            var _this = this;
            this.searchField.keyup(function(evt) {
              return _this.keyupChecker(evt);
            });
            this.searchField.keydown(function(evt) {
              return _this.keydownChecker(evt);
            });
          };
          ChosenAutocomplete.prototype.keyupChecker = function(evt) {
              console.log("KeyUp")
              this.typingTimer;
              var stroke, _ref;
              stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
              switch (stroke) {
                case 8:
                //backspace
                  break;
                case 13:
                //enter
                  evt.preventDefault();
                  break;
                case 27:
                //Esc
                  return true;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                  break;
                default:
                clearTimeout(this.typingTimer);
                console.log("Timer "+this.typingTimer);
                this.typingTimer = setTimeout(this.search,100,this);
                  return ;
              }
          };
          ChosenAutocomplete.prototype.keydownChecker = function() {
            console.log("KeyDown")
        };
    
        ChosenAutocomplete.prototype.search = function(_this) {
            console.log("Searching "+_this.searchField.val());
            var results=$("<li class='active-result result-item'>HIJJJJJJJ</li><li class='active-result result-item'>HIJJJJJJJ</li>");
            _this.resultList.append(results);
            _this.resultsContainer.css({
                width:'100%'
            })
            _this.selectedList.after(_this.resultsContainer);

        };

        $.fn.chosenAutocomplete = function( options ) {
    
            // Establish our default settings
            var settings = $.extend({
                text         : 'Hello, World!',
                color        : null,
                fontStyle    : null
            }, options);
    
            return this.each( function() {
                debugger
                $(this).data("chosenAutocomplete",new ChosenAutocomplete(this,settings));
            });    


        }
    
    }(jQuery));