var wms_layers = [];


        var lyr_ReferenceMap_0 = new ol.layer.Tile({
            'title': 'Reference Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_PopulationDensity_1 = new ol.format.GeoJSON();
var features_PopulationDensity_1 = format_PopulationDensity_1.readFeatures(json_PopulationDensity_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulationDensity_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulationDensity_1.addFeatures(features_PopulationDensity_1);
var lyr_PopulationDensity_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PopulationDensity_1, 
                style: style_PopulationDensity_1,
                popuplayertitle: "Population Density",
                interactive: false,
    title: 'Population Density<br />\
    <img src="styles/legend/PopulationDensity_1_0.png" /> Less Than 392<br />\
    <img src="styles/legend/PopulationDensity_1_1.png" /> 392 - 436<br />\
    <img src="styles/legend/PopulationDensity_1_2.png" /> 436 - 468<br />\
    <img src="styles/legend/PopulationDensity_1_3.png" /> 468 - 729<br />\
    <img src="styles/legend/PopulationDensity_1_4.png" /> More Than 729 <br />'
        });
var format_TikapurBoundary_2 = new ol.format.GeoJSON();
var features_TikapurBoundary_2 = format_TikapurBoundary_2.readFeatures(json_TikapurBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TikapurBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TikapurBoundary_2.addFeatures(features_TikapurBoundary_2);
var lyr_TikapurBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TikapurBoundary_2, 
                style: style_TikapurBoundary_2,
                popuplayertitle: "Tikapur Boundary",
                interactive: false,
                title: '<img src="styles/legend/TikapurBoundary_2.png" /> Tikapur Boundary'
            });
var format_RoadNetwork_3 = new ol.format.GeoJSON();
var features_RoadNetwork_3 = format_RoadNetwork_3.readFeatures(json_RoadNetwork_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadNetwork_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadNetwork_3.addFeatures(features_RoadNetwork_3);
var lyr_RoadNetwork_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadNetwork_3, 
                style: style_RoadNetwork_3,
                popuplayertitle: "Road Network",
                interactive: false,
                title: '<img src="styles/legend/RoadNetwork_3.png" /> Road Network'
            });
var format_Tikapur_population_size_4 = new ol.format.GeoJSON();
var features_Tikapur_population_size_4 = format_Tikapur_population_size_4.readFeatures(json_Tikapur_population_size_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tikapur_population_size_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tikapur_population_size_4.addFeatures(features_Tikapur_population_size_4);
var lyr_Tikapur_population_size_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tikapur_population_size_4, 
                style: style_Tikapur_population_size_4,
                popuplayertitle: "Tikapur_population_size",
                interactive: true,
    title: 'Tikapur_population_size<br />\
    <img src="styles/legend/Tikapur_population_size_4_0.png" /> Less than  4861<br />\
    <img src="styles/legend/Tikapur_population_size_4_1.png" /> 4861 - 4960<br />\
    <img src="styles/legend/Tikapur_population_size_4_2.png" /> 4960 - 5159<br />\
    <img src="styles/legend/Tikapur_population_size_4_3.png" /> 5159 - 7270<br />\
    <img src="styles/legend/Tikapur_population_size_4_4.png" /> More than 7270<br />'
        });

lyr_ReferenceMap_0.setVisible(true);lyr_PopulationDensity_1.setVisible(true);lyr_TikapurBoundary_2.setVisible(true);lyr_RoadNetwork_3.setVisible(true);lyr_Tikapur_population_size_4.setVisible(true);
var layersList = [lyr_ReferenceMap_0,lyr_PopulationDensity_1,lyr_TikapurBoundary_2,lyr_RoadNetwork_3,lyr_Tikapur_population_size_4];
lyr_PopulationDensity_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WARD': 'WARD', 'Ward_1': 'Ward_1', 'T_popn': 'T_popn', 'male': 'male', 'female': 'female', 'area': 'area', 'Pop_densty': 'Pop_densty', });
lyr_TikapurBoundary_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WARD': 'WARD', 'Ward_1': 'Ward_1', 'T_popn': 'T_popn', 'male': 'male', 'female': 'female', 'area': 'area', 'Pop_densty': 'Pop_densty', });
lyr_RoadNetwork_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'level': 'level', 'motorroad': 'motorroad', 'vehicle': 'vehicle', 'waterway': 'waterway', 'motor_vehi': 'motor_vehi', 'incline': 'incline', 'horse': 'horse', 'access': 'access', 'descriptio': 'descriptio', 'lane_marki': 'lane_marki', 'lit': 'lit', 'segregated': 'segregated', 'value': 'value', 'seasonal': 'seasonal', 'ford': 'ford', 'natural': 'natural', 'service': 'service', 'noname': 'noname', 'man_made': 'man_made', 'foot': 'foot', 'bicycle': 'bicycle', 'tunnel': 'tunnel', 'cutting': 'cutting', 'oneway': 'oneway', 'trail_visi': 'trail_visi', 'route': 'route', 'tracktype': 'tracktype', 'bridge_str': 'bridge_str', 'width_shou': 'width_shou', 'width_carr': 'width_carr', 'width_ROW': 'width_ROW', 'width': 'width', 'smoothness': 'smoothness', 'project_ur': 'project_ur', 'condition': 'condition', 'access_sta': 'access_sta', 'junction': 'junction', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'ref_old': 'ref_old', 'ref': 'ref', 'surface': 'surface', 'lanes': 'lanes', });
lyr_Tikapur_population_size_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WARD': 'Ward number', 'Ward_1': 'Ward_1', 'T_popn': 'Total Population', 'male': 'Male', 'female': 'Female', 'area': 'Area', 'Pop_densty': 'Density', });
lyr_PopulationDensity_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WARD': 'TextEdit', 'Ward_1': 'TextEdit', 'T_popn': 'TextEdit', 'male': 'TextEdit', 'female': 'TextEdit', 'area': 'TextEdit', 'Pop_densty': 'TextEdit', });
lyr_TikapurBoundary_2.set('fieldImages', {'OBJECTID': 'Range', 'WARD': 'TextEdit', 'Ward_1': 'TextEdit', 'T_popn': 'Range', 'male': 'Range', 'female': 'Range', 'area': 'TextEdit', 'Pop_densty': 'TextEdit', });
lyr_RoadNetwork_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'level': 'TextEdit', 'motorroad': 'TextEdit', 'vehicle': 'TextEdit', 'waterway': 'TextEdit', 'motor_vehi': 'TextEdit', 'incline': 'TextEdit', 'horse': 'TextEdit', 'access': 'TextEdit', 'descriptio': 'TextEdit', 'lane_marki': 'TextEdit', 'lit': 'TextEdit', 'segregated': 'TextEdit', 'value': 'TextEdit', 'seasonal': 'TextEdit', 'ford': 'TextEdit', 'natural': 'TextEdit', 'service': 'TextEdit', 'noname': 'TextEdit', 'man_made': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'tunnel': 'TextEdit', 'cutting': 'TextEdit', 'oneway': 'TextEdit', 'trail_visi': 'TextEdit', 'route': 'TextEdit', 'tracktype': 'TextEdit', 'bridge_str': 'TextEdit', 'width_shou': 'TextEdit', 'width_carr': 'TextEdit', 'width_ROW': 'TextEdit', 'width': 'TextEdit', 'smoothness': 'TextEdit', 'project_ur': 'TextEdit', 'condition': 'TextEdit', 'access_sta': 'TextEdit', 'junction': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'ref_old': 'TextEdit', 'ref': 'TextEdit', 'surface': 'TextEdit', 'lanes': 'TextEdit', });
lyr_Tikapur_population_size_4.set('fieldImages', {'OBJECTID': 'Hidden', 'WARD': 'Hidden', 'Ward_1': 'TextEdit', 'T_popn': 'TextEdit', 'male': 'TextEdit', 'female': 'TextEdit', 'area': 'TextEdit', 'Pop_densty': 'TextEdit', });
lyr_PopulationDensity_1.set('fieldLabels', {'OBJECTID': 'no label', 'WARD': 'inline label - always visible', 'Ward_1': 'no label', 'T_popn': 'no label', 'male': 'no label', 'female': 'no label', 'area': 'no label', 'Pop_densty': 'no label', });
lyr_TikapurBoundary_2.set('fieldLabels', {'OBJECTID': 'no label', 'WARD': 'no label', 'Ward_1': 'no label', 'T_popn': 'no label', 'male': 'no label', 'female': 'no label', 'area': 'no label', 'Pop_densty': 'no label', });
lyr_RoadNetwork_3.set('fieldLabels', {'full_id': 'inline label - always visible', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'level': 'no label', 'motorroad': 'no label', 'vehicle': 'no label', 'waterway': 'no label', 'motor_vehi': 'no label', 'incline': 'no label', 'horse': 'no label', 'access': 'no label', 'descriptio': 'no label', 'lane_marki': 'no label', 'lit': 'no label', 'segregated': 'no label', 'value': 'no label', 'seasonal': 'no label', 'ford': 'no label', 'natural': 'no label', 'service': 'no label', 'noname': 'no label', 'man_made': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'tunnel': 'no label', 'cutting': 'no label', 'oneway': 'no label', 'trail_visi': 'no label', 'route': 'no label', 'tracktype': 'no label', 'bridge_str': 'no label', 'width_shou': 'no label', 'width_carr': 'no label', 'width_ROW': 'no label', 'width': 'no label', 'smoothness': 'no label', 'project_ur': 'no label', 'condition': 'no label', 'access_sta': 'no label', 'junction': 'no label', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'ref_old': 'no label', 'ref': 'no label', 'surface': 'no label', 'lanes': 'no label', });
lyr_Tikapur_population_size_4.set('fieldLabels', {'Ward_1': 'inline label - visible with data', 'T_popn': 'inline label - visible with data', 'male': 'inline label - visible with data', 'female': 'inline label - visible with data', 'area': 'inline label - visible with data', 'Pop_densty': 'inline label - visible with data', });
lyr_Tikapur_population_size_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});