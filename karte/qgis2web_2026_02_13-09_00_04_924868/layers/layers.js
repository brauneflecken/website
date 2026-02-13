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
var format_AfDVoteSharein2025_2 = new ol.format.GeoJSON();
var features_AfDVoteSharein2025_2 = format_AfDVoteSharein2025_2.readFeatures(json_AfDVoteSharein2025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AfDVoteSharein2025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AfDVoteSharein2025_2.addFeatures(features_AfDVoteSharein2025_2);
var lyr_AfDVoteSharein2025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AfDVoteSharein2025_2, 
                style: style_AfDVoteSharein2025_2,
                popuplayertitle: 'AfD Vote Share in 2025 (%)',
                interactive: true,
    title: 'AfD Vote Share in 2025 (%)<br />\
    <img src="styles/legend/AfDVoteSharein2025_2_0.png" /> 6.3 - 15.2<br />\
    <img src="styles/legend/AfDVoteSharein2025_2_1.png" /> 15.2 - 18.2<br />\
    <img src="styles/legend/AfDVoteSharein2025_2_2.png" /> 18.2 - 20.8<br />\
    <img src="styles/legend/AfDVoteSharein2025_2_3.png" /> 20.8 - 25<br />\
    <img src="styles/legend/AfDVoteSharein2025_2_4.png" /> 25 - 46.7<br />' });
var format_OccupationZones19451949_3 = new ol.format.GeoJSON();
var features_OccupationZones19451949_3 = format_OccupationZones19451949_3.readFeatures(json_OccupationZones19451949_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OccupationZones19451949_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OccupationZones19451949_3.addFeatures(features_OccupationZones19451949_3);
var lyr_OccupationZones19451949_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OccupationZones19451949_3, 
                style: style_OccupationZones19451949_3,
                popuplayertitle: 'Occupation Zones 1945-1949',
                interactive: true,
    title: 'Occupation Zones 1945-1949<br />\
    <img src="styles/legend/OccupationZones19451949_3_0.png" /> UK<br />\
    <img src="styles/legend/OccupationZones19451949_3_1.png" /> USA<br />\
    <img src="styles/legend/OccupationZones19451949_3_2.png" /> USSR<br />\
    <img src="styles/legend/OccupationZones19451949_3_3.png" /> France<br />' });
var format_DividedGermany19491990_4 = new ol.format.GeoJSON();
var features_DividedGermany19491990_4 = format_DividedGermany19491990_4.readFeatures(json_DividedGermany19491990_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DividedGermany19491990_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DividedGermany19491990_4.addFeatures(features_DividedGermany19491990_4);
var lyr_DividedGermany19491990_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DividedGermany19491990_4, 
                style: style_DividedGermany19491990_4,
                popuplayertitle: 'Divided Germany 1949-1990',
                interactive: true,
    title: 'Divided Germany 1949-1990<br />\
    <img src="styles/legend/DividedGermany19491990_4_0.png" /> East Germany<br />\
    <img src="styles/legend/DividedGermany19491990_4_1.png" /> West Germany and West Berlin<br />' });
var format_States_5 = new ol.format.GeoJSON();
var features_States_5 = format_States_5.readFeatures(json_States_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_States_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_States_5.addFeatures(features_States_5);
var lyr_States_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_States_5, 
                style: style_States_5,
                popuplayertitle: 'States',
                interactive: false,
                title: '<img src="styles/legend/States_5.png" /> States'
            });
var format_Industrialists_6 = new ol.format.GeoJSON();
var features_Industrialists_6 = format_Industrialists_6.readFeatures(json_Industrialists_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industrialists_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industrialists_6.addFeatures(features_Industrialists_6);
var lyr_Industrialists_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industrialists_6, 
                style: style_Industrialists_6,
                popuplayertitle: 'Industrialists',
                interactive: true,
                title: '<img src="styles/legend/Industrialists_6.png" /> Industrialists'
            });
var format_Writers_7 = new ol.format.GeoJSON();
var features_Writers_7 = format_Writers_7.readFeatures(json_Writers_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Writers_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Writers_7.addFeatures(features_Writers_7);
var lyr_Writers_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Writers_7, 
                style: style_Writers_7,
                popuplayertitle: 'Writers',
                interactive: true,
                title: '<img src="styles/legend/Writers_7.png" /> Writers'
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

lyr_GoogleSatellite_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_AfDVoteSharein2025_2.setVisible(false);lyr_OccupationZones19451949_3.setVisible(false);lyr_DividedGermany19491990_4.setVisible(false);lyr_States_5.setVisible(true);lyr_Industrialists_6.setVisible(true);lyr_Writers_7.setVisible(true);lyr_Hindenburg_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_AfDVoteSharein2025_2,lyr_OccupationZones19451949_3,lyr_DividedGermany19491990_4,lyr_States_5,lyr_Industrialists_6,lyr_Writers_7,lyr_Hindenburg_8];
lyr_AfDVoteSharein2025_2.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'wahlkreisnr': 'wahlkreisnr', 'land': 'land', 'afd_zweitstimmen': 'afd_zweitstimmen', 'wahlberechtigte': 'wahlberechtigte', 'gueltigestimmen': 'gueltigestimmen', 'anteilafdwahlberech': 'anteilafdwahlberech', 'anteilafdstimmen': 'Anteil AfD-Stimmen 2025 (%)', });
lyr_OccupationZones19451949_3.set('fieldAliases', {'fid': 'fid', 'BZ': 'BZ', 'Besatzungsmacht': 'Besatzungsmacht', 'Occupying Power': 'Occupying Power', 'strassen_gesamt': 'No. of tainted names (2026): ', 'Besatzer_Label': 'Besatzer_Label', 'Occupier_Label': 'Occupier_Label', });
lyr_DividedGermany19491990_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Name_en': 'Name_en', 'Name_kurz': 'Name_kurz', });
lyr_States_5.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'art': 'art', 'regionalschluessel': 'regionalschluessel', 'nuts': 'nuts', 'einwohner': 'einwohner', 'kataster_qkm': 'kataster_qkm', 'landeshauptstadt': 'landeshauptstadt', 'anzahl_strassen': 'anzahl_strassen', });
lyr_Industrialists_6.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'name', 'gemeinde': 'gemeinde', 'erlaeuterung': 'erlaeuterung', 'photo': 'photo', 'quelle': 'quelle', 'ost-west': 'ost-west', 'bundesland': 'bundesland', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_Writers_7.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'name', 'gemeinde': 'gemeinde', 'photo': 'photo', 'erlaeuterung': 'erlaeuterung', 'quelle': 'quelle', 'ost-west': 'ost-west', 'bundesland': 'bundesland', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_Hindenburg_8.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'name', 'gemeinde': 'gemeinde', 'photo': 'photo', 'bundesland': 'bundesland', 'ost-west': 'ost-west', 'erlaeuterung': 'erlaeuterung', 'quelle': 'quelle', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_AfDVoteSharein2025_2.set('fieldImages', {'fid': '', 'qc_id': '', 'wahlkreisnr': '', 'land': '', 'afd_zweitstimmen': '', 'wahlberechtigte': '', 'gueltigestimmen': '', 'anteilafdwahlberech': '', 'anteilafdstimmen': '', });
lyr_OccupationZones19451949_3.set('fieldImages', {'fid': '', 'BZ': '', 'Besatzungsmacht': '', 'Occupying Power': '', 'strassen_gesamt': '', 'Besatzer_Label': '', 'Occupier_Label': '', });
lyr_DividedGermany19491990_4.set('fieldImages', {'fid': '', 'Name': '', 'Name_en': '', 'Name_kurz': '', });
lyr_States_5.set('fieldImages', {'fid': '', 'name': '', 'art': '', 'regionalschluessel': '', 'nuts': '', 'einwohner': '', 'kataster_qkm': '', 'landeshauptstadt': '', 'anzahl_strassen': '', });
lyr_Industrialists_6.set('fieldImages', {'fid': '', 'qc_id': '', 'name': '', 'gemeinde': '', 'erlaeuterung': '', 'photo': '', 'quelle': '', 'ost-west': '', 'bundesland': '', 'geehrte_person': '', 'erlaeuterung_en': '', 'quelle_en': '', });
lyr_Writers_7.set('fieldImages', {'fid': '', 'qc_id': '', 'name': '', 'gemeinde': '', 'photo': '', 'erlaeuterung': '', 'quelle': '', 'ost-west': '', 'bundesland': '', 'geehrte_person': '', 'erlaeuterung_en': '', 'quelle_en': '', });
lyr_Hindenburg_8.set('fieldImages', {'fid': '', 'qc_id': '', 'name': '', 'gemeinde': '', 'photo': '', 'bundesland': '', 'ost-west': '', 'erlaeuterung': '', 'quelle': '', 'geehrte_person': '', 'erlaeuterung_en': '', 'quelle_en': '', });
lyr_AfDVoteSharein2025_2.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'wahlkreisnr': 'hidden field', 'land': 'hidden field', 'afd_zweitstimmen': 'hidden field', 'wahlberechtigte': 'hidden field', 'gueltigestimmen': 'hidden field', 'anteilafdwahlberech': 'hidden field', 'anteilafdstimmen': 'no label', });
lyr_OccupationZones19451949_3.set('fieldLabels', {'fid': 'hidden field', 'BZ': 'hidden field', 'Besatzungsmacht': 'hidden field', 'Occupying Power': 'no label', 'strassen_gesamt': 'inline label - always visible', 'Besatzer_Label': 'hidden field', 'Occupier_Label': 'hidden field', });
lyr_DividedGermany19491990_4.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'Name_en': 'no label', 'Name_kurz': 'hidden field', });
lyr_States_5.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'art': 'no label', 'regionalschluessel': 'no label', 'nuts': 'no label', 'einwohner': 'no label', 'kataster_qkm': 'no label', 'landeshauptstadt': 'no label', 'anzahl_strassen': 'no label', });
lyr_Industrialists_6.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'erlaeuterung': 'hidden field', 'photo': 'no label', 'quelle': 'hidden field', 'ost-west': 'hidden field', 'bundesland': 'hidden field', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'no label', 'quelle_en': 'inline label - always visible', });
lyr_Writers_7.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'photo': 'no label', 'erlaeuterung': 'hidden field', 'quelle': 'hidden field', 'ost-west': 'hidden field', 'bundesland': 'hidden field', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'no label', 'quelle_en': 'inline label - always visible', });
lyr_Hindenburg_8.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'photo': 'no label', 'bundesland': 'hidden field', 'ost-west': 'hidden field', 'erlaeuterung': 'hidden field', 'quelle': 'hidden field', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'no label', 'quelle_en': 'inline label - always visible', });
lyr_Hindenburg_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});