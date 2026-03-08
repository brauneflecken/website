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
var format_Besatzungszonen19451949_1 = new ol.format.GeoJSON();
var features_Besatzungszonen19451949_1 = format_Besatzungszonen19451949_1.readFeatures(json_Besatzungszonen19451949_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Besatzungszonen19451949_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Besatzungszonen19451949_1.addFeatures(features_Besatzungszonen19451949_1);
var lyr_Besatzungszonen19451949_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Besatzungszonen19451949_1, 
                style: style_Besatzungszonen19451949_1,
                popuplayertitle: 'Besatzungszonen 1945-1949',
                interactive: true,
    title: 'Besatzungszonen 1945-1949<br />\
    <img src="styles/legend/Besatzungszonen19451949_1_0.png" /> FR<br />\
    <img src="styles/legend/Besatzungszonen19451949_1_1.png" /> UdSSR<br />\
    <img src="styles/legend/Besatzungszonen19451949_1_2.png" /> UK<br />\
    <img src="styles/legend/Besatzungszonen19451949_1_3.png" /> USA<br />' });
var format_GeteiltesDeutschland19491990_2 = new ol.format.GeoJSON();
var features_GeteiltesDeutschland19491990_2 = format_GeteiltesDeutschland19491990_2.readFeatures(json_GeteiltesDeutschland19491990_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeteiltesDeutschland19491990_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeteiltesDeutschland19491990_2.addFeatures(features_GeteiltesDeutschland19491990_2);
var lyr_GeteiltesDeutschland19491990_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeteiltesDeutschland19491990_2, 
                style: style_GeteiltesDeutschland19491990_2,
                popuplayertitle: 'Geteiltes Deutschland 1949-1990',
                interactive: false,
    title: 'Geteiltes Deutschland 1949-1990<br />\
    <img src="styles/legend/GeteiltesDeutschland19491990_2_0.png" /> Bundesrepublik Deutschland<br />\
    <img src="styles/legend/GeteiltesDeutschland19491990_2_1.png" /> Deutsche Demokratische Republik<br />' });
var format_Bundeslnder_3 = new ol.format.GeoJSON();
var features_Bundeslnder_3 = format_Bundeslnder_3.readFeatures(json_Bundeslnder_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bundeslnder_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bundeslnder_3.addFeatures(features_Bundeslnder_3);
var lyr_Bundeslnder_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bundeslnder_3, 
                style: style_Bundeslnder_3,
                popuplayertitle: 'Bundesländer',
                interactive: false,
                title: '<img src="styles/legend/Bundeslnder_3.png" /> Bundesländer'
            });
var format_Industrielle_4 = new ol.format.GeoJSON();
var features_Industrielle_4 = format_Industrielle_4.readFeatures(json_Industrielle_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industrielle_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industrielle_4.addFeatures(features_Industrielle_4);
var lyr_Industrielle_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industrielle_4, 
                style: style_Industrielle_4,
                popuplayertitle: 'Industrielle',
                interactive: true,
                title: '<img src="styles/legend/Industrielle_4.png" /> Industrielle'
            });
var format_Schriftsteller_5 = new ol.format.GeoJSON();
var features_Schriftsteller_5 = format_Schriftsteller_5.readFeatures(json_Schriftsteller_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schriftsteller_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schriftsteller_5.addFeatures(features_Schriftsteller_5);
var lyr_Schriftsteller_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schriftsteller_5, 
                style: style_Schriftsteller_5,
                popuplayertitle: 'Schriftsteller',
                interactive: true,
                title: '<img src="styles/legend/Schriftsteller_5.png" /> Schriftsteller'
            });
var format_Hindenburg_6 = new ol.format.GeoJSON();
var features_Hindenburg_6 = format_Hindenburg_6.readFeatures(json_Hindenburg_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hindenburg_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hindenburg_6.addFeatures(features_Hindenburg_6);
var lyr_Hindenburg_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hindenburg_6, 
                style: style_Hindenburg_6,
                popuplayertitle: 'Hindenburg',
                interactive: true,
                title: '<img src="styles/legend/Hindenburg_6.png" /> Hindenburg'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Besatzungszonen19451949_1.setVisible(false);lyr_GeteiltesDeutschland19491990_2.setVisible(false);lyr_Bundeslnder_3.setVisible(true);lyr_Industrielle_4.setVisible(true);lyr_Schriftsteller_5.setVisible(true);lyr_Hindenburg_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Besatzungszonen19451949_1,lyr_GeteiltesDeutschland19491990_2,lyr_Bundeslnder_3,lyr_Industrielle_4,lyr_Schriftsteller_5,lyr_Hindenburg_6];
lyr_Besatzungszonen19451949_1.set('fieldAliases', {'fid': 'fid', 'BZ': 'BZ', 'Besatzungsmacht': 'Besatzungsmacht', 'Occupying Power': 'Occupying Power', 'strassen_gesamt': 'Anzahl belasteter Namen (2026)', 'Besatzer_Label': 'Besatzer_Label', 'Occupier_Label': 'Occupier_Label', 'pop_1946': 'pop_1946', 'streetsbymillion': 'Belastete Benennungen (2026) per Million Einwohner (1946)', });
lyr_GeteiltesDeutschland19491990_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Name_en': 'Name_en', 'Name_kurz': 'Name_kurz', });
lyr_Bundeslnder_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'art': 'art', 'regionalschluessel': 'regionalschluessel', 'nuts': 'nuts', 'einwohner': 'einwohner', 'kataster_qkm': 'kataster_qkm', 'landeshauptstadt': 'landeshauptstadt', 'anzahl_strassen': 'anzahl_strassen', });
lyr_Industrielle_4.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'name', 'gemeinde': 'gemeinde', 'erlaeuterung': 'erlaeuterung', 'photo': 'photo', 'quelle': 'Quelle', 'ost-west': 'ost-west', 'bundesland': 'bundesland', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_Schriftsteller_5.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'name', 'gemeinde': 'gemeinde', 'photo': 'photo', 'erlaeuterung': 'erlaeuterung', 'quelle': 'Quelle ', 'ost-west': 'ost-west', 'bundesland': 'bundesland', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_Hindenburg_6.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'name', 'gemeinde': 'gemeinde', 'photo': 'photo', 'bundesland': 'bundesland', 'ost-west': 'ost-west', 'erlaeuterung': 'erlaeuterung', 'quelle': 'quelle', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_Besatzungszonen19451949_1.set('fieldImages', {'fid': 'TextEdit', 'BZ': 'TextEdit', 'Besatzungsmacht': 'TextEdit', 'Occupying Power': 'TextEdit', 'strassen_gesamt': 'Range', 'Besatzer_Label': 'TextEdit', 'Occupier_Label': 'TextEdit', 'pop_1946': 'TextEdit', 'streetsbymillion': 'TextEdit', });
lyr_GeteiltesDeutschland19491990_2.set('fieldImages', {'fid': '', 'Name': '', 'Name_en': '', 'Name_kurz': '', });
lyr_Bundeslnder_3.set('fieldImages', {'fid': '', 'name': '', 'art': '', 'regionalschluessel': '', 'nuts': '', 'einwohner': '', 'kataster_qkm': '', 'landeshauptstadt': '', 'anzahl_strassen': '', });
lyr_Industrielle_4.set('fieldImages', {'fid': 'TextEdit', 'qc_id': 'Range', 'name': 'TextEdit', 'gemeinde': 'TextEdit', 'erlaeuterung': 'TextEdit', 'photo': 'TextEdit', 'quelle': 'TextEdit', 'ost-west': 'TextEdit', 'bundesland': 'TextEdit', 'geehrte_person': 'TextEdit', 'erlaeuterung_en': 'TextEdit', 'quelle_en': 'TextEdit', });
lyr_Schriftsteller_5.set('fieldImages', {'fid': 'TextEdit', 'qc_id': 'Range', 'name': 'TextEdit', 'gemeinde': 'TextEdit', 'photo': 'TextEdit', 'erlaeuterung': 'TextEdit', 'quelle': 'TextEdit', 'ost-west': 'TextEdit', 'bundesland': 'TextEdit', 'geehrte_person': 'TextEdit', 'erlaeuterung_en': 'TextEdit', 'quelle_en': 'TextEdit', });
lyr_Hindenburg_6.set('fieldImages', {'fid': '', 'qc_id': '', 'name': '', 'gemeinde': '', 'photo': '', 'bundesland': '', 'ost-west': '', 'erlaeuterung': '', 'quelle': '', 'geehrte_person': '', 'erlaeuterung_en': '', 'quelle_en': '', });
lyr_Besatzungszonen19451949_1.set('fieldLabels', {'fid': 'hidden field', 'BZ': 'hidden field', 'Besatzungsmacht': 'no label', 'Occupying Power': 'hidden field', 'strassen_gesamt': 'inline label - always visible', 'Besatzer_Label': 'hidden field', 'Occupier_Label': 'hidden field', 'pop_1946': 'hidden field', 'streetsbymillion': 'hidden field', });
lyr_GeteiltesDeutschland19491990_2.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Name_en': 'hidden field', 'Name_kurz': 'hidden field', });
lyr_Bundeslnder_3.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'art': 'no label', 'regionalschluessel': 'no label', 'nuts': 'no label', 'einwohner': 'no label', 'kataster_qkm': 'no label', 'landeshauptstadt': 'no label', 'anzahl_strassen': 'no label', });
lyr_Industrielle_4.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'erlaeuterung': 'no label', 'photo': 'no label', 'quelle': 'inline label - always visible', 'ost-west': 'hidden field', 'bundesland': 'hidden field', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'hidden field', 'quelle_en': 'hidden field', });
lyr_Schriftsteller_5.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'photo': 'no label', 'erlaeuterung': 'no label', 'quelle': 'inline label - always visible', 'ost-west': 'hidden field', 'bundesland': 'hidden field', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'hidden field', 'quelle_en': 'hidden field', });
lyr_Hindenburg_6.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'photo': 'no label', 'bundesland': 'hidden field', 'ost-west': 'hidden field', 'erlaeuterung': 'no label', 'quelle': 'inline label - always visible', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'hidden field', 'quelle_en': 'hidden field', });
lyr_Hindenburg_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});