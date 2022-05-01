
Ejercicio 1 

Que problemas detectas en la operación?

La funcion foreach nos realiza la operacion en el momento pero no se puede guardar en una variable ya que el valor seria undefined.
y parece ademas que algun camino se me podria escapar con los if.
---------------------------------------------------------------------------------------------------
2- Solución alternativa
La solucion que aportaria es utilizar map ya que con esto podria ejercer una funcion mientras que recorro el array.
Ademas que esta solucion me permitiria guardar la solucion en una const o variable (de la manera que esta no se guarda en memoria ningun resultado).

getStreaming (service,multi)={
    if(typeof service === Streaming)
    return multi*StreamingPrice;
    return 0;
}

getDownload (service,multi)={
    if(typeof service === Download)
    return multi*DownloadPrice;
    return 0;
}

getPremiun (service,multi)={
    if(typeof service === premium)
    return multi*PremiumPrice;
    return 0;
}


getTotal()=>{

    const total=0;
    this.services.map((service, index)=>{

        let multimediaContent= service.getMultimediaContent();

        let streaming+ = this.getStreaming(service,multimediaContent);
        let download+ = this.getDownload(service,multimediaContent);
        let premium+ = this.getPremiun(service,multimediaContent);


    })
}

