const meliService = require('../../services/meli.service');
require('../../mocks');

describe('meli.service', () => {
  it('should search items', () => {
    return meliService.search('Anillos').then(result => {
        expect(result.results).toBeDefined();
        expect(result.results.length).toBeGreaterThan(2);
        expect(result.results[0].title).toBeDefined();
        expect(result.results[0].price).toBeDefined();
        expect(result.results[0].category_id).toBeDefined();
    })
  });

  it('should get item', () => {
    return meliService.item('MLA640761245').then(item => {
        expect(item.id).toBeDefined();
        expect(item.title).toEqual('Anillos Acero Quirurgico Combo X Mayor Lote 12 Unidades');
        expect(item.category).toBeDefined();
        expect(item.description).toBeDefined();
        expect(item.description).toEqual('LEER ANTES DE OFERTAR Material: Aleación Metálica Color:Plateado o Rose Gold Medida:17-18-19mm Precio unitario (1 Unidad) Consultar stock antes de ofertar De ser necesario elegir COLOR, MODELO, TALLE, ETC y no encontrarse la opción detallada al comprar enviar por chat de MERCADOLIBRE el articulo elegido, de lo contrario se enviara al azar Una vez realizada la compra se manejara la compra por chat o Mail, NO TELEFONICAMENTE!! Formas de Pago: Solo MERCADOPAGO, MERCADOLIBRE desactivo la opción pago en efectivo para productos nuevos Formas de Envío: Mercadoenvios Consultá el costo de envío en la publicación con código postal Los tiempos de envío publicitados son pura responsabilidad del correo elegido y son estimativos no exactos (PUEDEN SUFRIR DEMORAS) Compras por Mercado Libre son solo con mercadoenvios, si queres retirar debes hacer la compra por otro medio. No realizamos envíos consolidados ya que de esa forma no va el paquete asegurado si se pierde o pasa algo en el camino. Si querés comprar por mercadolibre tenés que abonar envío para cada artículo. Sino deberías hacerlo por otro medio para que se pueda enviar todo junto abonando solo un envio ---------------------------------------------------------------------- ¿Qué es Aleación Metálica? Una aleación es una combinación de propiedades metálicas, que está compuesta de dos o más elementos metálicos sólidos. Las aleaciones están constituidas por elementos metálicos como Zinc, Hierro, Cobre, etc. Los productos son importados por lo que no podemos darte una composición de que metales contiene. Soy alérgica. ¿Puedo usar sus accesorios? No podemos dar una respuesta a esta pregunta ya que cada persona es diferente. Correcto Cuidados de los Accesorios No Mojar No rociar perfume o cualquier elemento que contenga alcohol. No guardar en lugares húmedos. (Por Ej: Baño) Extrema sudoración puede causar decoloración de los accesorios. Limpiar solo con paño seco BELLA BIJOUTERIE');
    })
  });

  it('should suggest', () => {
    return meliService.suggest('anil').then(item => {
        expect(item.q).toBeDefined();
        expect(item.q).toEqual('anil');
        expect(item.suggested_queries).toBeDefined();
        expect(item.suggested_queries.length).toBeGreaterThan(2);
    })
  });
});