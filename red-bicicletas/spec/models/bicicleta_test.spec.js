var Bicicleta = require('../../models/bicicleta');
beforeEach(() => { Bicicleta.allBicis = [] });

describe('Bicicleta.allBicis', () => {
	it('comienza vacia', () => {
		expect(Bicicleta.allBicis.length).toBe(0);
	})
});

describe('Bicicleta.add', () => {
	it('agregamos una', () => {
		expect(Bicicleta.allBicis.length).toBe(0);

		var a = new Bicicleta(1, 'rojo', 'urbana', [-33.4459205,-70.6500258]);
		Bicicleta.add(a);

		expect(Bicicleta.allBicis.length).toBe(1);
		expect(Bicicleta.allBicis[0]).toBe(a);
	})
});

describe('Bicicleta.findById', () => {
	it('debe devolver la bici con id 1', () => {
		expect(Bicicleta.allBicis.length).toBe(0);
		var a = new Bicicleta(1, 'rojo', 'urbana', [-33.4459205,-70.6500258]);
		var b = new Bicicleta(2, 'azul', 'urbana', [-33.4468499,-70.6429602]);

		Bicicleta.add(a);
		Bicicleta.add(b);

		var targetBici = Bicicleta.findById(1);
		expect(targetBici.id).toBe(1);
		expect(targetBici.color).toBe(a.color);
		expect(targetBici.modelo).toBe(a.modelo);
		expect(targetBici.ubicacion).toBe(a.ubicacion);
	})
});

describe('Bicicleta.removeById', () => {
	it('debe eliminar la bici con id 1', () => {
		var a = new Bicicleta(1, 'rojo', 'urbana', [-33.4459205,-70.6500258]);
		var b = new Bicicleta(2, 'azul', 'urbana', [-33.4468499,-70.6429602]);

		Bicicleta.add(a);
		Bicicleta.add(b);

		expect(Bicicleta.removeById(1)).toBeUndefined();
	})
})