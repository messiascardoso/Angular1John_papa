(function() {
    'use strict';

    angular
        .module('listaTefonica')
        .controller('listaController', ControllerController);

    ControllerController.$inject = [];
    function ControllerController() {

        /* jshint validthis: true */
        var vm = this;
        
        /**
         * Coloque os objetos que precisam de bind no início do controller,
         *  em ordem alfabética, e não espalhados através do código do controller.
         */
        vm.addContato = addContato;
        vm.contatos = [
                        {nome:'Joao da Silva', tel:'119988-4545'},
                        {nome:'Zeca pacodinho', tel:'119988-6098'},
                        {nome:'Maria fonseca', tel:'115588-6077'},
                        {nome:'Marcos antonio', tel:'116688-6098'}
                      ];
        
        console.log(vm);

        activate();

        ////////////////

        function activate() { 
            
        }

        function addContato(contato) {
            vm.contatos.push(angular.copy(contato));
        }

    }
})();