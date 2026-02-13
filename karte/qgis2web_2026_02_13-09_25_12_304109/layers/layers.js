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

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AfDZweitstimmenanteil2025_2 = new ol.format.GeoJSON();
var features_AfDZweitstimmenanteil2025_2 = format_AfDZweitstimmenanteil2025_2.readFeatures(json_AfDZweitstimmenanteil2025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AfDZweitstimmenanteil2025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AfDZweitstimmenanteil2025_2.addFeatures(features_AfDZweitstimmenanteil2025_2);
var lyr_AfDZweitstimmenanteil2025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AfDZweitstimmenanteil2025_2, 
                style: style_AfDZweitstimmenanteil2025_2,
                popuplayertitle: 'AfD-Zweitstimmenanteil 2025 (%)',
                interactive: true,
    title: 'AfD-Zweitstimmenanteil 2025 (%)<br />\
    <img src="styles/legend/AfDZweitstimmenanteil2025_2_0.png" /> 6.3 - 15.2<br />\
    <img src="styles/legend/AfDZweitstimmenanteil2025_2_1.png" /> 15.2 - 18.2<br />\
    <img src="styles/legend/AfDZweitstimmenanteil2025_2_2.png" /> 18.2 - 20.8<br />\
    <img src="styles/legend/AfDZweitstimmenanteil2025_2_3.png" /> 20.8 - 25<br />\
    <img src="styles/legend/AfDZweitstimmenanteil2025_2_4.png" /> 25 - 46.7<br />' });
var format_Besatzungszonen19451949_3 = new ol.format.GeoJSON();
var features_Besatzungszonen19451949_3 = format_Besatzungszonen19451949_3.readFeatures(json_Besatzungszonen19451949_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Besatzungszonen19451949_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Besatzungszonen19451949_3.addFeatures(features_Besatzungszonen19451949_3);
var lyr_Besatzungszonen19451949_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Besatzungszonen19451949_3, 
                style: style_Besatzungszonen19451949_3,
                popuplayertitle: 'Besatzungszonen 1945-1949',
                interactive: true,
    title: 'Besatzungszonen 1945-1949<br />\
    <img src="styles/legend/Besatzungszonen19451949_3_0.png" /> FR<br />\
    <img src="styles/legend/Besatzungszonen19451949_3_1.png" /> UdSSR<br />\
    <img src="styles/legend/Besatzungszonen19451949_3_2.png" /> UK<br />\
    <img src="styles/legend/Besatzungszonen19451949_3_3.png" /> USA<br />' });
var format_GeteiltesDeutschland19491990_4 = new ol.format.GeoJSON();
var features_GeteiltesDeutschland19491990_4 = format_GeteiltesDeutschland19491990_4.readFeatures(json_GeteiltesDeutschland19491990_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeteiltesDeutschland19491990_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeteiltesDeutschland19491990_4.addFeatures(features_GeteiltesDeutschland19491990_4);
var lyr_GeteiltesDeutschland19491990_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeteiltesDeutschland19491990_4, 
                style: style_GeteiltesDeutschland19491990_4,
                popuplayertitle: 'Geteiltes Deutschland 1949-1990',
                interactive: true,
    title: 'Geteiltes Deutschland 1949-1990<br />\
    <img src="styles/legend/GeteiltesDeutschland19491990_4_0.png" /> Bundesrepublik Deutschland<br />\
    <img src="styles/legend/GeteiltesDeutschland19491990_4_1.png" /> Deutsche Demokratische Republik<br />' });
var format_Bundeslnder_5 = new ol.format.GeoJSON();
var features_Bundeslnder_5 = format_Bundeslnder_5.readFeatures(json_Bundeslnder_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bundeslnder_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bundeslnder_5.addFeatures(features_Bundeslnder_5);
var lyr_Bundeslnder_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bundeslnder_5, 
                style: style_Bundeslnder_5,
                popuplayertitle: 'Bundesländer',
                interactive: false,
                title: '<img src="styles/legend/Bundeslnder_5.png" /> Bundesländer'
            });
var format_Industrielle_6 = new ol.format.GeoJSON();
var features_Industrielle_6 = format_Industrielle_6.readFeatures(json_Industrielle_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industrielle_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industrielle_6.addFeatures(features_Industrielle_6);
var lyr_Industrielle_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industrielle_6, 
                style: style_Industrielle_6,
                popuplayertitle: 'Industrielle',
                interactive: true,
                title: '<img src="styles/legend/Industrielle_6.png" /> Industrielle'
            });
var format_Schriftsteller_7 = new ol.format.GeoJSON();
var features_Schriftsteller_7 = format_Schriftsteller_7.readFeatures(json_Schriftsteller_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schriftsteller_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schriftsteller_7.addFeatures(features_Schriftsteller_7);
var lyr_Schriftsteller_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schriftsteller_7, 
                style: style_Schriftsteller_7,
                popuplayertitle: 'Schriftsteller',
                interactive: true,
                title: '<img src="styles/legend/Schriftsteller_7.png" /> Schriftsteller'
            });
var format_Hindenburg_8 = new ol.format.GeoJSON();
var features_Hindenburg_8 = format_Hindenburg_8.readFeatures(json_Hindenburg_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hindenburg_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hindenburg_8.addFeatures(features_Hindenburg_8);
var lyr_Hindenburg_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hindenburg_8, 
                style: style_Hindenburg_8,
                popuplayertitle: 'Hindenburg',
                interactive: true,
                title: '<img src="styles/legend/Hindenburg_8.png" /> Hindenburg'
            });

lyr_GoogleSatellite_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_AfDZweitstimmenanteil2025_2.setVisible(false);lyr_Besatzungszonen19451949_3.setVisible(false);lyr_GeteiltesDeutschland19491990_4.setVisible(false);lyr_Bundeslnder_5.setVisible(true);lyr_Industrielle_6.setVisible(true);lyr_Schriftsteller_7.setVisible(true);lyr_Hindenburg_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_AfDZweitstimmenanteil2025_2,lyr_Besatzungszonen19451949_3,lyr_GeteiltesDeutschland19491990_4,lyr_Bundeslnder_5,lyr_Industrielle_6,lyr_Schriftsteller_7,lyr_Hindenburg_8];
lyr_AfDZweitstimmenanteil2025_2.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'wahlkreisnr': 'wahlkreisnr', 'land': 'land', 'afd_zweitstimmen': 'afd_zweitstimmen', 'wahlberechtigte': 'wahlberechtigte', 'gueltigestimmen': 'gueltigestimmen', 'anteilafdwahlberech': 'anteilafdwahlberech', 'anteilafdstimmen': 'Anteil AfD-Stimmen 2025 (%)', });
lyr_Besatzungszonen19451949_3.set('fieldAliases', {'fid': 'fid', 'BZ': 'BZ', 'Besatzungsmacht': 'Besatzungsmacht', 'Occupying Power': 'Occupying Power', 'strassen_gesamt': 'Anzahl belasteter Benennungen (2026): ', 'Besatzer_Label': 'Besatzer_Label', 'Occupier_Label': 'Occupier_Label', });
lyr_GeteiltesDeutschland19491990_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Name_en': 'Name_en', 'Name_kurz': 'Name_kurz', });
lyr_Bundeslnder_5.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'art': 'art', 'regionalschluessel': 'regionalschluessel', 'nuts': 'nuts', 'einwohner': 'einwohner', 'kataster_qkm': 'kataster_qkm', 'landeshauptstadt': 'landeshauptstadt', 'anzahl_strassen': 'anzahl_strassen', });
lyr_Industrielle_6.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'name', 'gemeinde': 'gemeinde', 'erlaeuterung': 'erlaeuterung', 'photo': 'photo', 'quelle': 'Quelle', 'ost-west': 'ost-west', 'bundesland': 'bundesland', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_Schriftsteller_7.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'name', 'gemeinde': 'gemeinde', 'photo': 'photo', 'erlaeuterung': 'erlaeuterung', 'quelle': 'Quelle ', 'ost-west': 'ost-west', 'bundesland': 'bundesland', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_Hindenburg_8.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'name', 'gemeinde': 'gemeinde', 'photo': 'photo', 'bundesland': 'bundesland', 'ost-west': 'ost-west', 'erlaeuterung': 'erlaeuterung', 'quelle': 'quelle', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_AfDZweitstimmenanteil2025_2.set('fieldImages', {'fid': '', 'qc_id': '', 'wahlkreisnr': '', 'land': '', 'afd_zweitstimmen': '', 'wahlberechtigte': '', 'gueltigestimmen': '', 'anteilafdwahlberech': '', 'anteilafdstimmen': '', });
lyr_Besatzungszonen19451949_3.set('fieldImages', {'fid': 'TextEdit', 'BZ': 'TextEdit', 'Besatzungsmacht': 'TextEdit', 'Occupying Power': 'TextEdit', 'strassen_gesamt': 'Range', 'Besatzer_Label': 'TextEdit', 'Occupier_Label': 'TextEdit', });
lyr_GeteiltesDeutschland19491990_4.set('fieldImages', {'fid': '', 'Name': '', 'Name_en': '', 'Name_kurz': '', });
lyr_Bundeslnder_5.set('fieldImages', {'fid': '', 'name': '', 'art': '', 'regionalschluessel': '', 'nuts': '', 'einwohner': '', 'kataster_qkm': '', 'landeshauptstadt': '', 'anzahl_strassen': '', });
lyr_Industrielle_6.set('fieldImages', {'fid': 'TextEdit', 'qc_id': 'Range', 'name': 'TextEdit', 'gemeinde': 'TextEdit', 'erlaeuterung': 'TextEdit', 'photo': 'TextEdit', 'quelle': 'TextEdit', 'ost-west': 'TextEdit', 'bundesland': 'TextEdit', 'geehrte_person': 'TextEdit', 'erlaeuterung_en': 'TextEdit', 'quelle_en': 'TextEdit', });
lyr_Schriftsteller_7.set('fieldImages', {'fid': 'TextEdit', 'qc_id': 'Range', 'name': 'TextEdit', 'gemeinde': 'TextEdit', 'photo': 'TextEdit', 'erlaeuterung': 'TextEdit', 'quelle': 'TextEdit', 'ost-west': 'TextEdit', 'bundesland': 'TextEdit', 'geehrte_person': 'TextEdit', 'erlaeuterung_en': 'TextEdit', 'quelle_en': 'TextEdit', });
lyr_Hindenburg_8.set('fieldImages', {'fid': '', 'qc_id': '', 'name': '', 'gemeinde': '', 'photo': '', 'bundesland': '', 'ost-west': '', 'erlaeuterung': '', 'quelle': '', 'geehrte_person': '', 'erlaeuterung_en': '', 'quelle_en': '', });
lyr_AfDZweitstimmenanteil2025_2.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'wahlkreisnr': 'hidden field', 'land': 'hidden field', 'afd_zweitstimmen': 'hidden field', 'wahlberechtigte': 'hidden field', 'gueltigestimmen': 'hidden field', 'anteilafdwahlberech': 'hidden field', 'anteilafdstimmen': 'no label', });
lyr_Besatzungszonen19451949_3.set('fieldLabels', {'fid': 'hidden field', 'BZ': 'hidden field', 'Besatzungsmacht': 'no label', 'Occupying Power': 'hidden field', 'strassen_gesamt': 'inline label - always visible', 'Besatzer_Label': 'hidden field', 'Occupier_Label': 'hidden field', });
lyr_GeteiltesDeutschland19491990_4.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Name_en': 'hidden field', 'Name_kurz': 'hidden field', });
lyr_Bundeslnder_5.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'art': 'no label', 'regionalschluessel': 'no label', 'nuts': 'no label', 'einwohner': 'no label', 'kataster_qkm': 'no label', 'landeshauptstadt': 'no label', 'anzahl_strassen': 'no label', });
lyr_Industrielle_6.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'erlaeuterung': 'no label', 'photo': 'no label', 'quelle': 'inline label - always visible', 'ost-west': 'hidden field', 'bundesland': 'hidden field', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'hidden field', 'quelle_en': 'hidden field', });
lyr_Schriftsteller_7.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'photo': 'no label', 'erlaeuterung': 'no label', 'quelle': 'inline label - always visible', 'ost-west': 'hidden field', 'bundesland': 'hidden field', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'hidden field', 'quelle_en': 'hidden field', });
lyr_Hindenburg_8.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'photo': 'no label', 'bundesland': 'hidden field', 'ost-west': 'hidden field', 'erlaeuterung': 'no label', 'quelle': 'inline label - always visible', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'hidden field', 'quelle_en': 'hidden field', });
lyr_Hindenburg_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});