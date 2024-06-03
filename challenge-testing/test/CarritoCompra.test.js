const CarritoCompra= require("../index");

describe("Clase CarritoCompra", ()=>{
    const carrito= new CarritoCompra();
    const producto1= {nombre: "producto1", precio: 20};
    const producto2= {nombre: "producto2", precio: 30};

    it("CarritoCompra debe ser un array que este vacio",()=>{
        expect(Array.isArray(carrito.productos)).toBe(true);
        expect(carrito.productos).toHaveLength(0);
    });

    it("agregarProducto() agrega productos al array vacio", ()=>{
        carrito.agregarProducto(producto1);
        expect(carrito.productos).toHaveLength(1);
        expect(carrito.productos[0]).toEqual(producto1);
        carrito.agregarProducto(producto2);
        expect(carrito.productos).toHaveLength(2);
        expect(carrito.productos[1]).toEqual(producto2);
    });

    it("calcularTotal() es para calcular el total de las compras", ()=>{
        expect(carrito.calcularTotal()).toBe(50);
    });

    it("aplicarDescuento() sirve para aplicar un descuento al producto", ()=>{
        expect(carrito.aplicarDescuento(0)).toBe(50);
        expect(carrito.aplicarDescuento(50)).toBe(25);
        expect(carrito.aplicarDescuento(90)).toBe(5);
    });
});