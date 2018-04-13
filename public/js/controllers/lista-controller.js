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
				vm.contatos = []; 
        
				vm.operadoras = 
				[
					{nome:'OI', codigo:14 , categoria: 'Celular'},
					{nome:'Vivo', codigo:15, categoria: 'Celular'},
					{nome:'Tim', codigo:41 , categoria: 'Celular'},
					{nome:'GvT', codigo:18, categoria: 'Fixo'},
					{nome:'Embratel', codigo:41 , categoria: 'Fixo'}
        ];

        activate();

      

        function activate() { 
            
        }

        function addContato(contato) {
            vm.contatos.push(angular.copy(contato));
        }

       
    }
})();