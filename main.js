//window.onload=init
window.onload=setTimeout(init,1300);

function init(){

    //Controls

    //Full Screen Control
    const fullScreenControl = new ol.control.FullScreen({
        labelActive: "Fs",
        tipLabel: " Nomik's Full Screen Widget"
    });

    
    //Mouse Position Control
    const MousePositionControl = new ol.control.MousePosition({
         projection: "EPSG:4326"
    });


    //OverviewMapControl
    const OverviewMapControl = new ol.control.OverviewMap({
        collapsed:true, // If the pop-up is open
        layers:[
            new ol.layer.Tile({
                source:new ol.source.XYZ({
                    url: "https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png"
                })
            })
        ] 
    });


    
    // const ScaleLineControl =new ol.control.ScaleLine({
    // });

    //ZoomSliderControl
    const ZoomSLiderControl =new ol.control.ZoomSlider({
        //className:"Nomik ol-zoomslider ol-unselectable ol-control"
    });



    //ZoomToExtentControl
    const ZoomToExtentControl = new ol.control.ZoomToExtent({
        // extent: ol.proj.fromLonLat([23.74, 37.99, 25, 39])
        extent: [ol.proj.fromLonLat([23.955, 37.851])[0], ol.proj.fromLonLat([23.955, 37.851])[1], ol.proj.fromLonLat([24.11, 37.900])[0], ol.proj.fromLonLat([24.11, 37.900])[1]],
        tipLabel: "Zoom to Porto Rafti",
        label: "Z"
    });






    //Layers


    //BaseLayers ΥΠΟΒΑΘΡΑ
    
   //OSM STANDARD
    const OsmBasemap= new ol.layer.Tile({
        source: new ol.source.OSM(),
          visible: true,
          title:"OSMBasemap"
    })

    const TopoBasemap =  new ol.layer.Tile({
        source: new ol.source.OSM({
            url: "https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png"
        }),
        visible: false,
        title:"TopoBasemap"
    })

    const SatBasemap = new ol.layer.Tile({
        source: new ol.source.BingMaps({
            key: "AuyN2FZiMCY8ivcPiIWV4FWZMN5kDrqMkuuXFhi7JScIRjEZ20AqnnhdRx9z5AkV",
            imagerySet: "AerialwithLabels" //Road,CanvasDark, CanvasGray
        }),
        visible:false,
        title:"BingBasemap"
    })

    const TerrainBasemap = new ol.layer.Tile({
        source: new ol.source.Stamen({
            layer: 'terrain'
        }),
        visible:false,
        title:"TerrainBasemap"
    })

    const TonerBasemap = new ol.layer.Tile({
        source: new ol.source.Stamen({
            layer: 'toner'
        }),
        visible:false,
        title:"TonerBasemap"
    })

    const WatercolorBasemap= new ol.layer.Tile({
        source: new ol.source.Stamen({
            layer: 'watercolor'
        }),
        visible:false,
        title:"WatercolorBasemap"
    })

    //Layers below Basemaps ΕΠΙΠΕΔΑ ΚΑΤΩ ΑΠΟ ΥΠΟΒΑΘΡΑ
    const tileDebugLayer = new ol.layer.Tile({
        source: new ol.source.TileDebug({
        }),   
        projection:'EPSG:4326',            
        visible:false,
        title:"TileDebug"
    })

    const TopoServicePispi =new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: "https://tiles.arcgis.com/tiles/zX8NTiUjIKUVyth8/arcgis/rest/services/myMapTopographic/MapServer/tile/{z}/{y}/{x}",
            crossOrigin:"Anonymous",
        }),
        visible:false,
        title:"PispidikisTopo"
    })

    const ArcGISRestService = new ol.layer.Tile({
        source: new ol.source.TileArcGISRest({
            url: "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Population_World/MapServer",
        }),
        visible:false,
        title: "ArcGISRest"
    })

    const WMSService = new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url:"https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WMSServer?",
                params:{
                    LAYERS:1,
                    FORMAT:'image/png',
                }
            }),
            visible:false,
            title:"WMSService"           
        })

    // const WMSFireNasa = new ol.layer.Tile({
    //     source: new ol.source.TileWMS({
    //         url:"https://firms.modaps.eosdis.nasa.gov/mapserver/wms/fires/9ef72ae9ceb312bb5c203ba91df52e2a/",
    //         params:{
    //             LAYERS: "fires_modis_24",
    //             FORMAT:'image/png',
    //         }
    //     }),
    //     visible:true,
    //     title:"FIRMSNASA"
    // })
    
        

    //VECTOR ΔΕΔΟΜΕΝΑ
    const osmvectortile = new ol.layer.VectorTile({
        source: new ol.source.VectorTile({
            url:'https://api.maptiler.com/tiles/v3/{z}/{x}/{y}.pbf?key=hWbIZbOZXMFVb5Z9VLy3',
            format: new ol.format.MVT(),
            attributions:'<a href=https://www.linkedin.com/in/nikolaos-nomikos-699419206/>Ⓒ Nomikos Nikolaos <a/>'
        }),
        visible:false,
        title:'osmvectortile' //Auto pou einai value sto index!!!
    })

    const osmcontoursvector = new ol.layer.VectorTile({
        source: new ol.source.VectorTile({
            url:'https://api.maptiler.com/tiles/contours/{z}/{x}/{y}.pbf?key=hWbIZbOZXMFVb5Z9VLy3',
            format: new ol.format.MVT(),
            attributions:'<a href=https://www.linkedin.com/in/nikolaos-nomikos-699419206/>Ⓒ Nomikos Nikolaos <a/>'
        }),
        visible:false,
        title:'osmcontoursvector' //Auto pou einai value sto index!!!
    })

    const CountriesBorders = new ol.layer.VectorTile({
        source: new ol.source.VectorTile({
            url:'https://api.maptiler.com/tiles/countries/{z}/{x}/{y}.pbf?key=hWbIZbOZXMFVb5Z9VLy3',
            format: new ol.format.MVT(),
            attributions:'<a href=https://www.linkedin.com/in/nikolaos-nomikos-699419206/>Ⓒ Nomikos Nikolaos <a/>'
        }),
        visible:false,
        title:'borders' //Auto pou einai value sto index!!!
    })

    const fillStyle= new ol.style.Fill({
        color:[40,119,247,1]
    })

    const strokeStyle= new ol.style.Stroke({
        color:[249,249,249,1],
        width:3
    })

    const regularShape = new ol.style.RegularShape({
        fill: new ol.style.Fill({
            color:[99,103,168,0.8]
        }),
        stroke:strokeStyle,
        points:3,
        radius:10
    })

    const iconStyle = new ol.style.Icon({
        //imgSize:[260],
        scale:0.1,
        //size:2000,
        src: "./CngSymbol.jpg"
    })


    const placesGeoJSON = new ol.layer.Vector({
        source: new ol.source.Vector({
            url:'./map.geojson',
            format: new ol.format.GeoJSON()
        }),
        visible:false,
        title:"PlacesGeoJSON",
        style: new ol.style.Style({
            //fill: fillStyle,
            //stroke: strokeStyle,
            image: regularShape
        })
    })

    const placesKML = new ol.layer.Vector({
        source: new ol.source.Vector({
            url:"./map.kml",
            format: new ol.format.KML()
        }),
        visible:false,
        title:"PlacesKML"
    })
    


   

    const CngKML = new ol.layer.Vector({
        source: new ol.source.Vector({
            url:"./cng.kml",
            format: new ol.format.KML()
        }),
        visible:false,
        title:"CngStations",
        style: new ol.style.Style({
            fill: fillStyle,
            stroke: strokeStyle,
            image: regularShape
        })
    })

    const HeatMapFire= new ol.layer.Heatmap({
        source: new ol.source.Vector({
            url:'./EuropesFires.kml',
            format: new ol.format.KML
        }),
        radius: 5,
        blur:10,
        visible:false,
        title:"HeatMap"
    })

    const HeatMapFire2= new ol.layer.Heatmap({
        source: new ol.source.Vector({
            url:'./Fires_03_04_08.kml',
            format: new ol.format.KML,
            attributions:'<a href=https://www.linkedin.com/in/nikolaos-nomikos-699419206/>Developed by Nomikos Nikolaos <a/>'
        }),
        radius: 6,
        blur:6,
        visible:false,
        title:"HeatMap2"
    })

    const HeatMapFire3= new ol.layer.Heatmap({
        source: new ol.source.Vector({
            url:'./06_08Fire.kml',
            format: new ol.format.KML,
            attributions:'<a href=https://www.linkedin.com/in/nikolaos-nomikos-699419206/>Developed by Nomikos Nikolaos <a/>'
        }),
        radius: 6,
        blur:6,
        visible:false,
        title:"HeatMap3"
    })

    const HeatMapFire4= new ol.layer.Heatmap({
        source: new ol.source.Vector({
            url:'./07_08.kml',
            format: new ol.format.KML,
            attributions:'<a href=https://www.linkedin.com/in/nikolaos-nomikos-699419206/>Developed by Nomikos Nikolaos <a/>'
        }),
        radius: 6,
        blur:6,
        visible:false,
        title:"HeatMap4"
    })

    const HeatMapFire5= new ol.layer.Heatmap({
        source: new ol.source.Vector({
            url:'./08_08.kml',
            format: new ol.format.KML,
            attributions:'<a href=https://www.linkedin.com/in/nikolaos-nomikos-699419206/>Developed by Nomikos Nikolaos <a/>'
        }),
        radius: 6,
        blur:6,
        visible:false,
        title:"HeatMap5"
    })



    //map.addLayer(osmvectortile);

    const osmvectortileStyle = 'https://api.maptiler.com/maps/878b79be-8071-47d1-8a03-b80a2d274d13/style.json?key=hWbIZbOZXMFVb5Z9VLy3'
    const osmcontourStyle ="https://api.maptiler.com/maps/a4890cce-bbf0-4ab9-855e-84b395fc8210/style.json?key=hWbIZbOZXMFVb5Z9VLy3"
    const bordersStyle= "https://api.maptiler.com/maps/4e913526-d279-4331-8a71-815814b3e573/style.json?key=hWbIZbOZXMFVb5Z9VLy3"
    //olms.apply(map,osmcontourStyle);
    //olms.apply(map,osmvectortileStyle);
    //Layers Group 

    const Layers2=new ol.layer.Group({
        layers:[
            TopoServicePispi,ArcGISRestService,tileDebugLayer,WMSService,osmvectortile,osmcontoursvector,CountriesBorders,placesKML,placesGeoJSON,HeatMapFire,CngKML,HeatMapFire2,HeatMapFire3,HeatMapFire4,HeatMapFire5
        ],
        zIndex:2
    })




    const Basemaps=new ol.layer.Group({
        layers:[
            OsmBasemap,TopoBasemap,SatBasemap,TerrainBasemap,TonerBasemap,WatercolorBasemap
        ],
        zIndex:1
    })

    //Base Layer Switch
    const BaseMapElements = document.querySelectorAll(".sidebar > input[type=radio]"); //extract a list of elements of basemaps in html
    console.log(BaseMapElements);
    for(let BaseMapElement of BaseMapElements){
        BaseMapElement.addEventListener('change',function(){
            console.log(this); //print the selected Basemap Element
            console.log(this.value);
            let BaseMapElementValue=(this.value);
            Basemaps.getLayers().forEach(function(element,index,array){
                console.log(element.get('title'));//it returns collection of layers and prints the title property in js of each basemap
                let BaseMapName= element.get('title');
                element.setVisible(BaseMapName === BaseMapElementValue)
                console.log('BaseMapName: '+ BaseMapName, 'BaseMapElementValue: '+ BaseMapElementValue);
                console.log(element.get('title'), element.get('visible'));
            }); 
        })
    }

    //Layer Switch
    const LayerElements = document.querySelectorAll(".sidebar > input[type=checkbox]"); //extract a list of elements of layers in html
    console.log(LayerElements);
    for(let LayerElement of LayerElements){
        LayerElement.addEventListener('change',function(){
            console.log(this); //print the selected Basemap Element
            console.log(this.value);
            let LayerElementValue=(this.value);
            let LayerRasterLayer;
            Layers2.getLayers().forEach(function(element,index,array){
                if(LayerElementValue ==element.get('title')){
                    LayerRasterLayer=element;
                }
            })
            this.checked ? LayerRasterLayer.setVisible(true) : LayerRasterLayer.setVisible(false)
        })
    }


    //BasemapsGroupLayer
    // const Basemaps2= new ol.layer.Group({
    //     layers: [
    //         //OSM TOPOGRAPHIC MAP
    //         new ol.layer.Tile({
    //             source: new ol.source.OSM({
    //                 url: "https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png"
    //             }),
    //             zIndex: 0,
    //             visible: false
    //         }),
    //         //OSM STANDARD BASEMAP
    //         new ol.layer.Tile({
    //             source: new ol.source.OSM({
    //                 attributions: '<a href=https://www.linkedin.com/in/nikolaos-nomikos-699419206/>Ⓒ Nomikos Nikolaos <a/>'
    //               }),
    //               zIndex:1,
    //               visible: true,
    //         }),
    //         //BingMaps Basemap
    //         new ol.layer.Tile({
    //             source: new ol.source.BingMaps({
    //                 key: "AuyN2FZiMCY8ivcPiIWV4FWZMN5kDrqMkuuXFhi7JScIRjEZ20AqnnhdRx9z5AkV",
    //                 imagerySet: "AerialwithLabels"
    //             }),
    //             zIndex:3,
    //             visible:false,
    //         }),
    //         //CartoDB BaseMap 
    //         new ol.layer.Tile({
    //             source: new ol.source.XYZ({
    //                 url: "https://{1-4}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
    //             }),
    //             zIndex:2,
    //             visible:false,
    //         }),
    //         //TileDebug
    //         new ol.layer.Tile({
    //             source: new ol.source.TileDebug({
    //             }),   
    //             projection:'EPSG:4326',            
    //             zIndex:9,
    //             visible:false,
    //             opacity:0.4,
    //         }),
    //         //Stamen watercolor
    //         new ol.layer.Tile({
    //             source: new ol.source.Stamen({
    //                 layer: 'terrain'
    //             }),
    //             visible:false,
    //             zIndex:5,
    //         }),
    //         //Stamen labels
    //         new ol.layer.Tile({
    //             source: new ol.source.Stamen({
    //                 layer: 'terrain-labels'
    //             }),
    //             visible:false,
    //             zIndex:10,
    //         }),
    //         //Stamen watercolor
    //         new ol.layer.Tile({
    //             source: new ol.source.Stamen({
    //                 layer: 'toner'
    //             }),
    //             visible:false,
    //             zIndex:6,
    //         }),
    //         //Stamen watercolor
    //         new ol.layer.Tile({
    //             source: new ol.source.Stamen({
    //                 layer: 'watercolor'
    //             }),
    //             visible:false,
    //             zIndex:7,
    //         }),

    //         //Topographic Map Service ArcGIS Online Pispidikis
    //         new ol.layer.Tile({
    //             source: new ol.source.XYZ({
    //                 url: "https://tiles.arcgis.com/tiles/zX8NTiUjIKUVyth8/arcgis/rest/services/myMapTopographic/MapServer/tile/{z}/{y}/{x}",
    //                 crossOrigin:"Anonymous",
    //             }),
    //             visible:true,
    //             zIndex:12
    //         }),

    //         //tile ArcGIS REST API LAYER
    //         //population density
    //         new ol.layer.Tile({
    //             source: new ol.source.TileArcGISRest({
    //                 url: "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Population_World/MapServer",
    //             }),
    //             visible:false,
    //             zIndex:13,
    //         }),

    //         //Sto topographiko bazw XYZ gt den htan epilegmeno otan dhmiourghthike to map service h supported orientation export map enw sto population density htan epilegmenh ayth h dynatothta
            
    //         //WMS Service
    //         // new ol.layer.Tile({
    //         //     source: new ol.source.TileWMS({
    //         //         url:"https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WMSServer?",
    //         //         params:{
    //         //             LAYERS:1,
    //         //             FORMAT:'image/png',
    //         //         }
    //         //     }),
    //         //     visible:false,
    //         //     zIndex:14,             
    //         // }),

        
    //         // new ol.layer.Tile({
    //         //     source: new ol.source.OSM({
    //         //         url: "https://{a-b}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
    //         //     }),
    //         //     zIndex:4,
    //         //     visible:true
    //         // })
    //     ]
    // });

    // const BingTest= new ol.layer.Tile({
    //     source: new ol.source.BingMaps({
    //         key: "AuyN2FZiMCY8ivcPiIWV4FWZMN5kDrqMkuuXFhi7JScIRjEZ20AqnnhdRx9z5AkV",
    //         imagerySet: "AerialwithLabels"
    //     }),
    //     zIndex:1,
    //     visible:true,
    // });

    

    

    const map=new ol.Map({
        view: new ol.View({
            center:ol.proj.fromLonLat([25.5, 38.45]), // WEB MERCATOR l,f  Else Meters 2674590, +4562527.0297847847
            zoom:6.7,
            //maxZoom:16,
           // minZoom:5,
        }),
        layers:[Basemaps,Layers2],
        target:"js-map",
        keyboardEventTarget: document,
        controls: ol.control.defaults().extend([
            fullScreenControl,
            MousePositionControl,
            OverviewMapControl,
            //ScaleLineControl,
            ZoomSLiderControl,
            ZoomToExtentControl
        ])
        //dragging: pointermove
    })

    // map.addLayer(BingTest);
    // console.log(BingTest.getSource());
    // console.log(BingTest.getKeys());
    console.log(ol.control.defaults())

    
    
    
    
    
    //AFORA CLICKED COORDINATES TOOL

    // const popupContainerElement=document.getElementById('popup-coordinates');
    // const popup= new ol.Overlay({
    //     element: popupContainerElement,
    //     positioning: "bottom-left"
    // })
    // map.addOverlay(popup);
    //CLICKED COORDINATE TOOL FUNCTION
    // map.on('click',function(e){
    //     //console.log(e.coordinate);
    //     const clickedCoordinate1 = ol.proj.toLonLat(e.coordinate); 
    //     const clickedCoordinate=e.coordinate;
    //     popup.setPosition(undefined);
    //     popup.setPosition(clickedCoordinate);
    //     popupContainerElement.innerHTML=clickedCoordinate1;
    //     console.log("WGS84 λ,φ: ",clickedCoordinate1);
    //     console.log("Web Mercator Auxiliary x,y: ",clickedCoordinate, " meters")
    // })





    //POP UP OVERLAY FOR VECTOR CNG STATIONS SOS
    //VECTOR FEATURE POP UP
    const overlayContainerElement=document.querySelector('.overlay-container');
    const overlayLayer = new ol.Overlay({
        element:overlayContainerElement
    })
    map.addOverlay(overlayLayer);
    const overlayFeatureName = document.getElementById('feature_name');
    const overlayFeatureCity = document.getElementById('feature_city');
     
    //VECTOR INTERACTION
    map.on("pointermove",function(e){
        overlayLayer.setPosition(undefined);   
        map.forEachFeatureAtPixel(e.pixel,function(feature,layer){
            console.log(e.coordinate);
            let clickedCoordinate2 = e.coordinate;
            let CityFeature=feature.get('City');
            let NameFeature=feature.get('Name');
            //if(CityFeature && NameFeature != undefined){
            overlayLayer.setPosition(clickedCoordinate2);
            overlayFeatureName.innerHTML='Company: ' + NameFeature;
            overlayFeatureCity.innerHTML='Region: '+ CityFeature;            
        },
        {
            layerFilter: function(layerCandidate){
                return layerCandidate.get('title') === 'CngStations'
            }
        })
    });



    //DRAG ROTATE TOOL
    const DragRotateInteraction= new ol.interaction.DragRotate({
        condition: ol.events.condition.altKeyOnly
    })    
    map.addInteraction(DragRotateInteraction);


    //map.addLayer(Layers2);
    //Layers2 swith logic
    


    fetch(osmcontourStyle).then(function(response){
        response.json().then(function(glStyle){
            //console.log(glStyle)
            olms.applyStyle(osmcontoursvector,glStyle,'70a6bc5f-ab1f-4700-ba48-827a60aeabaf')
        });
    });

    fetch(bordersStyle).then(function(response){
        response.json().then(function(glStyle){
            //console.log(glStyle)
            olms.applyStyle(CountriesBorders,glStyle,"5abcd050-59ee-4677-8f45-d6217a1e06d9")
        });
    });

    //map.addLayer(placesGeoJSON);
    //map.addLayer(placesKML);
    //olms.apply(map,osmcontourStyle);

    //map.addLayer(GroupLayer);


    

    //DRAW INTERACTION TOOL
    // const drawInteraction= new ol.interaction.Draw({
    //     type:'Polygon',
    //     freehand: true
    // })
    // map.addInteraction(drawInteraction);
    // drawInteraction.on('drawend', function(e){
    //     let parser=new ol.format.GeoJSON();
    //     let drawnFeatures=parser.writeFeaturesObject([e.feature]);//as a GeoJSON Feature Object
    //     let drawnFeatures2=parser.writeFeatures([e.feature]);//Encodes an array of features as an array
    //     console.log(drawnFeatures);
    //     console.log(drawnFeatures.features[0].geometry.coordinates);
    //     console.log(drawnFeatures2);
    // })




    // zoom1=document.getElementsByClassName("ol-zoomslider");
    // zoom2=zoom1[0];
    // myzoomdiv=document.createElement("div");
    // myzoomdiv.className="myzoom1";
    // myzoomdiv.appendChild(zoom2);

    //map.addControl()

}



/*
const PortoPolygon = new ol.layer.Vector({
    source: new ol.source.Vector({
        format: new ol.format.GeoJSON(),
        url: './test.geojson'
    })
})
map.addLayer(PortoPolygon);
*/