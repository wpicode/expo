
var expect    = require("chai").expect;
var io = require('socket.io-client');

	describe("A round-trip to a server pulling back the appropriate prices", function() {
	 	
	    var socket; var val;

	    beforeEach(function(done) {
	        // Setup
	        socket = io.connect('http://localhost:3000', {
	            'reconnection delay' : 0
	            , 'reopen delay' : 0
	            , 'force new connection' : true
	        });
	        socket.on('connect', function() {
	            console.log('worked...');
	        });
	 			socket.on('result', function(msg){
			 		val = msg;
	            	done();
				});

				socket.emit('search', ['supplier','New Co Ltd' ] );

	    });


		 	it("results returned containing price", function(done) {
		 	
						expect(val[0]['price']).to.be.a('number');
						done();
		    });

		
	});