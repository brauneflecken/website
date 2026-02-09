ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([441456.497014, 5914765.555030, 1975629.431838, 7393486.456065]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FederalStates_1 = new ol.format.GeoJSON();
var features_FederalStates_1 = format_FederalStates_1.readFeatures(json_FederalStates_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FederalStates_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FederalStates_1.addFeatures(features_FederalStates_1);
var lyr_FederalStates_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FederalStates_1, 
                style: style_FederalStates_1,
                popuplayertitle: 'Federal States',
                interactive: false,
                title: '<img src="styles/legend/FederalStates_1.png" /> Federal States'
            });
var format_Writers_2 = new ol.format.GeoJSON();
var features_Writers_2 = format_Writers_2.readFeatures(json_Writers_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Writers_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Writers_2.addFeatures(features_Writers_2);
var lyr_Writers_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Writers_2, 
                style: style_Writers_2,
                popuplayertitle: 'Writers',
                interactive: true,
                title: '<img src="styles/legend/Writers_2.png" /> Writers'
            });
var format_Industrialists_3 = new ol.format.GeoJSON();
var features_Industrialists_3 = format_Industrialists_3.readFeatures(json_Industrialists_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industrialists_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industrialists_3.addFeatures(features_Industrialists_3);
var lyr_Industrialists_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industrialists_3, 
                style: style_Industrialists_3,
                popuplayertitle: 'Industrialists',
                interactive: true,
                title: '<img src="styles/legend/Industrialists_3.png" /> Industrialists'
            });
var format_Hindenburg_4 = new ol.format.GeoJSON();
var features_Hindenburg_4 = format_Hindenburg_4.readFeatures(json_Hindenburg_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hindenburg_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hindenburg_4.addFeatures(features_Hindenburg_4);
var lyr_Hindenburg_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hindenburg_4, 
                style: style_Hindenburg_4,
                popuplayertitle: 'Hindenburg',
                interactive: true,
                title: '<img src="styles/legend/Hindenburg_4.png" /> Hindenburg'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_FederalStates_1.setVisible(true);lyr_Writers_2.setVisible(true);lyr_Industrialists_3.setVisible(true);lyr_Hindenburg_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_FederalStates_1,lyr_Writers_2,lyr_Industrialists_3,lyr_Hindenburg_4];
lyr_FederalStates_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'art': 'art', 'regionalschluessel': 'regionalschluessel', 'nuts': 'nuts', 'einwohner': 'einwohner', 'kataster_qkm': 'kataster_qkm', 'landeshauptstadt': 'landeshauptstadt', 'anzahl_strassen': 'anzahl_strassen', });
lyr_Writers_2.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'name', 'gemeinde': 'gemeinde', 'photo': 'photo', 'erlaeuterung': 'erlaeuterung', 'quelle': 'quelle', 'ost-west': 'ost-west', 'bundesland': 'bundesland', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_Industrialists_3.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'Name', 'gemeinde': 'Gemeinde', 'erlaeuterung': 'erlaeuterung', 'photo': 'photo', 'quelle': 'Quelle', 'ost-west': 'ost-west', 'bundesland': 'bundesland', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_Hindenburg_4.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'name', 'gemeinde': 'Gemeinde', 'photo': 'photo', 'bundesland': 'bundesland', 'ost-west': 'ost-west', 'erlaeuterung': 'erlaeuterung', 'quelle': 'Quelle', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_FederalStates_1.set('fieldImages', {'fid': '', 'name': '', 'art': '', 'regionalschluessel': '', 'nuts': '', 'einwohner': '', 'kataster_qkm': '', 'landeshauptstadt': '', 'anzahl_strassen': '', });
lyr_Writers_2.set('fieldImages', {'fid': 'TextEdit', 'qc_id': 'Range', 'name': 'TextEdit', 'gemeinde': 'TextEdit', 'photo': 'TextEdit', 'erlaeuterung': 'TextEdit', 'quelle': 'TextEdit', 'ost-west': 'TextEdit', 'bundesland': 'TextEdit', 'geehrte_person': 'TextEdit', 'erlaeuterung_en': 'TextEdit', 'quelle_en': 'TextEdit', });
lyr_Industrialists_3.set('fieldImages', {'fid': 'TextEdit', 'qc_id': 'Range', 'name': 'TextEdit', 'gemeinde': 'TextEdit', 'erlaeuterung': 'TextEdit', 'photo': 'TextEdit', 'quelle': 'TextEdit', 'ost-west': 'TextEdit', 'bundesland': 'TextEdit', 'geehrte_person': 'TextEdit', 'erlaeuterung_en': 'TextEdit', 'quelle_en': 'TextEdit', });
lyr_Hindenburg_4.set('fieldImages', {'fid': 'TextEdit', 'qc_id': 'Range', 'name': 'TextEdit', 'gemeinde': 'TextEdit', 'photo': 'TextEdit', 'bundesland': 'TextEdit', 'ost-west': 'TextEdit', 'erlaeuterung': 'TextEdit', 'quelle': 'TextEdit', 'geehrte_person': 'TextEdit', 'erlaeuterung_en': 'TextEdit', 'quelle_en': 'TextEdit', });
lyr_FederalStates_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'art': 'no label', 'regionalschluessel': 'no label', 'nuts': 'no label', 'einwohner': 'no label', 'kataster_qkm': 'no label', 'landeshauptstadt': 'no label', 'anzahl_strassen': 'no label', });
lyr_Writers_2.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'photo': 'no label', 'erlaeuterung': 'hidden field', 'quelle': 'hidden field', 'ost-west': 'hidden field', 'bundesland': 'hidden field', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'no label', 'quelle_en': 'inline label - always visible', });
lyr_Industrialists_3.set('fieldLabels', {'fid': 'header label - visible with data', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'erlaeuterung': 'hidden field', 'photo': 'no label', 'quelle': 'hidden field', 'ost-west': 'hidden field', 'bundesland': 'hidden field', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'no label', 'quelle_en': 'inline label - always visible', });
lyr_Hindenburg_4.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'photo': 'no label', 'bundesland': 'hidden field', 'ost-west': 'hidden field', 'erlaeuterung': 'hidden field', 'quelle': 'hidden field', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'no label', 'quelle_en': 'inline label - always visible', });
lyr_Hindenburg_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});