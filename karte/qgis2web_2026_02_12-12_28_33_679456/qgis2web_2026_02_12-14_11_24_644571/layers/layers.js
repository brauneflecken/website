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

        var lyr_SatelliteGoogle_1 = new ol.layer.Tile({
            'title': 'Satellite (Google)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
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
    <img src="styles/legend/AfDVoteSharein2025_2_0.png" /> 6,3 - 12,1<br />\
    <img src="styles/legend/AfDVoteSharein2025_2_1.png" /> 12,1 - 17,9<br />\
    <img src="styles/legend/AfDVoteSharein2025_2_2.png" /> 17,9 - 23,6<br />\
    <img src="styles/legend/AfDVoteSharein2025_2_3.png" /> 23,6 - 29,4<br />\
    <img src="styles/legend/AfDVoteSharein2025_2_4.png" /> 29,4 - 35,2<br />\
    <img src="styles/legend/AfDVoteSharein2025_2_5.png" /> 35,2 - 41<br />\
    <img src="styles/legend/AfDVoteSharein2025_2_6.png" /> 41 - 46,7<br />' });
var format_DividedGermany19491990_3 = new ol.format.GeoJSON();
var features_DividedGermany19491990_3 = format_DividedGermany19491990_3.readFeatures(json_DividedGermany19491990_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DividedGermany19491990_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DividedGermany19491990_3.addFeatures(features_DividedGermany19491990_3);
var lyr_DividedGermany19491990_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DividedGermany19491990_3, 
                style: style_DividedGermany19491990_3,
                popuplayertitle: 'Divided Germany 1949-1990',
                interactive: true,
    title: 'Divided Germany 1949-1990<br />\
    <img src="styles/legend/DividedGermany19491990_3_0.png" /> East Germany<br />\
    <img src="styles/legend/DividedGermany19491990_3_1.png" /> West Germany and West Berlin<br />\
    <img src="styles/legend/DividedGermany19491990_3_2.png" /> <br />' });
var format_OccupationZones19451949_4 = new ol.format.GeoJSON();
var features_OccupationZones19451949_4 = format_OccupationZones19451949_4.readFeatures(json_OccupationZones19451949_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OccupationZones19451949_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OccupationZones19451949_4.addFeatures(features_OccupationZones19451949_4);
var lyr_OccupationZones19451949_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OccupationZones19451949_4, 
                style: style_OccupationZones19451949_4,
                popuplayertitle: 'Occupation Zones 1945-1949',
                interactive: true,
    title: 'Occupation Zones 1945-1949<br />\
    <img src="styles/legend/OccupationZones19451949_4_0.png" /> FR<br />\
    <img src="styles/legend/OccupationZones19451949_4_1.png" /> UdSSR<br />\
    <img src="styles/legend/OccupationZones19451949_4_2.png" /> UK<br />\
    <img src="styles/legend/OccupationZones19451949_4_3.png" /> USA<br />\
    <img src="styles/legend/OccupationZones19451949_4_4.png" /> <br />' });
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
var format_Writers_6 = new ol.format.GeoJSON();
var features_Writers_6 = format_Writers_6.readFeatures(json_Writers_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Writers_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Writers_6.addFeatures(features_Writers_6);
var lyr_Writers_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Writers_6, 
                style: style_Writers_6,
                popuplayertitle: 'Writers',
                interactive: true,
                title: '<img src="styles/legend/Writers_6.png" /> Writers'
            });
var format_Industrialists_7 = new ol.format.GeoJSON();
var features_Industrialists_7 = format_Industrialists_7.readFeatures(json_Industrialists_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industrialists_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industrialists_7.addFeatures(features_Industrialists_7);
var lyr_Industrialists_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industrialists_7, 
                style: style_Industrialists_7,
                popuplayertitle: 'Industrialists',
                interactive: true,
                title: '<img src="styles/legend/Industrialists_7.png" /> Industrialists'
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

lyr_OpenStreetMap_0.setVisible(true);lyr_SatelliteGoogle_1.setVisible(false);lyr_AfDVoteSharein2025_2.setVisible(false);lyr_DividedGermany19491990_3.setVisible(false);lyr_OccupationZones19451949_4.setVisible(false);lyr_States_5.setVisible(true);lyr_Writers_6.setVisible(true);lyr_Industrialists_7.setVisible(true);lyr_Hindenburg_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SatelliteGoogle_1,lyr_AfDVoteSharein2025_2,lyr_DividedGermany19491990_3,lyr_OccupationZones19451949_4,lyr_States_5,lyr_Writers_6,lyr_Industrialists_7,lyr_Hindenburg_8];
lyr_AfDVoteSharein2025_2.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'wahlkreisnr': 'wahlkreisnr', 'land': 'land', 'afd_zweitstimmen': 'afd_zweitstimmen', 'wahlberechtigte': 'wahlberechtigte', 'gueltigestimmen': 'gueltigestimmen', 'anteilafdwahlberech': 'anteilafdwahlberech', 'anteilafdstimmen': 'Anteil AfD-Stimmen 2025 (%)', });
lyr_DividedGermany19491990_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'neuer name': 'neuer name', 'gesamt_strassen': 'No. of tainted names (2026): ', 'name_english': 'name_english', });
lyr_OccupationZones19451949_4.set('fieldAliases', {'fid': 'fid', 'BZ': 'BZ', 'Besatzungsmacht': 'Besatzungsmacht', 'Occupying Power': 'Occupying Power', 'strassen_gesamt': 'No. of tainted names (2026): ', 'Besatzer_Label': 'Besatzer_Label', 'Occupier_Label': 'Occupier_Label', });
lyr_States_5.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'art': 'art', 'regionalschluessel': 'regionalschluessel', 'nuts': 'nuts', 'einwohner': 'einwohner', 'kataster_qkm': 'kataster_qkm', 'landeshauptstadt': 'landeshauptstadt', 'anzahl_strassen': 'anzahl_strassen', });
lyr_Writers_6.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'name', 'gemeinde': 'gemeinde', 'photo': 'photo', 'erlaeuterung': 'erlaeuterung', 'quelle': 'Quelle', 'ost-west': 'ost-west', 'bundesland': 'bundesland', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_Industrialists_7.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'Name', 'gemeinde': 'Gemeinde', 'erlaeuterung': 'erlaeuterung', 'photo': 'photo', 'quelle': 'Quelle', 'ost-west': 'ost-west', 'bundesland': 'bundesland', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_Hindenburg_8.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'name', 'gemeinde': 'Gemeinde', 'photo': 'photo', 'bundesland': 'bundesland', 'ost-west': 'ost-west', 'erlaeuterung': 'erlaeuterung', 'quelle': 'Quelle', 'geehrte_person': 'geehrte_person', 'erlaeuterung_en': 'erlaeuterung_en', 'quelle_en': 'Source', });
lyr_AfDVoteSharein2025_2.set('fieldImages', {'fid': 'TextEdit', 'qc_id': 'Range', 'wahlkreisnr': 'Range', 'land': 'TextEdit', 'afd_zweitstimmen': 'Range', 'wahlberechtigte': 'Range', 'gueltigestimmen': 'Range', 'anteilafdwahlberech': 'TextEdit', 'anteilafdstimmen': 'TextEdit', });
lyr_DividedGermany19491990_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'neuer name': 'TextEdit', 'gesamt_strassen': 'Range', 'name_english': '', });
lyr_OccupationZones19451949_4.set('fieldImages', {'fid': 'TextEdit', 'BZ': 'TextEdit', 'Besatzungsmacht': 'TextEdit', 'Occupying Power': 'TextEdit', 'strassen_gesamt': 'Range', 'Besatzer_Label': 'TextEdit', 'Occupier_Label': 'TextEdit', });
lyr_States_5.set('fieldImages', {'fid': '', 'name': '', 'art': '', 'regionalschluessel': '', 'nuts': '', 'einwohner': '', 'kataster_qkm': '', 'landeshauptstadt': '', 'anzahl_strassen': '', });
lyr_Writers_6.set('fieldImages', {'fid': 'TextEdit', 'qc_id': 'Range', 'name': 'TextEdit', 'gemeinde': 'TextEdit', 'photo': 'TextEdit', 'erlaeuterung': 'TextEdit', 'quelle': 'TextEdit', 'ost-west': 'TextEdit', 'bundesland': 'TextEdit', 'geehrte_person': 'TextEdit', 'erlaeuterung_en': 'TextEdit', 'quelle_en': 'TextEdit', });
lyr_Industrialists_7.set('fieldImages', {'fid': 'TextEdit', 'qc_id': 'Range', 'name': 'TextEdit', 'gemeinde': 'TextEdit', 'erlaeuterung': 'TextEdit', 'photo': 'TextEdit', 'quelle': 'TextEdit', 'ost-west': 'TextEdit', 'bundesland': 'TextEdit', 'geehrte_person': 'TextEdit', 'erlaeuterung_en': 'TextEdit', 'quelle_en': 'TextEdit', });
lyr_Hindenburg_8.set('fieldImages', {'fid': 'TextEdit', 'qc_id': 'Range', 'name': 'TextEdit', 'gemeinde': 'TextEdit', 'photo': 'TextEdit', 'bundesland': 'TextEdit', 'ost-west': 'TextEdit', 'erlaeuterung': 'TextEdit', 'quelle': 'TextEdit', 'geehrte_person': 'TextEdit', 'erlaeuterung_en': 'TextEdit', 'quelle_en': 'TextEdit', });
lyr_AfDVoteSharein2025_2.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'wahlkreisnr': 'hidden field', 'land': 'hidden field', 'afd_zweitstimmen': 'hidden field', 'wahlberechtigte': 'hidden field', 'gueltigestimmen': 'hidden field', 'anteilafdwahlberech': 'hidden field', 'anteilafdstimmen': 'no label', });
lyr_DividedGermany19491990_3.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'neuer name': 'hidden field', 'gesamt_strassen': 'inline label - always visible', });
lyr_OccupationZones19451949_4.set('fieldLabels', {'fid': 'hidden field', 'BZ': 'hidden field', 'Besatzungsmacht': 'hidden field', 'Occupying Power': 'no label', 'strassen_gesamt': 'inline label - always visible', 'Besatzer_Label': 'hidden field', 'Occupier_Label': 'hidden field', });
lyr_States_5.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'art': 'no label', 'regionalschluessel': 'no label', 'nuts': 'no label', 'einwohner': 'no label', 'kataster_qkm': 'no label', 'landeshauptstadt': 'no label', 'anzahl_strassen': 'no label', });
lyr_Writers_6.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'photo': 'no label', 'erlaeuterung': 'hidden field', 'quelle': 'hidden field', 'ost-west': 'hidden field', 'bundesland': 'hidden field', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'no label', 'quelle_en': 'inline label - always visible', });
lyr_Industrialists_7.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'erlaeuterung': 'hidden field', 'photo': 'no label', 'quelle': 'hidden field', 'ost-west': 'hidden field', 'bundesland': 'hidden field', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'no label', 'quelle_en': 'inline label - always visible', });
lyr_Hindenburg_8.set('fieldLabels', {'fid': 'hidden field', 'qc_id': 'hidden field', 'name': 'no label', 'gemeinde': 'no label', 'photo': 'no label', 'bundesland': 'hidden field', 'ost-west': 'hidden field', 'erlaeuterung': 'hidden field', 'quelle': 'hidden field', 'geehrte_person': 'hidden field', 'erlaeuterung_en': 'no label', 'quelle_en': 'inline label - always visible', });
lyr_Hindenburg_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});