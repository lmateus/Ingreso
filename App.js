class Muestra {
    constructor(depth,muestra,tipo,descripcion,spt,rpi,rqd,recobro,nivel_f){
        
        this.depth = depth
        this.muestra = muestra
        this.tipo = tipo
        this.descripcion = descripcion
        this.spt = spt
        this.rpi = rpi
        this.rqd = rqd
        this.recobro = recobro
        this.nivel_f = nivel_f
    }
}

class UI{

    resetForm(){
        document.getElementById("product-form").reset();
    }

    deleteProduct(element){
        
        if (element.name === 'delete'){
            console.log(element.name)
            element.parentElement.parentElement.remove();            
            this.showMessage('Muestra deleted','danger')
        }
    }

    showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        //Mostrando en el DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },100);
    }

    addRow(){
        
        document.getElementById("tablaRegistro")
       
        .insertRow(-1).innerHTML = `<tr>
                                        <td contenteditable="true"></td>
                                        <td contenteditable="true"></td>
                                        <td contenteditable="true"></td>
                                        <td contenteditable="true""></td>
                                        <td contenteditable="true"></td>
                                        <td contenteditable="true"></td>
                                        <td contenteditable="true"></td>
                                        <td contenteditable="true"></td>
                                        <td contenteditable="true"></td>
                                        <td> <a href="#" class= "btn btn-danger" name="delete">Borrar</a></td>
                                        <td> <a href="#" class= "btn btn-success" name="add">Agregar</a></td>
                                    </tr>
                                    `;

        var oTable = document.getElementById("tablaRegistro")
        var rowLength = oTable.rows.length;
        
        var info_muestras = {
            muestras: {}            
        }      

                //loops through rows    
        for (var i = 1; i < rowLength-1; i++){

            //gets cells of current row
            var oCells = oTable.rows.item(i).cells;

            var depth = oCells.item(0).innerHTML
            var muestra = oCells.item(1).innerHTML
            var tipo = oCells.item(2).innerHTML
            var description = oCells.item(3).innerHTML
            var spt = oCells.item(4).innerHTML
            var rpi = oCells.item(5).innerHTML
            var rqd = oCells.item(6).innerHTML
            var recobro = oCells.item(7).innerHTML
            var nivel_f = oCells.item(8).innerHTML

            const Sample = new Muestra(depth,muestra,tipo,description,spt,rpi,rqd,recobro,nivel_f)

            info_muestras.muestras[muestra] = Sample

        }
        console.log(info_muestras)



    }

}

//DOM Events
/*document.getElementById("product-form")
        .addEventListener("submit", function(e) {
            const ui = new UI();
            ui.resetForm();
            ui.showMessage('Sample added', 'success');
            ui.addRow()
            e.preventDefault();
            
});*/


document.getElementById('sample-list').addEventListener('click',function(e){
    const ui = new UI
    ui.addRow(e.target)
});

document.getElementById('tablaRegistro').addEventListener('click',function(e){
    const ui = new UI
    ui.deleteProduct(e.target)
});


document.getElementById('tablaRegistro').addEventListener('click',function(e){

    if (e.target.name === 'add'){
        const ui = new UI
        ui.addRow()
    }
    
    
});






