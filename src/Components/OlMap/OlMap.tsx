import { useEffect, useRef } from 'react';
import styles from "./OlMap.module.css"
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

const OlMap = () => {
    const mapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!mapRef.current) return;

        const raster = new TileLayer({
            source: new OSM(),
        });

        const extent = [-40075016.68557849, -20037508.342789244, 40075016.68557849, 20037508.342789244];

        const map = new Map({
            layers: [raster],
            target: mapRef.current,
            view: new View({
                center: fromLonLat([100, 61]),
                zoom: 3,
                extent: extent,
                maxZoom: 18,
                minZoom: 2,
            }),
        });

        return () => {
            map.setTarget(undefined);
        };
    }, []);

    return (
        <div
            className={styles.map}
            ref={mapRef}
        />
    );

};

export default OlMap;