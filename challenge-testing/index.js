class CarritoCompra{
    constructor(){
        this.productos=[];
    }

    agregarProducto(producto){
        this.productos.push(producto);
    }
    calcularTotal(){
        let total= 0;
        for(let producto of this.productos){
            total+= producto.precio;
        }
        return total;
    }

    aplicarDescuento(porcentaje){
        if(porcentaje <0 || porcentaje>100){
            return console.warn("El porcentaje de descuento debe ir entre 0 y 100. ");
        }
        const total= this.calcularTotal();
        const descuento= total*(porcentaje/100);
        const precioFinal= total - descuento;
        return precioFinal;
    }

};

module.exports=CarritoCompra;