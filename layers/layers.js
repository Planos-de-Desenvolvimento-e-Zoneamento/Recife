ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-3883421.746927, -901917.224714, -3875586.652035, -897468.844281]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ImveisTombados_1 = new ol.format.GeoJSON();
var features_ImveisTombados_1 = format_ImveisTombados_1.readFeatures(json_ImveisTombados_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImveisTombados_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImveisTombados_1.addFeatures(features_ImveisTombados_1);
var lyr_ImveisTombados_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImveisTombados_1, 
                style: style_ImveisTombados_1,
                popuplayertitle: 'Imóveis Tombados ',
                interactive: true,
                title: '<img src="styles/legend/ImveisTombados_1.png" /> Imóveis Tombados '
            });
var format_reasUrbanaseRurais_2 = new ol.format.GeoJSON();
var features_reasUrbanaseRurais_2 = format_reasUrbanaseRurais_2.readFeatures(json_reasUrbanaseRurais_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasUrbanaseRurais_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasUrbanaseRurais_2.addFeatures(features_reasUrbanaseRurais_2);
var lyr_reasUrbanaseRurais_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasUrbanaseRurais_2, 
                style: style_reasUrbanaseRurais_2,
                popuplayertitle: 'Áreas Urbanas e Rurais ',
                interactive: true,
                title: '<img src="styles/legend/reasUrbanaseRurais_2.png" /> Áreas Urbanas e Rurais '
            });
var format_FundeadourosLongoPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_3 = format_FundeadourosLongoPrazo_3.readFeatures(json_FundeadourosLongoPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FundeadourosLongoPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_3.addFeatures(features_FundeadourosLongoPrazo_3);
var lyr_FundeadourosLongoPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_3, 
                style: style_FundeadourosLongoPrazo_3,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_3.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_4 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_4 = format_FundeadourosMdioPrazo_4.readFeatures(json_FundeadourosMdioPrazo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FundeadourosMdioPrazo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_4.addFeatures(features_FundeadourosMdioPrazo_4);
var lyr_FundeadourosMdioPrazo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_4, 
                style: style_FundeadourosMdioPrazo_4,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_4.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_5 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_5 = format_FundeadourosCurtoPrazo_5.readFeatures(json_FundeadourosCurtoPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FundeadourosCurtoPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_5.addFeatures(features_FundeadourosCurtoPrazo_5);
var lyr_FundeadourosCurtoPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_5, 
                style: style_FundeadourosCurtoPrazo_5,
                popuplayertitle: 'Fundeadouros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_5.png" /> Fundeadouros - Curto Prazo '
            });
var format_FundeadourosSituaoAtual_6 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_6 = format_FundeadourosSituaoAtual_6.readFeatures(json_FundeadourosSituaoAtual_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FundeadourosSituaoAtual_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_6.addFeatures(features_FundeadourosSituaoAtual_6);
var lyr_FundeadourosSituaoAtual_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_6, 
                style: style_FundeadourosSituaoAtual_6,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_6.png" /> Fundeadouros - Situação Atual '
            });
var format_BaciasdeEvoluoLongoPrazo_7 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_7 = format_BaciasdeEvoluoLongoPrazo_7.readFeatures(json_BaciasdeEvoluoLongoPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciasdeEvoluoLongoPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_7.addFeatures(features_BaciasdeEvoluoLongoPrazo_7);
var lyr_BaciasdeEvoluoLongoPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_7, 
                style: style_BaciasdeEvoluoLongoPrazo_7,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_7.png" /> Bacias de Evolução - Longo Prazo '
            });
var format_BaciasdeEvoluoMdioPrazo_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_8 = format_BaciasdeEvoluoMdioPrazo_8.readFeatures(json_BaciasdeEvoluoMdioPrazo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciasdeEvoluoMdioPrazo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_8.addFeatures(features_BaciasdeEvoluoMdioPrazo_8);
var lyr_BaciasdeEvoluoMdioPrazo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_8, 
                style: style_BaciasdeEvoluoMdioPrazo_8,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_8.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_9 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_9 = format_BaciasdeEvoluoCurtoPrazo_9.readFeatures(json_BaciasdeEvoluoCurtoPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_9.addFeatures(features_BaciasdeEvoluoCurtoPrazo_9);
var lyr_BaciasdeEvoluoCurtoPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_9, 
                style: style_BaciasdeEvoluoCurtoPrazo_9,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_9.png" /> Bacias de Evolução - Curto Prazo '
            });
var format_BaciasdeEvoluoSituaoAtual_10 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_10 = format_BaciasdeEvoluoSituaoAtual_10.readFeatures(json_BaciasdeEvoluoSituaoAtual_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciasdeEvoluoSituaoAtual_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_10.addFeatures(features_BaciasdeEvoluoSituaoAtual_10);
var lyr_BaciasdeEvoluoSituaoAtual_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_10, 
                style: style_BaciasdeEvoluoSituaoAtual_10,
                popuplayertitle: 'Bacias de Evolução - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_10.png" /> Bacias de Evolução - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_11 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_11 = format_CanaisdeAcessoLongoPrazo_11.readFeatures(json_CanaisdeAcessoLongoPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanaisdeAcessoLongoPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_11.addFeatures(features_CanaisdeAcessoLongoPrazo_11);
var lyr_CanaisdeAcessoLongoPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_11, 
                style: style_CanaisdeAcessoLongoPrazo_11,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_11.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_12 = format_CanaisdeAcessoMdioPrazo_12.readFeatures(json_CanaisdeAcessoMdioPrazo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanaisdeAcessoMdioPrazo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_12.addFeatures(features_CanaisdeAcessoMdioPrazo_12);
var lyr_CanaisdeAcessoMdioPrazo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_12, 
                style: style_CanaisdeAcessoMdioPrazo_12,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_12.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_13 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_13 = format_CanaisdeAcessoCurtoPrazo_13.readFeatures(json_CanaisdeAcessoCurtoPrazo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanaisdeAcessoCurtoPrazo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_13.addFeatures(features_CanaisdeAcessoCurtoPrazo_13);
var lyr_CanaisdeAcessoCurtoPrazo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_13, 
                style: style_CanaisdeAcessoCurtoPrazo_13,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_13.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_14 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_14 = format_CanaisdeAcessoSituaoAtual_14.readFeatures(json_CanaisdeAcessoSituaoAtual_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanaisdeAcessoSituaoAtual_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_14.addFeatures(features_CanaisdeAcessoSituaoAtual_14);
var lyr_CanaisdeAcessoSituaoAtual_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_14, 
                style: style_CanaisdeAcessoSituaoAtual_14,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_14.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosFerroviriosInternosLongoPrazo_15 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosLongoPrazo_15 = format_AcessosFerroviriosInternosLongoPrazo_15.readFeatures(json_AcessosFerroviriosInternosLongoPrazo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosFerroviriosInternosLongoPrazo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosLongoPrazo_15.addFeatures(features_AcessosFerroviriosInternosLongoPrazo_15);
var lyr_AcessosFerroviriosInternosLongoPrazo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosLongoPrazo_15, 
                style: style_AcessosFerroviriosInternosLongoPrazo_15,
                popuplayertitle: 'Acessos Ferroviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosLongoPrazo_15.png" /> Acessos Ferroviários Internos - Longo Prazo '
            });
var format_AcessosFerroviriosInternosMdioPrazo_16 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosMdioPrazo_16 = format_AcessosFerroviriosInternosMdioPrazo_16.readFeatures(json_AcessosFerroviriosInternosMdioPrazo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosFerroviriosInternosMdioPrazo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosMdioPrazo_16.addFeatures(features_AcessosFerroviriosInternosMdioPrazo_16);
var lyr_AcessosFerroviriosInternosMdioPrazo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosMdioPrazo_16, 
                style: style_AcessosFerroviriosInternosMdioPrazo_16,
                popuplayertitle: 'Acessos Ferroviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosMdioPrazo_16.png" /> Acessos Ferroviários Internos - Médio Prazo '
            });
var format_AcessosFerroviriosInternosCurtoPrazo_17 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosCurtoPrazo_17 = format_AcessosFerroviriosInternosCurtoPrazo_17.readFeatures(json_AcessosFerroviriosInternosCurtoPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosFerroviriosInternosCurtoPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosCurtoPrazo_17.addFeatures(features_AcessosFerroviriosInternosCurtoPrazo_17);
var lyr_AcessosFerroviriosInternosCurtoPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosCurtoPrazo_17, 
                style: style_AcessosFerroviriosInternosCurtoPrazo_17,
                popuplayertitle: 'Acessos Ferroviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosCurtoPrazo_17.png" /> Acessos Ferroviários Internos - Curto Prazo '
            });
var format_AcessosFerroviriosInternosSituaoAtual_18 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosSituaoAtual_18 = format_AcessosFerroviriosInternosSituaoAtual_18.readFeatures(json_AcessosFerroviriosInternosSituaoAtual_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosFerroviriosInternosSituaoAtual_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosSituaoAtual_18.addFeatures(features_AcessosFerroviriosInternosSituaoAtual_18);
var lyr_AcessosFerroviriosInternosSituaoAtual_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosSituaoAtual_18, 
                style: style_AcessosFerroviriosInternosSituaoAtual_18,
                popuplayertitle: 'Acessos Ferroviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosSituaoAtual_18.png" /> Acessos Ferroviários Internos - Situação Atual '
            });
var format_AcessosFerroviriosExternos_19 = new ol.format.GeoJSON();
var features_AcessosFerroviriosExternos_19 = format_AcessosFerroviriosExternos_19.readFeatures(json_AcessosFerroviriosExternos_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosFerroviriosExternos_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosExternos_19.addFeatures(features_AcessosFerroviriosExternos_19);
var lyr_AcessosFerroviriosExternos_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosExternos_19, 
                style: style_AcessosFerroviriosExternos_19,
                popuplayertitle: 'Acessos Ferroviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosExternos_19.png" /> Acessos Ferroviários Externos '
            });
var format_AcessosRodoviriosInternosLongoPrazo_20 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_20 = format_AcessosRodoviriosInternosLongoPrazo_20.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_20.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_20);
var lyr_AcessosRodoviriosInternosLongoPrazo_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_20, 
                style: style_AcessosRodoviriosInternosLongoPrazo_20,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_20.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_21 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_21 = format_AcessosRodoviriosInternosMdioPrazo_21.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_21.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_21);
var lyr_AcessosRodoviriosInternosMdioPrazo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_21, 
                style: style_AcessosRodoviriosInternosMdioPrazo_21,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_21.png" /> Acessos Rodoviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosCurtoPrazo_22 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_22 = format_AcessosRodoviriosInternosCurtoPrazo_22.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_22.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_22);
var lyr_AcessosRodoviriosInternosCurtoPrazo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_22, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_22,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_22.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_23 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_23 = format_AcessosRodoviriosInternosSituaoAtual_23.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_23.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_23);
var lyr_AcessosRodoviriosInternosSituaoAtual_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_23, 
                style: style_AcessosRodoviriosInternosSituaoAtual_23,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_23.png" /> Acessos Rodoviários Internos - Situação Atual '
            });
var format_AcessosRodoviriosExternos_24 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_24 = format_AcessosRodoviriosExternos_24.readFeatures(json_AcessosRodoviriosExternos_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcessosRodoviriosExternos_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_24.addFeatures(features_AcessosRodoviriosExternos_24);
var lyr_AcessosRodoviriosExternos_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_24, 
                style: style_AcessosRodoviriosExternos_24,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_24.png" /> Acessos Rodoviários Externos '
            });
var format_reaseInstalaesAlfandegadas_25 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_25 = format_reaseInstalaesAlfandegadas_25.readFeatures(json_reaseInstalaesAlfandegadas_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaseInstalaesAlfandegadas_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_25.addFeatures(features_reaseInstalaesAlfandegadas_25);
var lyr_reaseInstalaesAlfandegadas_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_25, 
                style: style_reaseInstalaesAlfandegadas_25,
                popuplayertitle: 'Áreas e Instalações Alfandegadas ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_25.png" /> Áreas e Instalações Alfandegadas '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_30 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_30 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_30.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_30.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_30);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_30, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_30,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_30.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_31 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_31 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_31.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_31.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_31);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_31, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_31,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_31.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_32 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_32 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_32.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_32.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_32);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_32, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_32,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_32.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_33 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_33 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_33.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_33.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_33);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_33, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_33,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_33.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_34 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_34 = format_reasNoAfetassOperaesPorturiasLongoPrazo_34.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_34.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_34);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_34, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_34,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_34.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_35 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_35 = format_reasNoAfetassOperaesPorturiasMdioPrazo_35.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_35.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_35);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_35, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_35,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_35.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_36 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_36 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_36.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_36.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_36);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_36, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_36,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_36.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_37 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_37 = format_reasNoAfetassOperaesPorturiasSituaoAtual_37.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_37.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_37);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_37, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_37,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_37.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual '
            });
var format_AcostagemLongoPrazo_38 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_38 = format_AcostagemLongoPrazo_38.readFeatures(json_AcostagemLongoPrazo_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcostagemLongoPrazo_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_38.addFeatures(features_AcostagemLongoPrazo_38);
var lyr_AcostagemLongoPrazo_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_38, 
                style: style_AcostagemLongoPrazo_38,
                popuplayertitle: 'Acostagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_38.png" /> Acostagem - Longo Prazo '
            });
var format_AcostagemMdioPrazo_39 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_39 = format_AcostagemMdioPrazo_39.readFeatures(json_AcostagemMdioPrazo_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcostagemMdioPrazo_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_39.addFeatures(features_AcostagemMdioPrazo_39);
var lyr_AcostagemMdioPrazo_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_39, 
                style: style_AcostagemMdioPrazo_39,
                popuplayertitle: 'Acostagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_39.png" /> Acostagem - Médio Prazo '
            });
var format_AcostagemCurtoPrazo_40 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_40 = format_AcostagemCurtoPrazo_40.readFeatures(json_AcostagemCurtoPrazo_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcostagemCurtoPrazo_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_40.addFeatures(features_AcostagemCurtoPrazo_40);
var lyr_AcostagemCurtoPrazo_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_40, 
                style: style_AcostagemCurtoPrazo_40,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_40.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_41 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_41 = format_AcostagemSituaoAtual_41.readFeatures(json_AcostagemSituaoAtual_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcostagemSituaoAtual_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_41.addFeatures(features_AcostagemSituaoAtual_41);
var lyr_AcostagemSituaoAtual_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_41, 
                style: style_AcostagemSituaoAtual_41,
                popuplayertitle: 'Acostagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_41.png" /> Acostagem - Situação Atual '
            });
var format_TerminaisdePassageirosLongoPrazo_42 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosLongoPrazo_42 = format_TerminaisdePassageirosLongoPrazo_42.readFeatures(json_TerminaisdePassageirosLongoPrazo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerminaisdePassageirosLongoPrazo_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosLongoPrazo_42.addFeatures(features_TerminaisdePassageirosLongoPrazo_42);
var lyr_TerminaisdePassageirosLongoPrazo_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosLongoPrazo_42, 
                style: style_TerminaisdePassageirosLongoPrazo_42,
                popuplayertitle: 'Terminais de Passageiros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosLongoPrazo_42.png" /> Terminais de Passageiros - Longo Prazo '
            });
var format_TerminaisdePassageirosMdioPrazo_43 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosMdioPrazo_43 = format_TerminaisdePassageirosMdioPrazo_43.readFeatures(json_TerminaisdePassageirosMdioPrazo_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerminaisdePassageirosMdioPrazo_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosMdioPrazo_43.addFeatures(features_TerminaisdePassageirosMdioPrazo_43);
var lyr_TerminaisdePassageirosMdioPrazo_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosMdioPrazo_43, 
                style: style_TerminaisdePassageirosMdioPrazo_43,
                popuplayertitle: 'Terminais de Passageiros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosMdioPrazo_43.png" /> Terminais de Passageiros - Médio Prazo '
            });
var format_TerminaisdePassageirosCurtoPrazo_44 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosCurtoPrazo_44 = format_TerminaisdePassageirosCurtoPrazo_44.readFeatures(json_TerminaisdePassageirosCurtoPrazo_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerminaisdePassageirosCurtoPrazo_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosCurtoPrazo_44.addFeatures(features_TerminaisdePassageirosCurtoPrazo_44);
var lyr_TerminaisdePassageirosCurtoPrazo_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosCurtoPrazo_44, 
                style: style_TerminaisdePassageirosCurtoPrazo_44,
                popuplayertitle: 'Terminais de Passageiros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosCurtoPrazo_44.png" /> Terminais de Passageiros - Curto Prazo '
            });
var format_TerminaisdePassageirosSituaoAtual_45 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosSituaoAtual_45 = format_TerminaisdePassageirosSituaoAtual_45.readFeatures(json_TerminaisdePassageirosSituaoAtual_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerminaisdePassageirosSituaoAtual_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosSituaoAtual_45.addFeatures(features_TerminaisdePassageirosSituaoAtual_45);
var lyr_TerminaisdePassageirosSituaoAtual_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosSituaoAtual_45, 
                style: style_TerminaisdePassageirosSituaoAtual_45,
                popuplayertitle: 'Terminais de Passageiros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosSituaoAtual_45.png" /> Terminais de Passageiros - Situação Atual '
            });
var format_ArmazenagemLongoPrazo_46 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_46 = format_ArmazenagemLongoPrazo_46.readFeatures(json_ArmazenagemLongoPrazo_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArmazenagemLongoPrazo_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_46.addFeatures(features_ArmazenagemLongoPrazo_46);
var lyr_ArmazenagemLongoPrazo_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_46, 
                style: style_ArmazenagemLongoPrazo_46,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_46.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_47 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_47 = format_ArmazenagemMdioPrazo_47.readFeatures(json_ArmazenagemMdioPrazo_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArmazenagemMdioPrazo_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_47.addFeatures(features_ArmazenagemMdioPrazo_47);
var lyr_ArmazenagemMdioPrazo_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_47, 
                style: style_ArmazenagemMdioPrazo_47,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_47.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_48 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_48 = format_ArmazenagemCurtoPrazo_48.readFeatures(json_ArmazenagemCurtoPrazo_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArmazenagemCurtoPrazo_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_48.addFeatures(features_ArmazenagemCurtoPrazo_48);
var lyr_ArmazenagemCurtoPrazo_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_48, 
                style: style_ArmazenagemCurtoPrazo_48,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_48.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_49 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_49 = format_ArmazenagemSituaoAtual_49.readFeatures(json_ArmazenagemSituaoAtual_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArmazenagemSituaoAtual_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_49.addFeatures(features_ArmazenagemSituaoAtual_49);
var lyr_ArmazenagemSituaoAtual_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_49, 
                style: style_ArmazenagemSituaoAtual_49,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_49.png" /> Armazenagem - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_54 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_54 = format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_54.readFeatures(json_reasAfetassOperaesPorturiasArrendadasLongoPrazo_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_54.addFeatures(features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_54);
var lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_54, 
                style: style_reasAfetassOperaesPorturiasArrendadasLongoPrazo_54,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasLongoPrazo_54.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo'
            });
var format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_55 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_55 = format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_55.readFeatures(json_reasAfetassOperaesPorturiasArrendadasMdioPrazo_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_55.addFeatures(features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_55);
var lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_55, 
                style: style_reasAfetassOperaesPorturiasArrendadasMdioPrazo_55,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasMdioPrazo_55.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_56 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_56 = format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_56.readFeatures(json_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_56.addFeatures(features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_56);
var lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_56, 
                style: style_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_56,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasCurtoPrazo_56.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_57 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_57 = format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_57.readFeatures(json_reasAfetassOperaesPorturiasArrendadasSituaoAtual_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_57.addFeatures(features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_57);
var lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_57, 
                style: style_reasAfetassOperaesPorturiasArrendadasSituaoAtual_57,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasSituaoAtual_57.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual '
            });
var format_Passageiro_58 = new ol.format.GeoJSON();
var features_Passageiro_58 = format_Passageiro_58.readFeatures(json_Passageiro_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Passageiro_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiro_58.addFeatures(features_Passageiro_58);
var lyr_Passageiro_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiro_58, 
                style: style_Passageiro_58,
                popuplayertitle: 'Passageiro',
                interactive: true,
                title: '<img src="styles/legend/Passageiro_58.png" /> Passageiro'
            });
var format_Multipropsito_59 = new ol.format.GeoJSON();
var features_Multipropsito_59 = format_Multipropsito_59.readFeatures(json_Multipropsito_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Multipropsito_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_59.addFeatures(features_Multipropsito_59);
var lyr_Multipropsito_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_59, 
                style: style_Multipropsito_59,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_59.png" /> Multipropósito'
            });
var format_GranisSlidos_60 = new ol.format.GeoJSON();
var features_GranisSlidos_60 = format_GranisSlidos_60.readFeatures(json_GranisSlidos_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranisSlidos_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidos_60.addFeatures(features_GranisSlidos_60);
var lyr_GranisSlidos_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidos_60, 
                style: style_GranisSlidos_60,
                popuplayertitle: 'Granéis Sólidos',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidos_60.png" /> Granéis Sólidos'
            });
var format_GranelLquido_61 = new ol.format.GeoJSON();
var features_GranelLquido_61 = format_GranelLquido_61.readFeatures(json_GranelLquido_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranelLquido_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_61.addFeatures(features_GranelLquido_61);
var lyr_GranelLquido_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_61, 
                style: style_GranelLquido_61,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_61.png" /> Granel Líquido'
            });
var format_Passageiro_62 = new ol.format.GeoJSON();
var features_Passageiro_62 = format_Passageiro_62.readFeatures(json_Passageiro_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Passageiro_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiro_62.addFeatures(features_Passageiro_62);
var lyr_Passageiro_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiro_62, 
                style: style_Passageiro_62,
                popuplayertitle: 'Passageiro',
                interactive: true,
                title: '<img src="styles/legend/Passageiro_62.png" /> Passageiro'
            });
var format_Multipropsito_63 = new ol.format.GeoJSON();
var features_Multipropsito_63 = format_Multipropsito_63.readFeatures(json_Multipropsito_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Multipropsito_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_63.addFeatures(features_Multipropsito_63);
var lyr_Multipropsito_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_63, 
                style: style_Multipropsito_63,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_63.png" /> Multipropósito'
            });
var format_GranisSlidos_64 = new ol.format.GeoJSON();
var features_GranisSlidos_64 = format_GranisSlidos_64.readFeatures(json_GranisSlidos_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranisSlidos_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidos_64.addFeatures(features_GranisSlidos_64);
var lyr_GranisSlidos_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidos_64, 
                style: style_GranisSlidos_64,
                popuplayertitle: 'Granéis Sólidos',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidos_64.png" /> Granéis Sólidos'
            });
var format_GranelLquido_65 = new ol.format.GeoJSON();
var features_GranelLquido_65 = format_GranelLquido_65.readFeatures(json_GranelLquido_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranelLquido_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_65.addFeatures(features_GranelLquido_65);
var lyr_GranelLquido_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_65, 
                style: style_GranelLquido_65,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_65.png" /> Granel Líquido'
            });
var format_Passageiro_66 = new ol.format.GeoJSON();
var features_Passageiro_66 = format_Passageiro_66.readFeatures(json_Passageiro_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Passageiro_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiro_66.addFeatures(features_Passageiro_66);
var lyr_Passageiro_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiro_66, 
                style: style_Passageiro_66,
                popuplayertitle: 'Passageiro',
                interactive: true,
                title: '<img src="styles/legend/Passageiro_66.png" /> Passageiro'
            });
var format_Multipropsito_67 = new ol.format.GeoJSON();
var features_Multipropsito_67 = format_Multipropsito_67.readFeatures(json_Multipropsito_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Multipropsito_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_67.addFeatures(features_Multipropsito_67);
var lyr_Multipropsito_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_67, 
                style: style_Multipropsito_67,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_67.png" /> Multipropósito'
            });
var format_GranisSlidos_68 = new ol.format.GeoJSON();
var features_GranisSlidos_68 = format_GranisSlidos_68.readFeatures(json_GranisSlidos_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranisSlidos_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidos_68.addFeatures(features_GranisSlidos_68);
var lyr_GranisSlidos_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidos_68, 
                style: style_GranisSlidos_68,
                popuplayertitle: 'Granéis Sólidos',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidos_68.png" /> Granéis Sólidos'
            });
var format_GranelLquido_69 = new ol.format.GeoJSON();
var features_GranelLquido_69 = format_GranelLquido_69.readFeatures(json_GranelLquido_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranelLquido_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_69.addFeatures(features_GranelLquido_69);
var lyr_GranelLquido_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_69, 
                style: style_GranelLquido_69,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_69.png" /> Granel Líquido'
            });
var format_Passageiro_70 = new ol.format.GeoJSON();
var features_Passageiro_70 = format_Passageiro_70.readFeatures(json_Passageiro_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Passageiro_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiro_70.addFeatures(features_Passageiro_70);
var lyr_Passageiro_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiro_70, 
                style: style_Passageiro_70,
                popuplayertitle: 'Passageiro',
                interactive: true,
                title: '<img src="styles/legend/Passageiro_70.png" /> Passageiro'
            });
var format_Multipropsito_71 = new ol.format.GeoJSON();
var features_Multipropsito_71 = format_Multipropsito_71.readFeatures(json_Multipropsito_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Multipropsito_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_71.addFeatures(features_Multipropsito_71);
var lyr_Multipropsito_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_71, 
                style: style_Multipropsito_71,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_71.png" /> Multipropósito'
            });
var format_GranisSlidos_72 = new ol.format.GeoJSON();
var features_GranisSlidos_72 = format_GranisSlidos_72.readFeatures(json_GranisSlidos_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranisSlidos_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidos_72.addFeatures(features_GranisSlidos_72);
var lyr_GranisSlidos_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidos_72, 
                style: style_GranisSlidos_72,
                popuplayertitle: 'Granéis Sólidos',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidos_72.png" /> Granéis Sólidos'
            });
var format_GranelLquido_73 = new ol.format.GeoJSON();
var features_GranelLquido_73 = format_GranelLquido_73.readFeatures(json_GranelLquido_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranelLquido_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_73.addFeatures(features_GranelLquido_73);
var lyr_GranelLquido_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_73, 
                style: style_GranelLquido_73,
                popuplayertitle: 'Granel Líquido ',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_73.png" /> Granel Líquido '
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_74 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_74 = format_reasAfetassOperaesPorturiasLongoPrazo_74.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_74.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_74);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_74, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_74,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_74.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_75 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_75 = format_reasAfetassOperaesPorturiasMdioPrazo_75.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_75.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_75);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_75, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_75,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_75.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_76 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_76 = format_reasAfetassOperaesPorturiasCurtoPrazo_76.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_76.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_76);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_76, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_76,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_76.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_77 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_77 = format_reasAfetassOperaesPorturiasSituaoAtual_77.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_77.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_77);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_77, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_77,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_77.png" /> Áreas Afetas às Operações Portuárias - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizadodeRecife_78 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeRecife_78 = format_PoligonaldareadoPortoOrganizadodeRecife_78.readFeatures(json_PoligonaldareadoPortoOrganizadodeRecife_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoligonaldareadoPortoOrganizadodeRecife_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeRecife_78.addFeatures(features_PoligonaldareadoPortoOrganizadodeRecife_78);
var lyr_PoligonaldareadoPortoOrganizadodeRecife_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeRecife_78, 
                style: style_PoligonaldareadoPortoOrganizadodeRecife_78,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Recife',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeRecife_78.png" /> Poligonal da Área do Porto Organizado de Recife'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeRecife_78,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado'});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_74,lyr_reasAfetassOperaesPorturiasMdioPrazo_75,lyr_reasAfetassOperaesPorturiasCurtoPrazo_76,lyr_reasAfetassOperaesPorturiasSituaoAtual_77,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual = new ol.layer.Group({
                                layers: [lyr_Passageiro_70,lyr_Multipropsito_71,lyr_GranisSlidos_72,lyr_GranelLquido_73,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Situação Atual '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo = new ol.layer.Group({
                                layers: [lyr_Passageiro_66,lyr_Multipropsito_67,lyr_GranisSlidos_68,lyr_GranelLquido_69,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Curto Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo = new ol.layer.Group({
                                layers: [lyr_Passageiro_62,lyr_Multipropsito_63,lyr_GranisSlidos_64,lyr_GranelLquido_65,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Médio Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo = new ol.layer.Group({
                                layers: [lyr_Passageiro_58,lyr_Multipropsito_59,lyr_GranisSlidos_60,lyr_GranelLquido_61,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Longo Prazo'});
var group_reasAfetassOperaesPorturiasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_54,lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_55,lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_56,lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_57,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas '});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_46,lyr_ArmazenagemMdioPrazo_47,lyr_ArmazenagemCurtoPrazo_48,lyr_ArmazenagemSituaoAtual_49,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_TerminaldePassageiros = new ol.layer.Group({
                                layers: [lyr_TerminaisdePassageirosLongoPrazo_42,lyr_TerminaisdePassageirosMdioPrazo_43,lyr_TerminaisdePassageirosCurtoPrazo_44,lyr_TerminaisdePassageirosSituaoAtual_45,],
                                fold: 'open',
                                title: 'Terminal de Passageiros '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_38,lyr_AcostagemMdioPrazo_39,lyr_AcostagemCurtoPrazo_40,lyr_AcostagemSituaoAtual_41,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_34,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_35,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_36,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_37,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias '});
var group_reasNoAfetassOperaesPorturiasemExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_30,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_31,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_32,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_33,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta '});
var group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta '});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_25,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_24,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos'});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_20,lyr_AcessosRodoviriosInternosMdioPrazo_21,lyr_AcessosRodoviriosInternosCurtoPrazo_22,lyr_AcessosRodoviriosInternosSituaoAtual_23,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos'});
var group_AcessosFerroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosExternos_19,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Externos'});
var group_AcessosFerroviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosInternosLongoPrazo_15,lyr_AcessosFerroviriosInternosMdioPrazo_16,lyr_AcessosFerroviriosInternosCurtoPrazo_17,lyr_AcessosFerroviriosInternosSituaoAtual_18,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Internos '});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_11,lyr_CanaisdeAcessoMdioPrazo_12,lyr_CanaisdeAcessoCurtoPrazo_13,lyr_CanaisdeAcessoSituaoAtual_14,],
                                fold: 'open',
                                title: 'Canais de Acesso '});
var group_BaciadeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_7,lyr_BaciasdeEvoluoMdioPrazo_8,lyr_BaciasdeEvoluoCurtoPrazo_9,lyr_BaciasdeEvoluoSituaoAtual_10,],
                                fold: 'open',
                                title: 'Bacia de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_3,lyr_FundeadourosMdioPrazo_4,lyr_FundeadourosCurtoPrazo_5,lyr_FundeadourosSituaoAtual_6,],
                                fold: 'open',
                                title: 'Fundeadouros '});
var group_reasUrbanaseRurais = new ol.layer.Group({
                                layers: [lyr_reasUrbanaseRurais_2,],
                                fold: 'open',
                                title: 'Áreas Urbanas e Rurais '});
var group_ImveisTombados = new ol.layer.Group({
                                layers: [lyr_ImveisTombados_1,],
                                fold: 'open',
                                title: 'Imóveis Tombados '});

lyr_GoogleSatellite_0.setVisible(true);lyr_ImveisTombados_1.setVisible(false);lyr_reasUrbanaseRurais_2.setVisible(false);lyr_FundeadourosLongoPrazo_3.setVisible(false);lyr_FundeadourosMdioPrazo_4.setVisible(false);lyr_FundeadourosCurtoPrazo_5.setVisible(false);lyr_FundeadourosSituaoAtual_6.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_7.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_8.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_9.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_10.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_11.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_12.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_13.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_14.setVisible(false);lyr_AcessosFerroviriosInternosLongoPrazo_15.setVisible(false);lyr_AcessosFerroviriosInternosMdioPrazo_16.setVisible(false);lyr_AcessosFerroviriosInternosCurtoPrazo_17.setVisible(false);lyr_AcessosFerroviriosInternosSituaoAtual_18.setVisible(false);lyr_AcessosFerroviriosExternos_19.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_20.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_21.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_22.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_23.setVisible(false);lyr_AcessosRodoviriosExternos_24.setVisible(false);lyr_reaseInstalaesAlfandegadas_25.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_30.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_31.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_32.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_33.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_34.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_35.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_36.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_37.setVisible(false);lyr_AcostagemLongoPrazo_38.setVisible(false);lyr_AcostagemMdioPrazo_39.setVisible(false);lyr_AcostagemCurtoPrazo_40.setVisible(false);lyr_AcostagemSituaoAtual_41.setVisible(false);lyr_TerminaisdePassageirosLongoPrazo_42.setVisible(false);lyr_TerminaisdePassageirosMdioPrazo_43.setVisible(false);lyr_TerminaisdePassageirosCurtoPrazo_44.setVisible(false);lyr_TerminaisdePassageirosSituaoAtual_45.setVisible(false);lyr_ArmazenagemLongoPrazo_46.setVisible(false);lyr_ArmazenagemMdioPrazo_47.setVisible(false);lyr_ArmazenagemCurtoPrazo_48.setVisible(false);lyr_ArmazenagemSituaoAtual_49.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_54.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_55.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_56.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_57.setVisible(false);lyr_Passageiro_58.setVisible(false);lyr_Multipropsito_59.setVisible(false);lyr_GranisSlidos_60.setVisible(false);lyr_GranelLquido_61.setVisible(false);lyr_Passageiro_62.setVisible(false);lyr_Multipropsito_63.setVisible(false);lyr_GranisSlidos_64.setVisible(false);lyr_GranelLquido_65.setVisible(false);lyr_Passageiro_66.setVisible(false);lyr_Multipropsito_67.setVisible(false);lyr_GranisSlidos_68.setVisible(false);lyr_GranelLquido_69.setVisible(false);lyr_Passageiro_70.setVisible(false);lyr_Multipropsito_71.setVisible(false);lyr_GranisSlidos_72.setVisible(false);lyr_GranelLquido_73.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_74.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_75.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_76.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_77.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeRecife_78.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_ImveisTombados,group_reasUrbanaseRurais,group_Fundeadouros,group_BaciadeEvoluo,group_CanaisdeAcesso,group_AcessosFerroviriosInternos,group_AcessosFerroviriosExternos,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_reaseInstalaesAlfandegadas,group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta,group_reasNoAfetassOperaesPorturiasemExploraoIndireta,group_reasNoAfetassOperaesPorturias,group_Acostagem,group_TerminaldePassageiros,group_Armazenagem,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturiasArrendadas,group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_ImveisTombados_1.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'Inst.Legal': 'Instrumento Legal ', });
lyr_reasUrbanaseRurais_2.set('fieldAliases', {'Ins. Legal': 'Instrumento Legal ', 'Tipo': 'Tipo de Área ', 'Área': 'Área (m²) ', });
lyr_FundeadourosLongoPrazo_3.set('fieldAliases', {'N. Ident.': 'Número de Identificação ', 'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_FundeadourosMdioPrazo_4.set('fieldAliases', {'N. Ident.': 'Número de Identificação ', 'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_FundeadourosCurtoPrazo_5.set('fieldAliases', {'N. Ident.': 'Número de Identificação ', 'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_FundeadourosSituaoAtual_6.set('fieldAliases', {'N. Ident.': 'Número de Identificação ', 'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldAliases', {'Calado': 'Calado (m) ', 'Trecho': 'Trecho', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldAliases', {'Calado': 'Calado (m) ', 'Trecho': 'Trecho', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldAliases', {'Calado': 'Calado (m) ', 'Trecho': 'Trecho', });
lyr_AcessosFerroviriosInternosLongoPrazo_15.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosMdioPrazo_16.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosCurtoPrazo_17.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosSituaoAtual_18.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosExternos_19.set('fieldAliases', {'Linha': 'Linha', 'Operador': 'Operador', 'Trecho': 'Trecho', 'Descriçã': 'Descrição ', });
lyr_AcessosRodoviriosInternosLongoPrazo_20.set('fieldAliases', {'Ident.': 'Identificação ', 'Nº Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosMdioPrazo_21.set('fieldAliases', {'Ident.': 'Identificação ', 'Nº Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_22.set('fieldAliases', {'Ident.': 'Identificação ', 'Nº Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosSituaoAtual_23.set('fieldAliases', {'Ident.': 'Identificação ', 'Nº Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosExternos_24.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'Jurisdicao': 'Jurisdição ', });
lyr_reaseInstalaesAlfandegadas_25.set('fieldAliases', {'Ins. Legal': 'Instrumento Legal ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'T. Explo.': 'Tipo de Exploração ', 'Util. áre': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'T. Explo.': 'Tipo de Exploração ', 'Util. áre': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'T. Explo.': 'Tipo de Exploração ', 'Util. áre': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'T. Explo.': 'Tipo de Exploração ', 'Util. áre': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_30.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'T. Cessão': 'Tipo de Cessão ', 'Respons.': 'Responsável ', 'D. Início': 'Data de Início do Contrato ', 'D. Term.': 'Data de Término do Contrato', 'A. Desenv.': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_31.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'T. Cessão': 'Tipo de Cessão ', 'Respons.': 'Responsável ', 'D. Início': 'Data de Início do Contrato ', 'D. Term.': 'Data de Término do Contrato ', 'A. Desenv.': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_32.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'T. Cessão': 'Tipo de Cessão', 'Respons.': 'Responsável ', 'D. Início': 'Data de Início do Contrato ', 'D. Term.': 'Data de Término do Contrato ', 'A. Desenv.': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_33.set('fieldAliases', {'Área': 'Área (m²) ', 'Nome': 'Nome', 'T. Cessão': 'Tipo de Cessão ', 'Respons.': 'Responsável ', 'D. Início': 'Data de Início do Contrato ', 'D. Term.': 'Data de Término do Contrato ', 'A. Desenv.': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_34.set('fieldAliases', {'Área': 'Área (m²) ', 'Destinaç�': 'Destinação ', 'Nome': 'Nome', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_35.set('fieldAliases', {'Área': 'Área (m²) ', 'Destinaç�': 'Destinação ', 'Nome': 'Nome', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_36.set('fieldAliases', {'Área': 'Área (m²) ', 'Destinaç�': 'Destinação ', 'Nome': 'Nome', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_37.set('fieldAliases', {'Área': 'Área (m²) ', 'Destinaç�': 'Destinação ', 'Nome': 'Nome', });
lyr_AcostagemLongoPrazo_38.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemMdioPrazo_39.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemCurtoPrazo_40.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_AcostagemSituaoAtual_41.set('fieldAliases', {'Id. Cais': 'Identificador do Cais ', 'Id. Berço': 'Identificador do Berço ', 'C. Const.': 'Características Construtivas ', 'Comp.': 'Comprimento (m) ', 'Profund.': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per. Carga': 'Perfil de Carga ', });
lyr_TerminaisdePassageirosLongoPrazo_42.set('fieldAliases', {'Nome': 'Nome', 'A. Term.': 'Área do Terminal (m²) ', 'A. Estac.': 'Área do Estacionamento (m²) ', });
lyr_TerminaisdePassageirosMdioPrazo_43.set('fieldAliases', {'Nome': 'Nome', 'A. Term.': 'Área do Terminal (m²) ', 'A. Estac.': 'Área do Estacionamento (m²) ', });
lyr_TerminaisdePassageirosCurtoPrazo_44.set('fieldAliases', {'Nome': 'Nome', 'A. Term.': 'Área do Terminal (m²) ', 'A. Estac.': 'Área do Estacionamento (m²) ', });
lyr_TerminaisdePassageirosSituaoAtual_45.set('fieldAliases', {'Nome': 'Nome', 'A. Term.': 'Área do Terminal (m²) ', 'A. Estac.': 'Área do Estacionamento (m²) ', });
lyr_ArmazenagemLongoPrazo_46.set('fieldAliases', {'Área': 'Área (m²) ', 'T. Instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemMdioPrazo_47.set('fieldAliases', {'Área': 'Área (m²) ', 'T. Instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemCurtoPrazo_48.set('fieldAliases', {'Área': 'Área (m²) ', 'T. Instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemSituaoAtual_49.set('fieldAliases', {'Área': 'Área (m²) ', 'T. Instal.': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Volume': 'Volume (m³) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²)', 'Perfil': 'Perfil de Carga', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²)', 'Perfil': 'Perfil de Carga', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²)', 'Perfil': 'Perfil de Carga', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_54.set('fieldAliases', {'Área': 'Área (m²) ', 'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P.Prorrog.': 'Possibilidade de Prorrogação ', 'Pefil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_55.set('fieldAliases', {'Área': 'Área (m²) ', 'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P.Prorrog.': 'Possibilidade de Prorrogação ', 'Pefil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_56.set('fieldAliases', {'Área': 'Área (m²) ', 'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P.Prorrog.': 'Possibilidade de Prorrogação ', 'Pefil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_57.set('fieldAliases', {'Área': 'Área (m²) ', 'Arrend.': 'Arrendatário ', 'Nº Cont.': 'Número do Contrato ', 'D. Inicio': 'Data Início do Contrato ', 'D. Term.': 'Data do Término do Contrato ', 'P.Prorrog.': 'Possibilidade de Prorrogação ', 'Pefil': 'Perfil de Carga ', });
lyr_Passageiro_58.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Multipropsito_59.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidos_60.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelLquido_61.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Passageiro_62.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Multipropsito_63.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidos_64.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelLquido_65.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Passageiro_66.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Multipropsito_67.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidos_68.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelLquido_69.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Passageiro_70.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Multipropsito_71.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidos_72.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelLquido_73.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_74.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_75.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_76.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_77.set('fieldAliases', {'Nome': 'Nome', 'Área': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', });
lyr_PoligonaldareadoPortoOrganizadodeRecife_78.set('fieldAliases', {'Name': 'Nome ', 'Anexo': 'Instrumento Legal ', 'Tipo': 'Tipo', 'Área': 'Área (m²) ', });
lyr_ImveisTombados_1.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'Inst.Legal': 'TextEdit', });
lyr_reasUrbanaseRurais_2.set('fieldImages', {'Ins. Legal': 'TextEdit', 'Tipo': 'TextEdit', 'Área': 'TextEdit', });
lyr_FundeadourosLongoPrazo_3.set('fieldImages', {'N. Ident.': 'TextEdit', 'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosMdioPrazo_4.set('fieldImages', {'N. Ident.': 'TextEdit', 'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_5.set('fieldImages', {'N. Ident.': 'TextEdit', 'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosSituaoAtual_6.set('fieldImages', {'N. Ident.': 'TextEdit', 'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldImages', {'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldImages', {'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldImages', {'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldImages', {'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldImages', {'Calado': 'TextEdit', 'Trecho': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldImages', {'Calado': 'TextEdit', 'Trecho': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldImages', {'Calado': 'TextEdit', 'Trecho': 'TextEdit', });
lyr_AcessosFerroviriosInternosLongoPrazo_15.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosInternosMdioPrazo_16.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosInternosCurtoPrazo_17.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosInternosSituaoAtual_18.set('fieldImages', {'Nome': 'TextEdit', 'Operador': 'TextEdit', });
lyr_AcessosFerroviriosExternos_19.set('fieldImages', {'Linha': 'TextEdit', 'Operador': 'TextEdit', 'Trecho': 'TextEdit', 'Descriçã': 'TextEdit', });
lyr_AcessosRodoviriosInternosLongoPrazo_20.set('fieldImages', {'Ident.': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosMdioPrazo_21.set('fieldImages', {'Ident.': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosCurtoPrazo_22.set('fieldImages', {'Ident.': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosSituaoAtual_23.set('fieldImages', {'Ident.': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosExternos_24.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_25.set('fieldImages', {'Ins. Legal': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'T. Explo.': 'TextEdit', 'Util. áre': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'T. Explo.': 'TextEdit', 'Util. áre': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'T. Explo.': 'TextEdit', 'Util. áre': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'T. Explo.': 'TextEdit', 'Util. áre': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_30.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'T. Cessão': 'TextEdit', 'Respons.': 'TextEdit', 'D. Início': 'DateTime', 'D. Term.': 'DateTime', 'A. Desenv.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_31.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'T. Cessão': 'TextEdit', 'Respons.': 'TextEdit', 'D. Início': 'DateTime', 'D. Term.': 'DateTime', 'A. Desenv.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_32.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'T. Cessão': 'TextEdit', 'Respons.': 'TextEdit', 'D. Início': 'DateTime', 'D. Term.': 'DateTime', 'A. Desenv.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_33.set('fieldImages', {'Área': 'TextEdit', 'Nome': 'TextEdit', 'T. Cessão': 'TextEdit', 'Respons.': 'TextEdit', 'D. Início': 'DateTime', 'D. Term.': 'DateTime', 'A. Desenv.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_34.set('fieldImages', {'Área': 'TextEdit', 'Destinaç�': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_35.set('fieldImages', {'Área': 'TextEdit', 'Destinaç�': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_36.set('fieldImages', {'Área': 'TextEdit', 'Destinaç�': 'TextEdit', 'Nome': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_37.set('fieldImages', {'Área': 'TextEdit', 'Destinaç�': 'TextEdit', 'Nome': 'TextEdit', });
lyr_AcostagemLongoPrazo_38.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemMdioPrazo_39.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemCurtoPrazo_40.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemSituaoAtual_41.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_TerminaisdePassageirosLongoPrazo_42.set('fieldImages', {'Nome': 'TextEdit', 'A. Term.': 'TextEdit', 'A. Estac.': 'TextEdit', });
lyr_TerminaisdePassageirosMdioPrazo_43.set('fieldImages', {'Nome': 'TextEdit', 'A. Term.': 'TextEdit', 'A. Estac.': 'TextEdit', });
lyr_TerminaisdePassageirosCurtoPrazo_44.set('fieldImages', {'Nome': 'TextEdit', 'A. Term.': 'TextEdit', 'A. Estac.': 'TextEdit', });
lyr_TerminaisdePassageirosSituaoAtual_45.set('fieldImages', {'Nome': 'TextEdit', 'A. Term.': 'TextEdit', 'A. Estac.': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_46.set('fieldImages', {'Área': 'TextEdit', 'T. Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_47.set('fieldImages', {'Área': 'TextEdit', 'T. Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_48.set('fieldImages', {'Área': 'TextEdit', 'T. Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_49.set('fieldImages', {'Área': 'TextEdit', 'T. Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Volume': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_54.set('fieldImages', {'Área': 'TextEdit', 'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P.Prorrog.': 'TextEdit', 'Pefil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_55.set('fieldImages', {'Área': 'TextEdit', 'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P.Prorrog.': 'TextEdit', 'Pefil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_56.set('fieldImages', {'Área': 'TextEdit', 'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P.Prorrog.': 'TextEdit', 'Pefil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_57.set('fieldImages', {'Área': 'TextEdit', 'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P.Prorrog.': 'TextEdit', 'Pefil': 'TextEdit', });
lyr_Passageiro_58.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Multipropsito_59.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidos_60.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelLquido_61.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Passageiro_62.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Multipropsito_63.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidos_64.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelLquido_65.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Passageiro_66.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Multipropsito_67.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidos_68.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelLquido_69.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Passageiro_70.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Multipropsito_71.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidos_72.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelLquido_73.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_74.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_75.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_76.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_77.set('fieldImages', {'Nome': 'TextEdit', 'Área': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeRecife_78.set('fieldImages', {'Name': 'TextEdit', 'Anexo': 'TextEdit', 'Tipo': 'TextEdit', 'Área': 'TextEdit', });
lyr_ImveisTombados_1.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Inst.Legal': 'inline label - visible with data', });
lyr_reasUrbanaseRurais_2.set('fieldLabels', {'Ins. Legal': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_FundeadourosLongoPrazo_3.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_4.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_5.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_6.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Trecho': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Trecho': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldLabels', {'Calado': 'inline label - visible with data', 'Trecho': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosLongoPrazo_15.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosMdioPrazo_16.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosCurtoPrazo_17.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosSituaoAtual_18.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosExternos_19.set('fieldLabels', {'Linha': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Trecho': 'inline label - visible with data', 'Descriçã': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_20.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_21.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_22.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_23.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_24.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_25.set('fieldLabels', {'Ins. Legal': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_26.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T. Explo.': 'inline label - visible with data', 'Util. áre': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_27.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T. Explo.': 'inline label - visible with data', 'Util. áre': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_28.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T. Explo.': 'inline label - visible with data', 'Util. áre': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_29.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T. Explo.': 'inline label - visible with data', 'Util. áre': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaLongoPrazo_30.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T. Cessão': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'D. Início': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_31.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T. Cessão': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'D. Início': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_32.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T. Cessão': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'D. Início': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_33.set('fieldLabels', {'Área': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'T. Cessão': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'D. Início': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_34.set('fieldLabels', {'Área': 'inline label - visible with data', 'Destinaç�': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_35.set('fieldLabels', {'Área': 'inline label - visible with data', 'Destinaç�': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_36.set('fieldLabels', {'Área': 'inline label - visible with data', 'Destinaç�': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_37.set('fieldLabels', {'Área': 'inline label - visible with data', 'Destinaç�': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_38.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_39.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_40.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_41.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_TerminaisdePassageirosLongoPrazo_42.set('fieldLabels', {'Nome': 'inline label - visible with data', 'A. Term.': 'inline label - visible with data', 'A. Estac.': 'inline label - visible with data', });
lyr_TerminaisdePassageirosMdioPrazo_43.set('fieldLabels', {'Nome': 'inline label - visible with data', 'A. Term.': 'inline label - visible with data', 'A. Estac.': 'inline label - visible with data', });
lyr_TerminaisdePassageirosCurtoPrazo_44.set('fieldLabels', {'Nome': 'inline label - visible with data', 'A. Term.': 'inline label - visible with data', 'A. Estac.': 'inline label - visible with data', });
lyr_TerminaisdePassageirosSituaoAtual_45.set('fieldLabels', {'Nome': 'inline label - visible with data', 'A. Term.': 'inline label - visible with data', 'A. Estac.': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_46.set('fieldLabels', {'Área': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_47.set('fieldLabels', {'Área': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_48.set('fieldLabels', {'Área': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_49.set('fieldLabels', {'Área': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_54.set('fieldLabels', {'Área': 'inline label - visible with data', 'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P.Prorrog.': 'inline label - visible with data', 'Pefil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_55.set('fieldLabels', {'Área': 'inline label - visible with data', 'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P.Prorrog.': 'inline label - visible with data', 'Pefil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_56.set('fieldLabels', {'Área': 'inline label - visible with data', 'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P.Prorrog.': 'inline label - visible with data', 'Pefil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_57.set('fieldLabels', {'Área': 'inline label - visible with data', 'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P.Prorrog.': 'inline label - visible with data', 'Pefil': 'inline label - visible with data', });
lyr_Passageiro_58.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Multipropsito_59.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidos_60.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelLquido_61.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Passageiro_62.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Multipropsito_63.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidos_64.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelLquido_65.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Passageiro_66.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Multipropsito_67.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidos_68.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelLquido_69.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Passageiro_70.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Multipropsito_71.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidos_72.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelLquido_73.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_74.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_75.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_76.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_77.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeRecife_78.set('fieldLabels', {'Name': 'inline label - visible with data', 'Anexo': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeRecife_78.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});