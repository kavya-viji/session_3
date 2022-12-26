//stack
// function a()
// {
// console.log("hello")
// }
//
// function b()
// {
// console.log("hi");
// a()
// }
// b()

//--------deep copy----------primitive data types(copy only the value not the reference)
// var x = 10;
// var y =x; //deep copy
// y=20;
// console.log(x);
// console.log(y);

//--------shallow copy-array--------
// var x =[11,12,13,14,15];
// var y = x; //shallow copy
// y[2]=16;
// console.log(x);
// console.log(y);

//to avoid shallow copy we use spread operator
// var x =[11,12,13,14,15];
// var y = [...x]; //deep copy
// y[2]=16;
// console.log(x);
// console.log(y);

//in object using spread operator
// var obj1={
// 	a:"b",
// 	c:"d",
// };
// var obj2={...obj1};
// obj2.a="e";
// console.log(obj1);
// console.log(obj2);

//using json parse and json stringify
// var obj1={
// 	a:"b",
// 	c:"d",
// };
// var obj2=JSON.parse(JSON.stringify(obj1));
// obj2.c="f";
// console.log(obj1);
// console.log(obj2);

//using assign
// var obj1={
// 	a:"b",
// 	c:"d",
// };
// var obj2=Object.assign({},obj1)
// obj2.a="f";
// console.log(obj1);
// console.log(obj2);

//callback
// function x()
// {
// 	setTimeout(function()
// 	{
// 		console.log("hello")
// 	},3000);
//
// }
// function y()
// {
// 	setTimeout(function()
// 	{
// 		console.log("hi")
//     },2000);
// }
//
// x();
// y();

//to avoid above execution we use callback

// function x(callback)
// {
// 	setTimeout(function()
// 	{
// 		console.log("hello")
// 		callback()
// 	},3000);
//
// }
// function y()
// {
// 	setTimeout(function()
// 	{
// 		console.log("hi")
//     },2000);
// }
//
// x(y);

//multiple callback------callback hell
// function x(callback,c2,c3)
// {
// 	setTimeout(function()
// 	{
// 		console.log("hello")
// 		callback(c2,c3)
// 	},3000);

// }
// function y(c2,c3)
// {
// 	setTimeout(function()
// 	{
// 		console.log("hi")
// 		c2(c3)
//     },2000);
// }
// function z(c3)
// {
// 	setTimeout(function()
// 	{
// 		console.log("vanakkam")
// 		c3()
//     },5000);
// }
// function m()
// {
// 	setTimeout(function()
// 	{
// 		console.log("welcome")
//     },2000);
// }
// x(y,z,m);

//promise format
// function a ()
// {
// 	return new Promise(function (resolve,reject)
// 	{
// 		setTimeout(function()
// 			{
// 				console.log("helo")
// 				resolve("a");
// 		    },2000);
// 	});	
// };
// a()
// .then(function(res)
// {
// console.log("sucess", res);
// })
// .catch(function(err)
// {
// console.log("error", err);
// });

//promise
// function a ()
// {
// 	return new Promise(function (resolve,reject)
// 	{
// 		setTimeout(function()
// 			{
// 				console.log("helo")
// 				resolve("a");
// 		    },4000);
// 	});
// }
// function b ()
// {
// 	return new Promise(function (resolve,reject)
// 	{
// 		setTimeout(function()
// 			{
// 				console.log("helo")
// 				resolve("b");
// 		    },2000);
// 	});
// }
//
// a()
// .then(function(res)
// {
// console.log("sucess", res);
// b()
//     .then(function(res1)
//     {
// 	  console.log("res1", res1);
//     })
//      .catch(function(err)
//     {
// 	  console.log("err", err);
//     })
// })
// .catch(function(err)
// {
// console.log("error", err);
// });
//


























