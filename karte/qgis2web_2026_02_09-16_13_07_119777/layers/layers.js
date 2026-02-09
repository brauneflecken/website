ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([439608.095887, 5916613.956156, 1973781.030712, 7395334.857191]);
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
var format_Bundeslnder_1 = new ol.format.GeoJSON();
var features_Bundeslnder_1 = format_Bundeslnder_1.readFeatures(json_Bundeslnder_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bundeslnder_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bundeslnder_1.addFeatures(features_Bundeslnder_1);
var lyr_Bundeslnder_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bundeslnder_1, 
                style: style_Bundeslnder_1,
                popuplayertitle: 'Bundesländer',
                interactive: false,
                title: '<img src="styles/legend/Bundeslnder_1.png" /> Bundesländer'
            });
var format_Schriftsteller_2 = new ol.format.GeoJSON();
var features_Schriftsteller_2 = format_Schriftsteller_2.readFeatures(json_Schriftsteller_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schriftsteller_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schriftsteller_2.addFeatures(features_Schriftsteller_2);
var lyr_Schriftsteller_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schriftsteller_2, 
                style: style_Schriftsteller_2,
                popuplayertitle: 'Schriftsteller',
                interactive: true,
                title: '<img src="styles/legend/Schriftsteller_2.png" /> Schriftsteller'
            });
var format_Industrielle_3 = new ol.format.GeoJSON();
var features_Industrielle_3 = format_Industrielle_3.readFeatures(json_Industrielle_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industrielle_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industrielle_3.addFeatures(features_Industrielle_3);
var lyr_Industrielle_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industrielle_3, 
                style: style_Industrielle_3,
                popuplayertitle: 'Industrielle',
                interactive: true,
                title: '<img src="styles/legend/Industrielle_3.png" /> Industrielle'
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

lyr_OpenStreetMap_0.setVisible(true);lyr_Bundeslnder_1.setVisible(true);lyr_Schriftsteller_2.setVisible(true);lyr_Industrielle_3.setVisible(true);lyr_Hindenburg_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Bundeslnder_1,lyr_Schriftsteller_2,lyr_Industrielle_3,lyr_Hindenburg_4];
lyr_Bundeslnder_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'art': 'art', 'regionalschluessel': 'regionalschluessel', 'nuts': 'nuts', 'einwohner': 'einwohner', 'kataster_qkm': 'kataster_qkm', 'landeshauptstadt': 'landeshauptstadt', 'anzahl_strassen': 'anzahl_strassen', });
lyr_Schriftsteller_2.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'name', 'gemeinde': 'gemeinde', 'photo': 'photo', 'erlaeuterung': 'erlaeuterung', 'quelle': 'Quelle', 'ost-west': 'ost-west', 'bundesland': 'bundesland', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_Industrielle_3.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'Name', 'gemeinde': 'Gemeinde', 'erlaeuterung': 'erlaeuterung', 'photo': 'photo', 'quelle': 'Quelle', 'ost-west': 'ost-west', 'bundesland': 'bundesland', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_Hindenburg_4.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'name', 'gemeinde': 'Gemeinde', 'photo': 'photo', 'bundesland': 'bundesland', 'ost-west': 'ost-west', 'erlaeuterung': 'erlaeuterung', 'quelle': 'Quelle', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_Bundeslnder_1.set('fieldImages', {'fid': '', 'name': '', 'art': '', 'regionalschluessel': '', 'nuts': '', 'einwohner': '', 'kataster_qkm': '', 'landeshauptstadt': '', 'anzahl_strassen': '', });
lyr_Schriftsteller_2.set('fieldImages', {'fid': 'TextEdit', 'qc_id': 'Range', 'name': 'TextEdit', 'gemeinde': 'TextEdit', 'photo': 'TextEdit', 'erlaeuterung': 'TextEdit', 'quelle': 'TextEdit', 'ost-west': 'TextEdit', 'bundesland': 'TextEdit', 'geehrte_person': 'TextEdit', 'erlaeuterung_en': 'TextEdit', 'quelle_en': 'TextEdit', });
lyr_Industrielle_3.set('fieldImages', {'fid': 'TextEdit', 'qc_id': 'Range', 'name': 'TextEdit', 'gemeinde': 'TextEdit', 'erlaeuterung': 'TextEdit', 'photo': 'TextEdit', 'quelle': 'TextEdit', 'ost-west': 'TextEdit', 'bundesland': 'TextEdit', 'geehrte_person': 'TextEdit', 'erlaeuterung_en': 'TextEdit', 'quelle_en': 'TextEdit', });
lyr_Hindenburg_4.set('fieldImages', {'fid': 'TextEdit', 'qc_id': 'Range', 'name': 'TextEdit', 'gemeinde': 'TextEdit', 'photo': 'TextEdit', 'bundesland': 'TextEdit', 'ost-west': 'TextEdit', 'erlaeuterung': 'TextEdit', 'quelle': 'TextEdit', 'geehrte_person': 'TextEdit', 'erlaeuterung_en': 'TextEdit', 'quelle_en': 'TextEdit', });
lyr_Bundeslnder_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'art': 'no label', 'regionalschluessel': 'no label', 'nuts': 'no label', 'einwohner': 'no label', 'kataster_qkm': 'no label', 'landeshauptstadt': 'no label', 'anzahl_strassen': 'no label', });
lyr_Schriftsteller_2.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'photo': 'no label', 'erlaeuterung': 'no label', 'quelle': 'inline label - always visible', 'ost-west': 'hidden field', 'bundesland': 'hidden field', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'hidden field', 'quelle_en': 'hidden field', });
lyr_Industrielle_3.set('fieldLabels', {'fid': 'header label - visible with data', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'erlaeuterung': 'no label', 'photo': 'no label', 'quelle': 'inline label - always visible', 'ost-west': 'hidden field', 'bundesland': 'hidden field', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'hidden field', 'quelle_en': 'hidden field', });
lyr_Hindenburg_4.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'photo': 'no label', 'bundesland': 'hidden field', 'ost-west': 'hidden field', 'erlaeuterung': 'no label', 'quelle': 'inline label - always visible', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'hidden field', 'quelle_en': 'hidden field', });
lyr_Hindenburg_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});