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

        var lyr_SatellitGoogle_1 = new ol.layer.Tile({
            'title': 'Satellit (Google)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
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
    <img src="styles/legend/AfDZweitstimmenanteil2025_2_0.png" /> 6,3 - 11,4<br />\
    <img src="styles/legend/AfDZweitstimmenanteil2025_2_1.png" /> 11,4 - 16,4<br />\
    <img src="styles/legend/AfDZweitstimmenanteil2025_2_2.png" /> 16,4 - 21,5<br />\
    <img src="styles/legend/AfDZweitstimmenanteil2025_2_3.png" /> 21,5 - 26,5<br />\
    <img src="styles/legend/AfDZweitstimmenanteil2025_2_4.png" /> 26,5 - 31,6<br />\
    <img src="styles/legend/AfDZweitstimmenanteil2025_2_5.png" /> 31,6 - 36,6<br />\
    <img src="styles/legend/AfDZweitstimmenanteil2025_2_6.png" /> 36,6 - 41,7<br />\
    <img src="styles/legend/AfDZweitstimmenanteil2025_2_7.png" /> 41,7 - 46,7<br />' });
var format_GeteiltesDeutschland_3 = new ol.format.GeoJSON();
var features_GeteiltesDeutschland_3 = format_GeteiltesDeutschland_3.readFeatures(json_GeteiltesDeutschland_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeteiltesDeutschland_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeteiltesDeutschland_3.addFeatures(features_GeteiltesDeutschland_3);
var lyr_GeteiltesDeutschland_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeteiltesDeutschland_3, 
                style: style_GeteiltesDeutschland_3,
                popuplayertitle: 'Geteiltes Deutschland',
                interactive: false,
    title: 'Geteiltes Deutschland<br />\
    <img src="styles/legend/GeteiltesDeutschland_3_0.png" /> Bundesrepublik und Westberlin<br />\
    <img src="styles/legend/GeteiltesDeutschland_3_1.png" /> DDR<br />' });
var format_Bundeslnder_4 = new ol.format.GeoJSON();
var features_Bundeslnder_4 = format_Bundeslnder_4.readFeatures(json_Bundeslnder_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bundeslnder_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bundeslnder_4.addFeatures(features_Bundeslnder_4);
var lyr_Bundeslnder_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bundeslnder_4, 
                style: style_Bundeslnder_4,
                popuplayertitle: 'Bundesländer',
                interactive: false,
                title: '<img src="styles/legend/Bundeslnder_4.png" /> Bundesländer'
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
var format_Hindenburg_7 = new ol.format.GeoJSON();
var features_Hindenburg_7 = format_Hindenburg_7.readFeatures(json_Hindenburg_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hindenburg_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hindenburg_7.addFeatures(features_Hindenburg_7);
var lyr_Hindenburg_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hindenburg_7, 
                style: style_Hindenburg_7,
                popuplayertitle: 'Hindenburg',
                interactive: true,
                title: '<img src="styles/legend/Hindenburg_7.png" /> Hindenburg'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SatellitGoogle_1.setVisible(false);lyr_AfDZweitstimmenanteil2025_2.setVisible(false);lyr_GeteiltesDeutschland_3.setVisible(false);lyr_Bundeslnder_4.setVisible(true);lyr_Schriftsteller_5.setVisible(true);lyr_Industrielle_6.setVisible(true);lyr_Hindenburg_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SatellitGoogle_1,lyr_AfDZweitstimmenanteil2025_2,lyr_GeteiltesDeutschland_3,lyr_Bundeslnder_4,lyr_Schriftsteller_5,lyr_Industrielle_6,lyr_Hindenburg_7];
lyr_AfDZweitstimmenanteil2025_2.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'wahlkreisnr': 'wahlkreisnr', 'land': 'land', 'afd_zweitstimmen': 'afd_zweitstimmen', 'wahlberechtigte': 'wahlberechtigte', 'gueltigestimmen': 'gueltigestimmen', 'anteilafdwahlberech': 'anteilafdwahlberech', 'anteilafdstimmen': 'anteilafdstimmen', });
lyr_GeteiltesDeutschland_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'neuer name': 'neuer name', 'gesamt_strassen': 'gesamt_strassen', });
lyr_Bundeslnder_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'art': 'art', 'regionalschluessel': 'regionalschluessel', 'nuts': 'nuts', 'einwohner': 'einwohner', 'kataster_qkm': 'kataster_qkm', 'landeshauptstadt': 'landeshauptstadt', 'anzahl_strassen': 'anzahl_strassen', });
lyr_Schriftsteller_5.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'name', 'gemeinde': 'gemeinde', 'photo': 'photo', 'erlaeuterung': 'erlaeuterung', 'quelle': 'Quelle', 'ost-west': 'ost-west', 'bundesland': 'bundesland', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_Industrielle_6.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'Name', 'gemeinde': 'Gemeinde', 'erlaeuterung': 'erlaeuterung', 'photo': 'photo', 'quelle': 'Quelle', 'ost-west': 'ost-west', 'bundesland': 'bundesland', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_Hindenburg_7.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'name', 'gemeinde': 'Gemeinde', 'photo': 'photo', 'bundesland': 'bundesland', 'ost-west': 'ost-west', 'erlaeuterung': 'erlaeuterung', 'quelle': 'Quelle', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_AfDZweitstimmenanteil2025_2.set('fieldImages', {'fid': '', 'qc_id': '', 'wahlkreisnr': '', 'land': '', 'afd_zweitstimmen': '', 'wahlberechtigte': '', 'gueltigestimmen': '', 'anteilafdwahlberech': '', 'anteilafdstimmen': '', });
lyr_GeteiltesDeutschland_3.set('fieldImages', {'fid': '', 'name': '', 'neuer name': '', 'gesamt_strassen': '', });
lyr_Bundeslnder_4.set('fieldImages', {'fid': '', 'name': '', 'art': '', 'regionalschluessel': '', 'nuts': '', 'einwohner': '', 'kataster_qkm': '', 'landeshauptstadt': '', 'anzahl_strassen': '', });
lyr_Schriftsteller_5.set('fieldImages', {'fid': 'TextEdit', 'qc_id': 'Range', 'name': 'TextEdit', 'gemeinde': 'TextEdit', 'photo': 'TextEdit', 'erlaeuterung': 'TextEdit', 'quelle': 'TextEdit', 'ost-west': 'TextEdit', 'bundesland': 'TextEdit', 'geehrte_person': 'TextEdit', 'erlaeuterung_en': 'TextEdit', 'quelle_en': 'TextEdit', });
lyr_Industrielle_6.set('fieldImages', {'fid': 'TextEdit', 'qc_id': 'Range', 'name': 'TextEdit', 'gemeinde': 'TextEdit', 'erlaeuterung': 'TextEdit', 'photo': 'TextEdit', 'quelle': 'TextEdit', 'ost-west': 'TextEdit', 'bundesland': 'TextEdit', 'geehrte_person': 'TextEdit', 'erlaeuterung_en': 'TextEdit', 'quelle_en': 'TextEdit', });
lyr_Hindenburg_7.set('fieldImages', {'fid': 'TextEdit', 'qc_id': 'Range', 'name': 'TextEdit', 'gemeinde': 'TextEdit', 'photo': 'TextEdit', 'bundesland': 'TextEdit', 'ost-west': 'TextEdit', 'erlaeuterung': 'TextEdit', 'quelle': 'TextEdit', 'geehrte_person': 'TextEdit', 'erlaeuterung_en': 'TextEdit', 'quelle_en': 'TextEdit', });
lyr_AfDZweitstimmenanteil2025_2.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'wahlkreisnr': 'hidden field', 'land': 'hidden field', 'afd_zweitstimmen': 'hidden field', 'wahlberechtigte': 'hidden field', 'gueltigestimmen': 'hidden field', 'anteilafdwahlberech': 'hidden field', 'anteilafdstimmen': 'no label', });
lyr_GeteiltesDeutschland_3.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'neuer name': 'hidden field', 'gesamt_strassen': 'hidden field', });
lyr_Bundeslnder_4.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'art': 'no label', 'regionalschluessel': 'no label', 'nuts': 'no label', 'einwohner': 'no label', 'kataster_qkm': 'no label', 'landeshauptstadt': 'no label', 'anzahl_strassen': 'no label', });
lyr_Schriftsteller_5.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'photo': 'no label', 'erlaeuterung': 'no label', 'quelle': 'inline label - always visible', 'ost-west': 'hidden field', 'bundesland': 'hidden field', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'hidden field', 'quelle_en': 'hidden field', });
lyr_Industrielle_6.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'erlaeuterung': 'no label', 'photo': 'no label', 'quelle': 'inline label - always visible', 'ost-west': 'hidden field', 'bundesland': 'hidden field', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'hidden field', 'quelle_en': 'hidden field', });
lyr_Hindenburg_7.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'photo': 'no label', 'bundesland': 'hidden field', 'ost-west': 'hidden field', 'erlaeuterung': 'no label', 'quelle': 'inline label - always visible', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'hidden field', 'quelle_en': 'hidden field', });
lyr_Hindenburg_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});