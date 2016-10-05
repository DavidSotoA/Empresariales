var promise= require('bluebird');
var options={
	promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString='postgres://cmlwrmfe:_0TTZwBK4QfTCxusao4B_vs2FzU_W5LR@elmer.db.elephantsql.com:5432/cmlwrmfe';
var db=pgp(connectionString);

function getAllMenusFromRestaurant(req,res,next){
	var nombreRestaurante= req.params.name;
	db.any('select menu.name from menu,restaurant where menu.restaurant=restaurant.id and restaurant.name=$1',nombreRestaurante)
	.then(function(data){
		res.status(200)
		.json({
			status: 'Exitoso',
			data: data,
			message: 'Recuperados todos los restaurantes'
		});
	})
	.catch(function(err){
		return next(err);
	})
};


function getAllMenus(req,res,next){
	db.any('select * from menu')
	.then(function(data){
		res.status(200)
		.json({
			status: 'Exitoso',
			data: data,
			message: 'Recuperados todos los restaurantes'
		});
	})
	.catch(function(err){
		return next(err);
	})
};

function getMenuByName(req,res,next){
	var name = req.params.name;
	db.any('select * from menu where name=$1',name)
	.then(function(data){
		res.status(200)
		.json({
			status: 'Exitoso',
			data: data,
			message: 'Recuperado el restaurante'
		});
	})
	.catch(function(err){
		return next(err);
	})
};

function createMenu(req,res,next){
	db.none('insert into menu(name,description,price,restaurant) '+'values($1,$2,$3,$4)',
		[req.body.name, req.body.description,parseInt(req.body.price),parseInt(req.body.restaurant)])
	.then(function(){
		res.status(200)
		.json({
			status: 'Exitoso',
			message: 'Insertado el restaurante'
		});
	})
	.catch(function(err){
		return next(err);
	})
};

function removeMenu(req,res,next){
	var menuID= parseInt(req.params.id);
	db.result('delete from menu where id= $1', menuID)
	.then(function(data){
		res.status(200)
		.json({
			status: 'Exitoso',
			data: data,
			message: 'removido el restaurante'
		});
	})
	.catch(function(err){
		return next(err);
	})
};

function updateMenu(req,res,next){
	db.none('update menu set name=$1, description=$2, price=$3, restaurant=$4 where id=$5',
		[req.body.name, req.body.description, parseInt(req.body.price), parseInt(req.body.restaurant), parseInt(req.params.id)])
	.then(function(){
		res.status(200)
		.json({
			status: 'Exitoso',
			message: 'Restaurante actualizado'
		});
	})
	.catch(function(err){
		return next(err);
	})
};


function getAllRestaurants(req,res,next){
	db.any('select * from restaurant')
	.then(function(data){
		res.status(200)
		.json({
			status: 'Exitoso',
			data: data,
			message: 'Recuperados todos los restaurantes'
		});
	})
	.catch(function(err){
		return next(err);
	})
};

function getRestaurantByName(req,res,next){
	var name = req.params.name;
	db.any('select * from restaurant where name=$1',name)
	.then(function(data){
		res.status(200)
		.json({
			status: 'Exitoso',
			data: data,
			message: 'Recuperado el restaurante'
		});
	})
	.catch(function(err){
		return next(err);
	})
};

function createRestaurant(req,res,next){
	db.none('insert into restaurant(name,city,address,phone) '+'values($1,$2,$3,$4)',
		[req.body.name, req.body.city,req.body.address, parseInt(req.body.phone)])
	.then(function(){
		res.status(200)
		.json({
			status: 'Exitoso',
			message: 'Insertado el restaurante'
		});
	})
	.catch(function(err){
		return next(err);
	})
};


function removeRestaurant(req,res,next){
	var restaurantID= parseInt(req.params.id);
	db.result('delete from restaurant where id= $1', restaurantID)
	.then(function(data){
		res.status(200)
		.json({
			status: 'Exitoso',
			data: data,
			message: 'removido el restaurante'
		});
	})
	.catch(function(err){
		return next(err);
	})
};

function updateRestaurant(req,res,next){
	db.none('update restaurant set name=$1, city=$2, address=$3, phone=$4 where id=$5',
		[req.body.name, req.body.city,req.body.address, parseInt(req.body.phone),parseInt(req.params.id)])
	.then(function(){
		res.status(200)
		.json({
			status: 'Exitoso',
			message: 'Restaurante actualizado'
		});
	})
	.catch(function(err){
		return next(err);
	})
};

module.exports= {
	getAllRestaurants: getAllRestaurants,
	getRestaurantByName: getRestaurantByName,
	createRestaurant: createRestaurant,
	removeRestaurant: removeRestaurant,
	updateRestaurant: updateRestaurant,
	getAllMenus: getAllMenus,
	getMenuByName: getMenuByName,
	createMenu: createMenu,
	removeMenu: removeMenu,
	updateMenu: updateMenu,
	getAllMenusFromRestaurant: getAllMenusFromRestaurant

}