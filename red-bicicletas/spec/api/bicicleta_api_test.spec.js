var Bicicleta = require('../../models/bicicleta');
var request = require('request');
var server = require('../../bin/www');

//beforeEach(() => { Bicicleta.allBicis = [] });
beforeEach(() => {console.log('testeando...')});

describe('Bicicleta API', () => {
	describe('Get Bicicletas', () => {
		it('Status 200', () => {
			expect(Bicicleta.allBicis.length).toBe(0);

			var a = new Bicicleta(1, 'rojo', 'urbana', [-33.4459205,-70.6500258]);
			Bicicleta.add(a);

			request.get('http://localhost:3000/api/bicicletas', function(error, response, body) {
				expect(response.statusCode).toBe(200);
			})
		})
	});

	describe('Post bicicletas /create', () => {
		it('Status 200', (done) => {
			var headers = {'content-type': 'application/json'};
			var aBici = '{"id": 10, "color": "rosada", "modelo": "urbana", "lat": -34, "lng": -54}';
			request.post({
				headers: headers,
				url: 'http://localhost:3000/api/bicicletas/create',
				body: aBici
			}, function(error, response, body) {
				expect(response.statusCode).toBe(200);
				expect(Bicicleta.findById(10).color).toBe("rosada");
				done();
			});
		});
	});

	describe('Post bicicletas /delete', () => {
		it('Status 204', (done) => {

			var headers = {'content-type': 'application/json'};
			var aBici = '{"id": 10, "color": "rosada", "modelo": "urbana", "lat": -34, "lng": -54}';

			Bicicleta.add(aBici);

			request.delete({
				headers: headers,
				url: 'http://localhost:3000/api/bicicletas/delete',
				body: aBici
			}, function(error, response, body) {
				expect(response.statusCode).toBe(204);
				done();
			});
		});
	});
});